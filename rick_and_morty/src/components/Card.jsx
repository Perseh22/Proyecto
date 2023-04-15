import { Link } from "react-router-dom";
export default function Card({
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  key,
  id,
}) {
  return (
    <div>
      <button onClick={() => onClose(id)}>X</button>

      <h2>{(key = id)}</h2>
      <Link to ={`/detail/${id}`}>
        <h2>nombre :{name}</h2>
      </Link>
      <h2> estatus :{status}</h2>
      <h2>especies:{species}</h2>
      <h2>genero:{gender}</h2>
      <h2>origen : {origin.name}</h2>
      <img src={image} alt="" />
    </div>
  );
}
