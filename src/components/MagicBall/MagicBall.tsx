'use client';

import React, { useState } from 'react';
import { Answer } from '@/components/Answer';
import styles from './MagicBall.module.scss';

export const MagicBall = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.root}>
      {Boolean(count) && <Answer />}
      <button onClick={() => setCount((count) => count + 1)}>Узнать</button>
    </div>
  );
};
