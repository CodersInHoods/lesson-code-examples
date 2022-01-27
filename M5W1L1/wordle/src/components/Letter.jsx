import "./Letter.css"
/* 
props = {
    letter: string;
}
**/

export const Letter = (props) => {
    return <div className="letter">{props.letter}</div>
}