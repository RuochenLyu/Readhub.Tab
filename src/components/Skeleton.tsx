import styles from './Skeleton.module.css';

const WIDTHS = ['88%', '72%', '94%', '68%', '84%'];

export default function Skeleton() {
  return (
    <>
      {WIDTHS.map((w, i) => (
        <div key={i} class={styles.topic} style={`--i: ${i}`}>
          <div class={styles.title} style={`width: ${w}`} />
          <div class={styles.meta} />
        </div>
      ))}
    </>
  );
}
