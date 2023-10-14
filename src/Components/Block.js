export function Block (props) {
    const a = props.color;
    return (
        <div onClick={props.onclick} style={{width: 50, height: 50, display: "inline-block", marginRight: 20, boxShadow: "3px 3px 4px black",
 backgroundColor: a}}></div>
    )
}