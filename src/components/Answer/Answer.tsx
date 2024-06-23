import React from 'react';
import { ANSWERS } from '@/constants/answers';
import { getRandomInt } from '@/utils/common';
import styles from './Answer.module.scss';

export const Answer = () => {
  return (
    <div className={styles.root}>
      <div className={styles.load}>Думаю</div>
      <div className={styles.answer}>
        {ANSWERS[getRandomInt(0, ANSWERS.length - 1)]}
      </div>
    </div>
  );
};
