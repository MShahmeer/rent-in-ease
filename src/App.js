import logo from "./logo.svg";
import "./App.css";
import ImageGallery from "./Components/SinglePostComponents/ImageGallery/ImageGallery";
import SinglePropertyType from "./Components/BecomeHostComponents/PropertyType/SinglePropertyType";
import Amenities from "./Components/SinglePostComponents/Amenities/Amenities";
function App() {
  return (
    <>
      <SinglePropertyType />
      <ImageGallery />;
      <Amenities />
    </>
  );
}

export default App;
