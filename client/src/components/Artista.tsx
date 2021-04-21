import React from 'react'
import { ArtistaProps } from '../interface/interfaces'

function Artista({ info }: ArtistaProps) {
  return (
    <div className="card border-light">
      <div className="card-header bg-primary text-light fontweight-bold">
        Información Artista
      </div>
      <div className="card-body">
        <img src={info.strArtistThumb} alt="Logo Artista" />
        <p className="card-text">Género: {info.strGenre}</p>
        <h2>Biografía:</h2>
        <p className="card-text">Género: {info.strBiographyES}</p>
        <a href={`https://${info.strFacebook}`} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href={`https://${info.strTwitter}`} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href={`${info.strLastFMChart}`} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-lastfm"></i>
        </a>
      </div>
    </div>
  )
}

export default Artista
