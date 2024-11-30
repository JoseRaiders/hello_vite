import Header from "./Header";
import Main from "./Main";
import "./App.css";
import Animal from "./Animal";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Animal selectedAnimal="dog" />
    </>
  );
}

export default App;
