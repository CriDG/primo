import React, { useState } from 'react'

export default function Registrati() {
  const [utente, setUtente] = useState('');
  const [pass, setPass] = useState('');
  const [isRegistrato, setIsRegistrato] = useState(false);

  
  function handleUtente (e) {
    setUtente (e.target.value);
  }

  function handlePass (e) {
    setPass (e.target.value);
  }

  function handleRegistrazione () {
    alert (`Benvenuto ${utente}`);
    setIsRegistrato (true);
  }



    return (
  <>
  
  <label>Utente: </label>
  <input type="text" value={utente} onChange={handleUtente} />
  <br />
  <label>Password: </label>
  <input type= 'password' value={pass} onChange={handlePass} />

        <br />
        <button onClick={handleRegistrazione}>
            {isRegistrato ? 
             'Sei registrato!' 
             : 
             'Registrati!'}
        </button>
  </>
  )
}
