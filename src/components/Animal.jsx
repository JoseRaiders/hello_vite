import { data } from "../utils/constants.js";

function Animal({ selectedAnimal }) {
  // this is the props
  let animal = data.find((item) => {
    return item.name == selectedAnimal;
  });

  // before rendering, check if it existing
  animal = animal?.image
    ? animal
    : data.find((item) => {
        return item.name == "default";
      });

  return (
    <img src={animal.image} alt={animal.name} height="300px" width="300px" />
  );
}

export default Animal;
