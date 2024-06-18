import React from 'react';
import { ANSWERS } from '@/constants/answers';
import { getRandomInt } from '@/utils/common';

export const Answer = () => {
  return <div>{ANSWERS[getRandomInt(0, ANSWERS.length - 1)]}</div>;
};
