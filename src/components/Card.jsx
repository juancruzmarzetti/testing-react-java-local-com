
export default function Card({odontologo}){

  const {id, matricula, nombre, apellido} = odontologo;

  return (
    <div>
      <div>ID: {id}</div>
      <div>Matricula: {matricula}</div>
      <div>Nombre: {nombre}</div>
      <div>Apellido: {apellido}</div>
    </div>
  )
}
