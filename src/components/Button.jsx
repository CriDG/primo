import { useState } from "react";
import "./Button.css";
export default function Button ({des, msg}) {

//stato che gestisce la visibilita del codic    e
const [showDetails, setShowDetails] = useState(false);   

//funzione x mostrare/nascondere il parasgrafo
const handleClick = () => {
    setShowDetails(prev => !prev);
};

return (
        <>
        {/* <div> 
            <button onClick={() => alert (msg)} > {des}</button>
        </div> */}

        <div className="container-button">
            <button className="button-details"
             onClick={handleClick} >{des}</button>
            {showDetails && 
            <p className="details-box"
            >{msg}</p>}
        </div>
                
        </>
    );
}