import Link from "next/link";
import { FaGithub, FaDiscord, FaYoutube, FaXTwitter, FaInstagram, FaPatreon, FaTiktok, FaViber, FaFacebook } from "react-icons/fa6";

const socials = [
    { icon: <FaGithub />, path:"" },
    { icon: <FaDiscord />, path:"" },
    { icon: <FaYoutube />, path:"" },
    { icon: <FaXTwitter />, path:"" },
    { icon: <FaInstagram />, path:"" },
    { icon: <FaTiktok />, path:"" },
    { icon: <FaViber />, path:"" },
    { icon: <FaPatreon />, path:"" },
    { icon: <FaFacebook />, path:"" },
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index)=>{
            return(
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            )
        })}

    </div>
  )
}

export default Social
