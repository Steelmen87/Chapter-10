import {FaStar} from "react-icons/fa";
import '../App.css';

export default function Star({selected = false}) {
    return (
        <><h1>Great Star</h1>
            <FaStar color={selected ? "red" : "grey"} id="star"/>
        </>
    )
}