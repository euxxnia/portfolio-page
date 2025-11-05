import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from '../App.module.css';
import { type Work, works } from '../data/works';

type WorksListProps = {
  works: Work[];
};

const WorksList: React.FC<WorksListProps> = ({ works: worksFromProps }) => {
  // props로 받은 works의 이름 변경
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const navigate = useNavigate();

  // works 배열에서 고유한 태그 목록 추출
  const uniqueTags = Array.from(
    new Set(worksFromProps.flatMap((work) => work.tags)),
  );
  // 태그 선택 및 선택 해제 함수
  const toggleTag = (tag: string) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag],
    );
  };

  // 선택된 태그에 따라 works 필터링
  const filteredWorks =
    selectedTags.length > 0
      ? works.filter((work) =>
          work.tags.some((tag) => selectedTags.includes(tag)),
        )
      : works;

  return (
    <div>
      <div className={styles.filter}>
        {uniqueTags.map((tag) => (
          <button
            key={tag}
            className={`${styles.tag ?? ''} ${selectedTags.includes(tag) ? (styles.activeTag ?? '') : ''}`}
            onClick={() => {
              toggleTag(tag);
            }}
          >
            {tag}
          </button>
        ))}
        <button
          className={styles.tag}
          onClick={() => {
            setSelectedTags([]);
          }}
        >
          All
        </button>
      </div>

      <div className={styles.worksList}>
        {filteredWorks.map((work) => (
          <div
            key={work.id}
            className={styles.workItem}
            onClick={() => {
              navigate(`/works/${work.id}`);
            }}
            style={{ backgroundImage: `url(${work.image})` }}
          >
            <div className={styles.itemGradient} />
            <div className={styles.itemInner}>
              {/* <p>{work.tags.join(', ')}</p> */}
              <h3 className={styles.itemTitle}>{work.title}</h3>
              <div className={styles.itemInfos}>
                <p>{work.keywords.join(', ')}</p>
                <p>{work.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const WorksPage = () => {
  return <WorksList works={works} />;
};

export default WorksPage;
