import { MagicBall } from '@/components/MagicBall';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.root}>
      <MagicBall />
    </div>
  );
}
