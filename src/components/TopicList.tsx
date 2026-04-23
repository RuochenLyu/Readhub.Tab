import { useTopics } from '../lib/api';
import Topic from './Topic';
import Skeleton from './Skeleton';
import styles from './TopicList.module.css';

export default function TopicList() {
  const { data, status } = useTopics();

  return (
    <main class={styles.main}>
      {data ? (
        data.data.items.map((topic, i) => (
          <Topic key={topic.uid} topic={topic} index={i} />
        ))
      ) : status === 'error' ? (
        <div class={styles.error}>暂时读不到 Readhub，稍后自动重试</div>
      ) : (
        <Skeleton />
      )}
    </main>
  );
}
