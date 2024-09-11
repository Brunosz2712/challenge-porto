import Facebook from '../img/Facebook-f.png';
import Instagram from '../img/Instagram.png';
import Linkedin from '../img/LinkedIn.png';
import Youtube from '../img/YouTube.png';
import Twitter from '../img/Twitter.png';
import Tiktok from '../img/TikTok.png';
import styles from '../style/Site.module.css'

export default function Site() {
    return (
        <nav className={styles.Site}>
            <div className={styles.apps}>
                <a className={styles.facebook} href="https://web.facebook.com/porto?_rdc=1&_rdr" target="_blank">
                    <img src={Facebook} alt="Facebook" />
                </a>
                <a className={styles.instagram} href="https://www.instagram.com/porto/" target="_blank" rel="noopener noreferrer">
                    <img src={Instagram} alt="Instagram" />
                </a>
                <a className={styles.linkedin} href="https://www.linkedin.com/company/porto/" target="_blank" rel="noopener noreferrer">
                    <img src={Linkedin} alt="LinkedIn" />
                </a>
                <a className={styles.youtube} href="https://www.youtube.com/portoseguro" target="_blank" rel="noopener noreferrer">
                    <img src={Youtube} alt="YouTube" />
                </a>
                <a className={styles.twitter} href="https://twitter.com/portoseguro" target="_blank" rel="noopener noreferrer">
                    <img src={Twitter} alt="Twitter" />
                </a>
                <a className={styles.tiktok} href="https://www.tiktok.com/@portoseguro" target="_blank" rel="noopener noreferrer">
                    <img src={Tiktok} alt="TikTok" />
                </a>
            </div>
        </nav>
    );
}
