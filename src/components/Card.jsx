// import './Card.css'
import Button from "./Button";
export default function Card ({children, isDisponibile}) {

//   function handleClick() {
//     alert ('ha fatto click');
//   }

    return (
        <>
       
        <div
            style={{
        
        backgroundColor: isDisponibile ? "yellow" : "red",
        color: isDisponibile ? "black" : "white",
        padding: "5px",
        borderRadius: "10px",
        transition: "background-color 0.3s ease-in-out",
        marginBottom : '15px',
        width: 'auto',
        maxWidth: "500px",
        width: "100%",
        fontSize: "10px", // Riduce il testo
        lineHeight: "1.2", // Riduce lo spazio tra le righe
      
      }}


        >
         {children} 
         {/* <button onClick={handleClick}>like 👍 
            
         </button> */}
        </div>
        </>
    );
}