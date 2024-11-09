export  function Header({title}) {

    const style = {
        border: "0.1rem solid cyan",
        width: "auto",
        margin: "0.2rem",
        padding: "0.3rem",
        whiteSpace: "nowrap",
        textAlign: "center"
        };

    return (
        <div style={style}>
            {title}
        </div>
    )
}
