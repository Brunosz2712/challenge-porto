import Image from 'next/image';
import facebook from '@/app/public/img/Facebook-f.png'
import instagram from '@/app/public/img/Instagram.png'
import linkedin from '@/app/public/img/LinkedIn.png'
import youtube from '@/app/public/img/YouTube.png'
import twitter from '@/app/public/img/Twitter.png'
import tiktok from '@/app/public/img/TikTok.png'

export default function Site() {
    return (
        <nav className="Site bg-black p-4">
            <div className="flex flex-wrap justify-center gap-4">
                <a href="https://web.facebook.com/porto?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer">
                    <Image className="facebook" src={facebook} alt="Facebook" width={40} height={40} />
                </a>
                <a href="https://www.instagram.com/porto/" target="_blank" rel="noopener noreferrer">
                    <Image className="instagram" src={instagram} alt="Instagram" width={40} height={40} />
                </a>
                <a href="https://www.linkedin.com/company/porto/" target="_blank" rel="noopener noreferrer">
                    <Image className="linkedin" src={linkedin} alt="LinkedIn" width={40} height={40} />
                </a>
                <a href="https://www.youtube.com/portoseguro" target="_blank" rel="noopener noreferrer">
                    <Image className="youtube" src={youtube} alt="YouTube" width={40} height={40} />
                </a>
                <a href="https://twitter.com/portoseguro" target="_blank" rel="noopener noreferrer">
                    <Image className="twitter" src={twitter} alt="Twitter" width={40} height={40} />
                </a>
                <a href="https://www.tiktok.com/@portoseguro" target="_blank" rel="noopener noreferrer">
                    <Image className="tiktok" src={tiktok} alt="TikTok" width={40} height={40} />
                </a>
            </div>
        </nav>
    );
}
