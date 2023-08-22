const SocialLink = ({ id, url, icon, styles }) => {
    return (
        <li key={id}>
            <a href={url} target="_blank" rel="noreferrer" className={styles}
            ><i className={icon}></i
            ></a>
        </li>
    );
}

export default SocialLink;