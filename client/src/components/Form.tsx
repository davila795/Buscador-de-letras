import React from 'react';
import { Busqueda, FormProps } from '../../interface/interfaces';

function Form({ busquedaletraSet }: FormProps) {

  const [busqueda, setBusqueda] = React.useState<Busqueda>({
    artista: "",
    cancion: ""
  });

  const [error, setError] = React.useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { artista, cancion } = busqueda;

    if (artista.trim() === "" || cancion.trim() === "") {
      setError(true);
      return;
    }

    busquedaletraSet(busqueda);
  }

  return (
    <div className="bg-info">
      <div className="container">
        <div className="row">
          <form
            className="col card text-white bg-transparent mb-5 pt-5 pb-2"
            onSubmit={handleSubmit}
          >
            <fieldset>
              <legend className="text-center">Buscador Letras Canciones</legend>
              {error ? <p className="alert alert-danger text-center p-2">Todos los campos son obligatorios</p> : null}

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Artista</label>
                    <input
                      value={busqueda.artista}
                      className="form-control"
                      type="text"
                      name="artista"
                      placeholder="Nombre Artista"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label>Canción</label>
                    <input
                      value={busqueda.cancion}
                      className="form-control"
                      type="text"
                      name="cancion"
                      placeholder="Nombre Canción"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary float-right"
              >Buscar</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form
