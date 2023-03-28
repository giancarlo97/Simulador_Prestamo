import React from 'react'

const Resultado = ({total, cantidad, plazo}) => {
  return (
    <>
    <div className='resultado'>
        <h2>Cotizacion</h2>
        <p>Cantidad solicitada es: $ {cantidad}</p>
        <p> Pagar en: {plazo} Meses</p>
        <p>Su pago mensual es de: $ {(total / plazo).toFixed(2) }</p>
        <p>Total a pagar: $ {total}</p>
    </div>
    </>
  )
}

export default Resultado