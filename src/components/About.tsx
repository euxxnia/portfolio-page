import profile from '/favicon.svg';

import Line from '../components/Line.tsx';

const About = () => {
  return (
    <div className="About">
      <img src={profile} className="profile" alt="profile image" />
      <h3>최유진</h3>
      <p>Eugene Choi</p>
      <Line width="52px" />
      <p className="major">SNU Visual Communication Design</p>
      <p className="major">SNU Computer Science & Engineering (Double)</p>
      <Line width="52px" />
      <p className="light-text">
        especially drawn to purpose-driven and meaningful things
      </p>
    </div>
  );
};

export default About;
