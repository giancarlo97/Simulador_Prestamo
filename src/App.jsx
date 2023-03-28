import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import Resultado from './components/Resultado';
import Mensaje from './components/Mensaje';

function App() {
  const [cantidad, setCantidad] = useState(0);
  const [plazo, setPlazo] = useState("");
  const [total, setTotal] = useState(0);

let componente;
  if(total === 0) {
    componente= <Mensaje />
  } else {
    componente = <Resultado total={total} cantidad={cantidad} plazo={plazo} />
  }

  return (
    <>
      <Header titulo="Cotizador de prestamos"/>
      <div className='contanider'>
        <Form 
        cantidad={cantidad} 
        setCantidad={setCantidad}
        plazo={plazo}
        setPlazo={setPlazo}
        setTotal={setTotal}/>
      </div>
      <div className='mensaje'>
        {componente}
      </div>
    </>
  )
}

export default App
