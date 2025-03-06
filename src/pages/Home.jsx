import React from 'react'
import Libro from '../components/Libro';
export default function Home() {
    const libri = [
        { id: 1, titolo: "Il Signore degli Anelli", genere: "Fantasy", anno: 1954, autore: "J.R.R. Tolkien", immagine: "https://example.com/lotr.jpg", quantita: 5, numeroPagine: 1216, isDisponibile: true },
        { id: 2, titolo: "1984", genere: "Distopico", anno: 1949, autore: "George Orwell", immagine: "https://example.com/1984.jpg", quantita: 3, numeroPagine: 328, isDisponibile: true },
        { id: 3, titolo: "Il Nome della Rosa", genere: "Storico", anno: 1980, autore: "Umberto Eco", immagine: "https://example.com/nome-rosa.jpg", quantita: 0, numeroPagine: 536, isDisponibile: false },
        { id: 4, titolo: "Harry Potter e la Pietra Filosofale", genere: "Fantasy", anno: 1997, autore: "J.K. Rowling", immagine: "https://example.com/hp1.jpg", quantita: 10, numeroPagine: 223, isDisponibile: true },
        { id: 5, titolo: "Il Grande Gatsby", genere: "Narrativa", anno: 1925, autore: "F. Scott Fitzgerald", immagine: "https://example.com/gatsby.jpg", quantita: 0, numeroPagine: 180, isDisponibile: false },
        { id: 6, titolo: "Orgoglio e Pregiudizio", genere: "Romanzo", anno: 1813, autore: "Jane Austen", immagine: "https://example.com/orgoglio.jpg", quantita: 6, numeroPagine: 432, isDisponibile: true },
        { id: 7, titolo: "Moby Dick", genere: "Avventura", anno: 1851, autore: "Herman Melville", immagine: "https://example.com/moby-dick.jpg", quantita: 2, numeroPagine: 635, isDisponibile: true },
        { id: 8, titolo: "Dracula", genere: "Horror", anno: 1897, autore: "Bram Stoker", immagine: "https://example.com/dracula.jpg", quantita: 8, numeroPagine: 418, isDisponibile: true },
        { id: 9, titolo: "Il Codice da Vinci", genere: "Thriller", anno: 2003, autore: "Dan Brown", immagine: "https://example.com/codice-vinci.jpg", quantita: 1, numeroPagine: 689, isDisponibile: true },
        { id: 10, titolo: "Cime Tempestose", genere: "Romantico", anno: 1847, autore: "Emily Brontë", immagine: "https://example.com/cime.jpg", quantita: 3, numeroPagine: 416, isDisponibile: true },
        { id: 11, titolo: "Sherlock Holmes: Uno studio in rosso", genere: "Giallo", anno: 1887, autore: "Arthur Conan Doyle", immagine: "https://example.com/sherlock.jpg", quantita: 0, numeroPagine: 188, isDisponibile: false },
        { id: 12, titolo: "Frankenstein", genere: "Horror", anno: 1818, autore: "Mary Shelley", immagine: "https://example.com/frankenstein.jpg", quantita: 7, numeroPagine: 280, isDisponibile: true },
        { id: 13, titolo: "Don Chisciotte", genere: "Classico", anno: 1605, autore: "Miguel de Cervantes", immagine: "https://example.com/donchisciotte.jpg", quantita: 0, numeroPagine: 1072, isDisponibile: false },
        { id: 14, titolo: "Guerra e Pace", genere: "Storico", anno: 1869, autore: "Lev Tolstoj", immagine: "https://example.com/guerra-pace.jpg", quantita: 4, numeroPagine: 1225, isDisponibile: true },
        { id: 15, titolo: "Il Piccolo Principe", genere: "Fiaba", anno: 1943, autore: "Antoine de Saint-Exupéry", immagine: "https://example.com/piccolo-principe.jpg", quantita: 0, numeroPagine: 96, isDisponibile: false },
        { id: 16, titolo: "La Metamorfosi", genere: "Letteratura", anno: 1915, autore: "Franz Kafka", immagine: "https://example.com/metamorfosi.jpg", quantita: 9, numeroPagine: 100, isDisponibile: true },
        { id: 17, titolo: "I Promessi Sposi", genere: "Storico", anno: 1827, autore: "Alessandro Manzoni", immagine: "https://example.com/promessi-sposi.jpg", quantita: 6, numeroPagine: 720, isDisponibile: true },
        { id: 18, titolo: "Il Processo", genere: "Letteratura", anno: 1925, autore: "Franz Kafka", immagine: "https://example.com/processo.jpg", quantita: 1, numeroPagine: 256, isDisponibile: true },
        { id: 19, titolo: "Il Conte di Montecristo", genere: "Avventura", anno: 1844, autore: "Alexandre Dumas", immagine: "https://example.com/montecristo.jpg", quantita: 3, numeroPagine: 1276, isDisponibile: true },
        { id: 20, titolo: "La Divina Commedia", genere: "Poema", anno: 1320, autore: "Dante Alighieri", immagine: "https://example.com/divina-commedia.jpg", quantita: 7, numeroPagine: 798, isDisponibile: true }
      ];
     

  return (

<> 
   
    <h2>Benvenuto nella Libreria Online 📖</h2>

        <div
        style={{
            display: "flex",
            flexWrap: "wrap", // Permette di adattarsi su più righe se necessario
            justifyContent: "center", // Centra orizzontalmente
            alignItems: "center", // Centra verticalmente
            gap: "10px", // Distanza tra le card
            minHeight: "auto", // Per centrare anche verticalmente
        }}
        >  
           {libri.map(libro => (
    
            <Libro 
            key={libro.id} 
            {...libro}
            // invece di tutto questa roba scritta sotto, 
            // am scris spread operator adico asta {...libro}
            // genere ={libro.genere} 
            // titolo={libro.titolo}
            // anno={libro.anno}
            // autore={libro.autore} 
            // immagine={libro.immagine}
            // quantita = {libro.quantita}
            // numeroPagine={libro.numeroPagine}
            // isDisponibile={libro.isDisponibile}
            />
          
           )) }
          
              </div>
     
        </>
  )
}
