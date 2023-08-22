import PageLinks from "./PageLinks.js";
import SocialLink from "./SocialLink.js";
import { socialLinks } from "../data.js";

const Footer = () => {
    return (
        <footer className="section footer">

            <PageLinks parentClass={'footer-links'} itemClass={'footer-link'} />

            <ul className="footer-icons">

                {
                    socialLinks.map((link) => {

                        return (

                            <SocialLink {...link} styles={'footer-icon'} />

                        );

                    })
                }

            </ul>

            <p className="copyright">
                copyright &copy; Backroads travel tours company
                <span id="date">{new Date().getFullYear()}</span> all rights reserved
            </p>

        </footer>
    );
};

export default Footer;