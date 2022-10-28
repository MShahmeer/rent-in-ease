import logo from "./logo.svg";
import "./App.css";
import ImageGallery from "./Components/SinglePostComponents/ImageGallery/ImageGallery";
import SinglePropertyType from "./Components/BecomeHostComponents/PropertyType/SinglePropertyType";
import Amenities from "./Components/SinglePostComponents/Amenities/Amenities";
import PropertyType from "./Components/BecomeHostComponents/PropertyType/PropertyType";
//import SinglePost from "./Pages/SinglePost/SinglePost.jsx";
import LeftSideBar from "./Components/AdminPageComponents/LeftSideBar";
import UserList from "./Components/AdminPageComponents/UserList";
import Dashboard from "./Components/Dashboard/Dashboard";
import Home from "./Pages/HomePage/Home";

function App() {
  return (
    <>
      {/* <SinglePropertyType />
      <ImageGallery />;
      <Amenities /> */}

      {/* <PropertyType className="propertyType" /> */}

      {/* <SinglePost /> */}
      {/* <LeftSideBar /> */}

      {/* <UserList type="Hosts" /> */}
      {/* <Dashboard /> */}
      <Home />
    </>
  );
}

export default App;
