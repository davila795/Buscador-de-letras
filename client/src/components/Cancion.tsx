import React from 'react'
import { CancionProps } from '../../interface/interfaces';

function Cancion({ letra }: CancionProps) {
  return (
    <>
      <h2>Letra Canción</h2>
      <p className="letra">{letra}</p>
    </>
  )
}

export default Cancion
