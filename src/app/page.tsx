import { MysticBall } from '../components/MysticBall';
import styles from './page.module.scss';
import React from 'react';
import Image from 'next/image';
import { GITHUB_REPO_URL } from '@/constants/common';

export default function Home() {
  return (
    <div className={styles.root}>
      <MysticBall />
      <a href={GITHUB_REPO_URL} target="_blank" rel="noopener noreferrer">
        <Image
          className={styles.github}
          src="github-mark-white.svg"
          alt="github"
          width="42"
          height="42"
        />
      </a>
    </div>
  );
}
