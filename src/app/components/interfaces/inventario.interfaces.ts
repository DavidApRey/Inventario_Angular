export interface articulo {
  id_articulo: number,
  descripcion: string,
  precio: number,
  stock: number,
  id_tipo: number
}

export interface tipo_articulo{
  id_tipo: number,
  tipo_articulo: string,
}

export interface crear_arti {
  descripcion: string,
  precio: number,
  stock: number
}
