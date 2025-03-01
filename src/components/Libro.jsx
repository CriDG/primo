
import './Libro.css';
// import Card from './Card';
import Button from './Button';
import LikeButton from './LikeButton';

export default function Libro({ children, numeroPagine, anno, titolo, autore, genere, immagine, quantita, isDisponibile }) {


  return (
    <>
   <div
      style={{
        backgroundColor: isDisponibile ? "yellow" : "red",
        color: isDisponibile ? "black" : "white",
        padding: "5px",
        borderRadius: "10px",
        transition: "background-color 0.3s ease-in-out",
        marginBottom: '15px',
        maxWidth: "500px",
        width: "100%",
        fontSize: "10px",
        lineHeight: "1.2",
      }}
    >
      <div className="container-libro">
        <div className="container-info">
          <h3>{titolo}</h3>
          <p><strong>Autore:</strong> {autore}</p>
          <p><strong>Genere:</strong> {genere}</p>
          <p><strong>Anno:</strong> {anno}</p>
          <p><strong>Numero Pagine:</strong> {numeroPagine}</p>
          {quantita === 0 ? (
            <p className="libro-non-disponibile">❌ NON DISPONIBILE</p>
          ) : (
            <p className={quantita < 3 ? "quantita-bassa" : ""}>
              <strong>Quantità:</strong> {quantita}
            </p>
          )}
          
        </div>

        <div className="container-img">
          <img src={immagine} alt={titolo} style={{ width: "100px", height: "150px" }} 
          />
         
          
        </div>
      </div>
      <Button des='Descrizione' msg='👍' />
      <LikeButton /> 
     
       
      </div>
      {children}
    </>
  );

}


