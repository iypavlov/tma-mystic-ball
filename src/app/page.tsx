import { MysticBall } from '../components/MysticBall';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.root}>
      <MysticBall />
    </div>
  );
}
