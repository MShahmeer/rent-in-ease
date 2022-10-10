import logo from "./logo.svg";
import "./App.css";
import ImageGallery from "./Components/SinglePostComponents/ImageGallery/ImageGallery";
import SinglePropertyType from "./Components/BecomeHostComponents/PropertyType/SinglePropertyType";

function App() {
  return (
    <>
      <SinglePropertyType />
      <ImageGallery />;
    </>
  );
}

export default App;
