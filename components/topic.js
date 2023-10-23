import pangu from 'pangu';
import dayjs from 'dayjs';
import styles from './topic.module.css';

export default function Topic({ topic }) {
  return (
    <div className={styles.topic}>
      <h3 className={styles.title}>
        <a href={`https://readhub.cn/topic/${topic.uid}`}>
          {pangu.spacing(topic.title)}
        </a>
      </h3>
      <div className={styles.meta}>
        <time>{dayjs(topic.publishDate).fromNow()}</time>
        {topic.newsAggList.map((item, index) => {
          if (index < 3) {
            return (
              <a key={item.uid} href={item.url} title={item.title}>
                {item.siteNameDisplay}
              </a>
            );
          }
          if (index === topic.newsAggList.length - 1) {
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
