import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import styles from './Footer.module.scss';
import Button from '../../common/Button/Button';

const Footer = () => (
  <div className={styles.container}>
    <h2>Visit us on social medias</h2>
    <ul className={styles.socialMedia}>
      <li>
        <Button Type='div' className='icon'>
          <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
        </Button>
      </li>
      <li>
        <Button Type='div' className='icon'>
          <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
        </Button>
      </li>
      <li>
        <Button Type='div' className='icon'>
          <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
        </Button>
      </li>
      <li>
        <Button Type='div' className='icon'>
          <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
        </Button>
      </li>
    </ul>
  </div>
);

export default Footer;
