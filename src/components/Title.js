function Title({ text, spanText }) {
    return (
        <div className="section-title">
            <h2>{text} <span>{spanText}</span></h2>
        </div>
    );
}

export default Title;