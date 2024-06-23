'use client';

import React, { useState } from 'react';
import { Answer } from '@/components/Answer';
import styles from './MysticBall.module.scss';

export const MysticBall = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.root}>
      <div className={styles.ball}>
        {Boolean(count) && <Answer key={count} />}
      </div>
      <button
        className={styles.button}
        onClick={() => setCount((count) => count + 1)}
      >
        Узнать
      </button>
    </div>
  );
};
