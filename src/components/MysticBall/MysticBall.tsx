'use client';

import React, { useState } from 'react';
import { Answer } from '@/components/Answer';
import styles from './MysticBall.module.scss';

export const MysticBall = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.root}>
      <div
        className={styles.ball}
        onClick={() => setCount((count) => count + 1)}
      >
        {Boolean(count) ? (
          <Answer key={count} />
        ) : (
          <div className={styles.trigger}>Узнать</div>
        )}
      </div>
    </div>
  );
};
