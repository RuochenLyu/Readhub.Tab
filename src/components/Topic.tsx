import type { Topic as TopicType } from '../types';
import { formatRelative } from '../lib/format';
import styles from './Topic.module.css';

export default function Topic({
  topic,
  index,
}: {
  topic: TopicType;
  index: number;
}) {
  return (
    <div class={styles.topic} style={`--i: ${index}`}>
      <h3 class={styles.title}>
        <a href={`https://readhub.cn/topic/${topic.uid}`}>{topic.title}</a>
      </h3>
      <div class={styles.meta}>
        <time>{formatRelative(topic.publishDate)}</time>
        {topic.newsAggList.map((item, idx) => {
          if (idx < 3) {
            return (
              <a key={item.uid} href={item.url} title={item.title}>
                {item.siteNameDisplay}
              </a>
            );
          }
          if (idx === topic.newsAggList.length - 1) {
            return (
              <span key={item.uid}>等 {topic.newsAggList.length} 个来源</span>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}
