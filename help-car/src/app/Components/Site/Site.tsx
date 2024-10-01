import Image from 'next/image';
import Facebook from '../public/Facebook-f.png';
import Instagram from '../public/Instagram.png';
import Linkedin from '../public/LinkedIn.png';
import Youtube from '../public/YouTube.png';
import Twitter from '../public/Twitter.png';
import Tiktok from '../public/TikTok.png';

export default function Site() {
    return (
        <nav>
            <div>
                <a href="https://web.facebook.com/porto?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer">
                    <Image src={Facebook} alt="Facebook" />
                </a>
                <a href="https://www.instagram.com/porto/" target="_blank" rel="noopener noreferrer">
                    <Image src={Instagram} alt="Instagram" />
                </a>
                <a href="https://www.linkedin.com/company/porto/" target="_blank" rel="noopener noreferrer">
                    <Image src={Linkedin} alt="LinkedIn" />
                </a>
                <a href="https://www.youtube.com/portoseguro" target="_blank" rel="noopener noreferrer">
                    <Image src={Youtube} alt="YouTube" />
                </a>
                <a href="https://twitter.com/portoseguro" target="_blank" rel="noopener noreferrer">
                    <Image src={Twitter} alt="Twitter" />
                </a>
                <a href="https://www.tiktok.com/@portoseguro" target="_blank" rel="noopener noreferrer">
                    <Image src={Tiktok} alt="TikTok" />
                </a>
            </div>
        </nav>
    );
}
