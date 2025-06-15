import React from 'react';
import styles from './Article.module.css';

interface ArticleProps {
  children: React.ReactNode;
}

const Article: React.FC<ArticleProps> = ({ children }) => {
  return <article className={styles.article}>{children}</article>;
};

export default Article;
