import logo from "./logo.svg";
import "./App.css";
import ImageGallery from "./Components/SinglePostComponents/ImageGallery/ImageGallery";
import SinglePropertyType from "./Components/BecomeHostComponents/PropertyType/SinglePropertyType";
import Amenities from "./Components/SinglePostComponents/Amenities/Amenities";
import PropertyType from "./Components/BecomeHostComponents/PropertyType/PropertyType";
function App() {
  return (
    <>
      {/* <SinglePropertyType />
      <ImageGallery />;
      <Amenities /> */}

      <PropertyType className="propertyType" />
    </>
  );
}

export default App;
