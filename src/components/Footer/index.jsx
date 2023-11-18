import React from 'react';
import './styles.css';
import DE from '../../assets/DE.svg';
import Phone from '../../assets/phone.svg';
import Mail from '../../assets/mail.svg';
import Google from '../../assets/google.svg';
import Instagram from '../../assets/insta.svg';
import Facebook from '../../assets/face.svg';
import Youtube from '../../assets/you.svg';
import LinkedIn from '../../assets/link.svg';

const Footer = () => {
  return (
    <div className='Footer-container'>
      <div className='FooterMain-container'>
        <img src={DE} alt='logo' />
        <p>
          As we continue our journey, we remain steadfast in our aspiration to
          uphold the same unwavering quality in educational content. DeeCee is
          not just about imparting knowledge; it's about nurturing a community
          of learners and giving back in meaningful ways.
        </p>
        <h4>Reach out to us</h4>
        <h4>
          <div className='FooterImage-Container'>
            <img src={Mail} alt='Mail' />
          </div>
          support@deeceeline.com{' '}
        </h4>
        <h4>
          <div className='FooterImage-Container'>
            <img src={Phone} alt='Phone' />
          </div>
          011-40848482
        </h4>
        <div className='GoogleContainer'>
          <img src={Google} alt='Google' />
        </div>
      </div>
      <div className='Quick-links'>
        <ul>
          <h4>Quick-links</h4>
        </ul>
        <ul>Home </ul>
        <ul>Courses Offered </ul>
        <ul>Blog</ul>
        <ul>Join our Live Classes</ul>
        <ul>Contact Us</ul>
        <ul>Free Videos</ul>
        <ul>Study Material</ul>
        <ul>Hiring/Careers</ul>
        <ul>FAQs</ul>
      </div>
      <div className='YoutubeChannel'>
        <ul>
          <h4>Our Youtube Channels</h4>
        </ul>
        <ul>Rajat Arora </ul>
        <ul>Rajat Arora Talks </ul>
        <ul>Rajat Arora Shorts </ul>
        <ul>ajat Arora ISC nd State Boards </ul>
        <ul>Rajat Arora UG and Professional Courses </ul>
        <ul>Rajat Arora CUET and Entrance Exams </ul>
        <ul>Rajat Arora TET </ul>
      </div>
      <div className='HelpSupport'>
        <ul>
          <h4>Help & support</h4>
        </ul>
        <ul>Terms of use </ul>
        <ul>Site Map </ul>
        <ul>Refund Policy </ul>
        <ul>
          <h4>Find us on</h4>
        </ul>
        <ul>
          <img src={Youtube} alt='Youtube' />
          YouTube
        </ul>
        <ul>
          <img src={Instagram} alt='Instagram' />
          Instagram
        </ul>
        <ul>
          <img src={Facebook} alt='Facebook' />
          Facebook{' '}
        </ul>
        <ul>
          <img src={LinkedIn} alt='LinkedIn' />
          LinkedIn{' '}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
