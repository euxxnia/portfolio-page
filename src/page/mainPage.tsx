import React from 'react';
import { Link } from 'react-router-dom';

import About from '../components/About.tsx';
import Contact from '../components/Contact.tsx';
import Publications from '../components/Publications.tsx';

const Chevron = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M6 3.5L10.5 8L6 12.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MainPage: React.FC = () => {
  return (
    <div>
      <main className="mainLayout">
        <About />
        <div className="mainRight">
          <p className="intro">
            My research interests lie in human-AI interaction, with a focus on
            designing systems that better{' '}
            <span className="interestEmphasis">
              align with how people represent, organize, and interpret
              information
            </span>
            . I am particularly interested in personal memory, user interfaces,
            and information representation.
          </p>
          <Publications />
          <nav className="moreLinks">
            <Link className="moreLink" to="/works">
              Design Projects
              <Chevron />
            </Link>
            <Link className="moreLink" to="/blog">
              Blogs
              <Chevron />
            </Link>
          </nav>
        </div>
      </main>
      <Contact />
    </div>
  );
};

export default MainPage;
