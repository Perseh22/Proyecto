import Card from "./Card";

export default function Cards({ characters, onClose }) {
  return (
    <div>
      {characters.map(
        ({ name, status, species, gender, origin, image, id }) => {
          return (
            <Card
              key={id}
              id={id}
              name={name}
              status={status}
              species={species}
              gender={gender}
              origin={origin.name}
              image={image}
              onClose={onClose}
            />
          );
        }
      )}
    </div>
  );
}
