import useSWR from 'swr';
import Topic from './topic';
import styles from './topic-list.module.css';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function TopicList() {
  const { data, error } = useSWR(
    'https://api.readhub.cn/topic?pageSize=20',
    fetcher,
  );

  if (error || !data) return null;

  return (
    <main className={styles.main}>
      {data.data.map((topic) => (
        <Topic key={topic.id} topic={topic} />
      ))}
    </main>
  );
}
