import profile from '/favicon.svg';

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
      <div className="nameRow">
        <h3 className="name">Eugene Choi</h3>
        <span className="nameKo">최유진</span>
      </div>
      <div className="nameDivider" />
      <p className="intro">
        I am a senior undergraduate student at Seoul National University, double
        majoring in{' '}
        <span className="majorEmphasis">Visual Communication Design</span> and{' '}
        <span className="majorEmphasis">
          Computer Science &amp; Engineering
        </span>
        .
      </p>
      <p className="intro">
        I am currently a research intern at{' '}
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
        </a>
        , advised by <span className="profName">Prof. Jinwook Seo</span>. My
        previous mentors include{' '}
        <span className="profName">Prof. Eunkyung Jo</span> at{' '}
        <a
          className="labLinkPlain"
          href="https://h2ci-lab.com/"
          target="_blank"
          rel="noreferrer"
        >
          POSTECH H2CI Lab
        </a>{' '}
        and <span className="profName">Prof. Juho Kim</span> at{' '}
        <a
          className="labLinkPlain"
          href="https://kixlab.org/"
          target="_blank"
          rel="noreferrer"
        >
          KAIST KIXLAB
        </a>
        .
      </p>
    </div>
  );
};

export default About;
