import react from "react"
import "./Event.css"
const Event = (props) => {
    let wiki = props.name.replace(/ /g,"_");
    return(
        <div className="card-event">
            <img src={props.image} />
            <div className="card-event-footer">
                <h2 className="card-event-footer-name">{props.name}</h2>
                <h3>Political Party: {props.politicalParty}</h3>
                <br></br>
                <a href={"https://en.wikipedia.org/wiki/"+wiki} target={"_blank"}>Wiki</a>
            </div>
        </div>
    )
}

export default Event;