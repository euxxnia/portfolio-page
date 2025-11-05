import githubLogo from '/images/githubLogo.svg';
import instagramLogo from '/images/instagramLogo.svg';
import mailIcon from '/images/mailIcon.svg';

const Contact = () => {
  return (
    <div className="Contact">
      <a href="https://github.com/euxxnia" target="_blank" rel="noreferrer">
        <img src={githubLogo} className="logo" alt="github logo" />
      </a>
      <a
        href="https://www.instagram.com/rrrr.chive/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={instagramLogo} className="logo" alt="instagram logo" />
      </a>
      <a href="mailto:eugene@snu.ac.kr" target="_blank" rel="noreferrer">
        <img src={mailIcon} className="logo" alt="mail" />
      </a>
    </div>
  );
};

export default Contact;
