const SocialLink = ({ id, url, icon, style }) => {
    return (
        <li key={id}>
            <a href={url} target="_blank" rel="noreferrer" className={style}
            ><i className={icon}></i
            ></a>
        </li>
    );
}

export default SocialLink;