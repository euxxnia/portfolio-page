import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../App.module.css';
import { blogs } from '../data/blogs';

const BlogPage: React.FC = () => {
  return (
    <div className={styles.blogList}>
      {blogs.map((blog) => (
        <Link
          key={blog.slug}
          to={`/blog/${blog.slug}`}
          className={styles.blogItem}
        >
          <img
            src={blog.image}
            alt={blog.title.en}
            className={styles.blogItemImage}
          />
          <div className={styles.blogItemBody}>
            <p className={styles.blogItemMeta}>
              {blog.date}
              {blog.source !== undefined && ` · ${blog.source.name}`}
            </p>
            <h3 className={styles.blogItemTitle}>{blog.title.en}</h3>
            <p className={styles.blogItemSubtitle}>{blog.title.ko}</p>
            <p className={styles.blogItemSummary}>{blog.summary.en}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogPage;
