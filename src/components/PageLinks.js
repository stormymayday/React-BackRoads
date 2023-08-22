import { pageLinks } from "../data.js";

const PageLinks = () => {
    return (
        <ul className="nav-links" id="nav-links">

            {
                pageLinks.map((link) => {

                    const { id, href, text } = link;

                    return (

                        <li key={id}>
                            <a href={href} className="nav-link">{text}</a>
                        </li>

                    );

                })
            }

        </ul>
    );
}

export default PageLinks;