import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Storia from './pages/Storia';
import Home from './pages/Home';

function App() {

 
  return (
    <>
      <div>
        <Navbar/>
        <Routes>
        <Route path = '/storia' element={<Storia/>}/>  
        <Route path = '/' element={<Home />}/> 
        </Routes>
  
      </div>
    </>
  );
}

export default App;



// function handleClick() {
  //   alert ('merge?');
  // }

      
                        {/* versione 1 */}
              {/* <button onClick= {()=> alert('daca ma vezi e ok')}>like 👍 </button> */} 

                          {/* versione 2 */}
               {/* <Button laClikBum= {handleClick} msg={alert}/> */}
              {/* <p onClick={handleClick}>primo bottone!</p>  */}

                    {/* versione 3 */}
              {/* <Button des='Cliccami!' msg = 'funziona?'/>
              <br />
              <Button des='Push!' msg = '👍'/> */}

                  // metodo per filtrare un array in base a una condizione! la posso usare per 
              // {libri.filter (libro => libro.genere === 'Storico')
              //   .map(libro => (
     
              //    <Card key={libro.id} isDisponibile={libro.isDisponibile}>
              //    <Libro 
              //    genere ={libro.genere} 
              //    titolo={libro.titolo}
              //    anno={libro.anno}
              //    autore={libro.autore} 
              //    immagine={libro.immagine}
              //    quantita = {libro.quantita}
              //    numeroPagine={libro.numeroPagine}
              //    isDisponibile={libro.isDisponibile}
               
              //    />
              //       <Button des='Push!' msg = '👍'/> 
              //    </Card>   
     
              //   )) }