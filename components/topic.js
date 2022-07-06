import pangu from 'pangu';
import dayjs from 'dayjs';
import styles from './topic.module.css';

export default function Topic({ topic }) {
  return (
    <div className={styles.topic}>
      <h3 className={styles.title}>
        <a
          href={
            topic.newsArray ? `https://readhub.cn/topic/${topic.id}` : topic.url
          }
        >
          {topic.order > 1000000 && <span>🔝 </span>}
          {pangu.spacing(topic.title)}
        </a>
      </h3>
      <div className={styles.meta}>
        <time>{dayjs(topic.publishDate).fromNow()}</time>
        {topic.siteName && <a href={topic.url}>{topic.siteName}</a>}
        {topic.newsArray.map((item, index) => {
          if (index < 3) {
            return (
              <a key={item.id} href={item.url} title={item.title}>
                {item.siteName}
              </a>
            );
          }
          if (index === topic.newsArray.length - 1) {
            return (
              <span key={item.id}>等 {topic.newsArray.length} 个来源</span>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}
