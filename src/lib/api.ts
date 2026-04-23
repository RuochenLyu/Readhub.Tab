import { useCallback, useEffect, useRef, useState } from 'preact/hooks';
import type { TopicListResponse } from '../types';

const API_URL = 'https://api.readhub.cn/topic/list?size=20&type=day';
const CACHE_KEY = 'readhub-topics';
const SUCCESS_THROTTLE_MS = 60_000;
const ERROR_THROTTLE_MS = 5_000;

export type FetchStatus = 'idle' | 'loading' | 'error';

function readCache(): TopicListResponse | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    return raw ? (JSON.parse(raw) as TopicListResponse) : null;
  } catch {
    return null;
  }
}

export function useTopics() {
  const [data, setData] = useState<TopicListResponse | null>(readCache);
  const [status, setStatus] = useState<FetchStatus>(() =>
    localStorage.getItem(CACHE_KEY) ? 'idle' : 'loading',
  );

  const inFlightRef = useRef(false);
  const lastSuccessRef = useRef(0);
  const lastAttemptRef = useRef(0);

  const refresh = useCallback(async () => {
    if (inFlightRef.current) return;
    const now = Date.now();
    if (now - lastSuccessRef.current < SUCCESS_THROTTLE_MS) return;
    if (now - lastAttemptRef.current < ERROR_THROTTLE_MS) return;

    lastAttemptRef.current = now;
    inFlightRef.current = true;
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = (await res.json()) as TopicListResponse;
      lastSuccessRef.current = Date.now();
      setData(json);
      setStatus('idle');
      localStorage.setItem(CACHE_KEY, JSON.stringify(json));
    } catch {
      setStatus((prev) => (prev === 'loading' ? 'error' : prev));
    } finally {
      inFlightRef.current = false;
    }
  }, []);

  useEffect(() => {
    refresh();
    const onVisible = () => {
      if (document.visibilityState === 'visible') refresh();
    };
    document.addEventListener('visibilitychange', onVisible);
    return () => document.removeEventListener('visibilitychange', onVisible);
  }, [refresh]);

  return { data, status };
}
