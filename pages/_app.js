import { useState, useEffect } from 'react';
import { SWRConfig } from 'swr';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import relativeTime from 'dayjs/plugin/relativeTime';

import 'styles/reset.css';
import 'styles/global.css';

function localStorageProvider() {
  const map = new Map(JSON.parse(localStorage.getItem('app-cache') || '[]'));

  window.addEventListener('beforeunload', () => {
    const appCache = JSON.stringify(Array.from(map.entries()));
    localStorage.setItem('app-cache', appCache);
  });

  return map;
}

export default function App({ Component, pageProps }) {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (isSSR) return null;

  dayjs.locale('zh-cn');
  dayjs.extend(relativeTime);

  return (
    <SWRConfig value={{ provider: localStorageProvider }}>
      <Component {...pageProps} />
    </SWRConfig>
  );
}
