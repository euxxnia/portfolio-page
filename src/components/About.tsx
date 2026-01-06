import profile from '/favicon.svg';

import Line from '../components/Line.tsx';

const About = () => {
  return (
    <div className="About">
      <div className="profileGroup">
        <img src={profile} className="profile" alt="profile image" />
        <img
          src="/images/profileImage.png"
          className="profile profileSecondary"
          alt="face photo"
          loading="lazy"
          decoding="async"
        />
      </div>
      <h3>최유진</h3>
      <p>Eugene Choi</p>
      <Line width="52px" />
      <p className="intro">
        I am a senior undergraduate student at Seoul National University, double
        majoring in{' '}
        <span className="majorEmphasis">Visual Communication Design</span> and{' '}
        <span className="majorEmphasis">
          Computer Science &amp; Engineering
        </span>
        . My passion lies in building systems that semantically structure
        memories and intentions to support human reflection. I am conducting
        research as an intern at{' '}
        <a
          className="labLink"
          href="https://hcil.snu.ac.kr/"
          target="_blank"
          rel="noreferrer"
        >
          SNU HCIL
          <img
            className="labLogo"
            src="/images/hcilLogo.png"
            alt="SNU HCIL logo"
            loading="lazy"
            decoding="async"
          />
        </a>{' '}
        advised by Prof. Jinwook Seo and{' '}
        <a
          className="labLink"
          href="https://kixlab.org/"
          target="_blank"
          rel="noreferrer"
        >
          KAIST KIXLAB
          <img
            className="labLogo"
            src="/images/kixlabLogo.png"
            alt="KAIST KIXLAB logo"
            loading="lazy"
            decoding="async"
          />
        </a>{' '}
        advised by Prof. Juho Kim. I am especially drawn to purpose-driven and
        meaningful things.
      </p>
    </div>
  );
};

export default About;
