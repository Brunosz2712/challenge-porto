import Image from 'next/image';

export default function Site() {
    return (
        <nav className="Site">
            <div className="apps">
                <a href="https://web.facebook.com/porto?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer">
                    <Image className="facebook" src="/img/Facebook-f.png" alt="Facebook" width={143} height={191}/>
                </a>
                <a href="https://www.instagram.com/porto/" target="_blank" rel="noopener noreferrer">
                    <Image className="instagram" src="/img/Instagram.png" alt="Instagram" width={143} height={191}/>
                </a>
                <a href="https://www.linkedin.com/company/porto/" target="_blank" rel="noopener noreferrer">
                    <Image className="linkedin" src="/img/LinkedIn.png" alt="LinkedIn" width={143} height={191}/>
                </a>
                <a href="https://www.youtube.com/portoseguro" target="_blank" rel="noopener noreferrer">
                    <Image className="youtube" src="/img/YouTube.png" alt="YouTube" width={143} height={191}/>
                </a>
                <a href="https://twitter.com/portoseguro" target="_blank" rel="noopener noreferrer">
                    <Image className="twitter" src="/img/Twitter.png" alt="Twitter" width={143} height={191}/>
                </a>
                <a href="https://www.tiktok.com/@portoseguro" target="_blank" rel="noopener noreferrer">
                    <Image className="tiktok" src="/img/TikTok.png" alt="TikTok" width={143} height={191}/>
                </a>
            </div>
        </nav>
    );
}
