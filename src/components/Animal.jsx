import { data } from "../utils/constants.js";

function Animal({ selectedAnimal }) {
  // this is the props
  const animal = data.find((item) => {
    return item.name == selectedAnimal;
  });

  return (
    <img src={animal.image} alt={animal.name} height="300px" width="300px" />
  );
}

export default Animal;
