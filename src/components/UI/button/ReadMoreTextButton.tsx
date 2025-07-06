'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import styles from './button.module.scss';
import { useI18n } from '@/hooks/useI18n';
import { useLocal } from '@/hooks/useLocal';

export default function ReadMoreTextButton({ text } : { text: string }) {
  const { local } = useLocal();
  const t = useI18n(local);

  const [isHover, setIsHover] = useState(false);

  const handleIsHover = () => {
    setIsHover(true);
  };

  const handleUnIsHover = () => {
    setIsHover(false);
  };

  return (
    <div className={styles['more-text-btn']}>
      <motion.div
        className={styles['more-text-btn-top']}
        onMouseEnter={handleIsHover}
        onMouseLeave={handleUnIsHover}
      >
        {t('button.readMore')}
        <motion.div
          className={styles['more-text-btn-arrow']}
          animate={{ x: isHover ? 5 : 0 }}
          transition={{ duration: 0.4 }}
        >
          <FiArrowRight />
        </motion.div>
      </motion.div>
    </div>
  );
}
