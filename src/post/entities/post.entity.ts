export interface PostInterface {
  active: boolean;
  category: string;
  title: string;
  secciones: SeccionesInterface[];
  createdAt?: string;
  image?: string;
}

export interface SeccionesInterface {
  titulo: string;
  contenido: string;
}
