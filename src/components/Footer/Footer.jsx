import React from 'react';
import styles from "./Footer.module.css";
import Logo from '../Logo/Logo';
import Navlist from '../Navlist/Navlist';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <section>
        <div>
          <Logo />
        </div>
        <Navlist />
        <ul className={styles.socialListWrapper}>
        <li>
            <a href="https://www.linkedin.com/in/tanzeel-ansari-2a1327237/" rel='noreferrer' target='_blank'>
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/TanzeelShamsh" rel='noreferrer' target='_blank'>
              <TwitterIcon />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/tanzeel_18.12?igshid=OGQ5ZDc2ODk2ZA==" rel='noreferrer' target="_blank">
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/tanzeel-ansari-2a1327237/" rel='noreferrer' target="_blank">
              <FacebookIcon />
            </a>
          </li>
        </ul>
      </section>
      <div>
        <span>© 2023 Tanzeel. All right reserved.</span>
        <span>Privacy Policy</span>
        <span>Terms of Service</span>
      </div>
    </footer>
  )
}

export default Footer