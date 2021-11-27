import React from 'react'
import { ICFacebook, ICGithub, ICInstagram, ICTwitter, ICWhatsapp, ICYoutube } from '../../../assets'
import './footer.scss'

const Icon = ({ img }) => {
    return (
        <div className="icon-wrapper">
            <img className="icon-medsos" src={img}  alt="icon" />
        </div>
    )
}


const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="logo">
                    <p>Kuy Blog</p>
                </div>
                <div className="social-wrapper">
                    <Icon img={ICFacebook} />
                    <Icon img={ICGithub} />
                    <Icon img={ICInstagram} />
                    <Icon img={ICTwitter} />
                    <Icon img={ICWhatsapp} />
                    <Icon img={ICYoutube} />

                </div>
            </div>
            <div className="copyright">
                <p>Copyright</p>
            </div>
        </div>
    )
}

export default Footer
