import React, { useEffect } from 'react';
import Form from './components/Form';
import { Busqueda, Letra, ArtistaInfo } from '../interface/interfaces'
import axios, { AxiosResponse } from 'axios';
import Cancion from './components/Cancion';
import Artista from './components/Artista';


function App() {
  const [busquedaletra, busquedaletraSet] = React.useState<Busqueda | null>(null);
  const [letra, letraSet] = React.useState<string | null>(null);
  const [info, infoSet] = React.useState<ArtistaInfo | null>(null);

  useEffect(() => {
    if (!busquedaletra) {
      return;
    }

    const fetchApi = async () => {
      const { artista, cancion } = busquedaletra;
      const urlLetra = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const urlArtista = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`
      const [apiLetra, apiInfo]: [AxiosResponse<Letra>, AxiosResponse<{ artists: ArtistaInfo[] }>] = await Promise.all([
        axios.get(urlLetra),
        axios.get(urlArtista)
      ])

      letraSet(apiLetra.data.lyrics);
      infoSet(apiInfo.data.artists[0]);
    }
    fetchApi();

  }, [busquedaletra])


  return (
    <>
      <Form
        busquedaletraSet={busquedaletraSet}
      />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            {info && <Artista info={info} />}
          </div>
          <div className="col-md-6">
            {letra && <Cancion letra={letra} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
