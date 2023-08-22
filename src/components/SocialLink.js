const SocialLink = ({ url, icon, styles }) => {
    return (
        <li>
            <a href={url} target="_blank" rel="noreferrer" className={styles}
            ><i className={icon}></i
            ></a>
        </li>
    );
}

export default SocialLink;