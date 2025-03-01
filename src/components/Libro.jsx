
import './Libro.css';
// import Card from './Card';
// import Button from './Button';
export default function Libro ({ children,numeroPagine, anno, titolo, autore, genere, immagine, quantita, isDisponibile }) {
   
    
    return (
        <>
              <div className='container-libro' >
                <div className="container-info"> 
                <h3>{titolo}</h3>
                <p>Autore:{autore}</p>
                <p>Genere: {genere}</p>
                <p>Anno: {anno}</p>
                <p>Numero Pagine: {numeroPagine}</p>
                <p>{isDisponibile}</p>
                <p></p>
          
                {quantita === 0 ? (
            <p className="libro-non-disponibile">❌ NON DISPONIBILE</p>
                ) : (
            <p className={quantita < 3 ? "quantita-bassa" : ""}>
              <strong>Quantità:</strong> {quantita}
            </p>
                )}

                {/* <button onClick= {()=> alert('daca ma vezi e ok')}>like 👍 </button> */}
                  
                </div>

                <div className="container-img">
                <img src={immagine} alt={titolo} style = {{width: "50px", height: "100px" }}/>
                </div>

               
              </div>
              {children}
        </>
    );

}


