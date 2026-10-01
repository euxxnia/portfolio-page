import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';

import styles from '../App.module.css';
import { type BlogLang, blogs } from '../data/blogs';

const LANG_LABELS: Record<BlogLang, string> = { en: 'English', ko: '한국어' };

const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [lang, setLang] = useState<BlogLang>('en');
  const selectedBlog = blogs.find((blog) => blog.slug === slug);

  if (selectedBlog === undefined) {
    return <div>Post not found</div>;
  }

  return (
    <article className={styles.blogDetailPage} lang={lang}>
      <div className={styles.blogLangToggle}>
        {(Object.keys(LANG_LABELS) as BlogLang[]).map((key) => (
          <button
            key={key}
            className={`${styles.tag ?? ''} ${lang === key ? (styles.activeTag ?? '') : ''}`}
            onClick={() => {
              setLang(key);
            }}
          >
            {LANG_LABELS[key]}
          </button>
        ))}
      </div>
      <h2 className={styles.worksDetailTitle}>{selectedBlog.title[lang]}</h2>
      <p className={styles.blogDetailSummary}>{selectedBlog.summary[lang]}</p>
      <div className={styles.worksDetailDivider}></div>
      <div className={styles.blogDetailMeta}>
        <span>{selectedBlog.date}</span>
        {selectedBlog.source !== undefined && (
          <a href={selectedBlog.source.url} target="_blank" rel="noreferrer">
            {lang === 'en'
              ? `Originally published in Korean on ${selectedBlog.source.name} ↗`
              : `${selectedBlog.source.name}에서 원문 보기 ↗`}
          </a>
        )}
      </div>
      {lang === 'en' && (
        <p className={styles.blogTranslationNote}>
          Translated from the original Korean post.
        </p>
      )}
      <div className={styles.blogDetailContent}>
        <ReactMarkdown>{selectedBlog.content[lang]}</ReactMarkdown>
      </div>
    </article>
  );
};

export default BlogDetailPage;
