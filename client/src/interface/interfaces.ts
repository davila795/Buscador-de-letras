import { Dispatch, SetStateAction } from 'react';

export interface Busqueda {
  artista: string;
  cancion: string;
}

export interface FormProps {
  busquedaletraSet: Dispatch<SetStateAction<Busqueda | null>>;
}

export interface Letra {
  lyrics: string;
}

export interface ArtistaInfo {
  strArtistThumb: string;
  strBiographyES: string;
  strGenre: string;
  strFacebook: string;
  strLastFMChart: string;
  strTwitter: string;
}

export interface CancionProps {
  letra: string;
}

export interface ArtistaProps {
  info: ArtistaInfo;
}
