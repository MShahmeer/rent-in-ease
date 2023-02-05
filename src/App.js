import logo from "./logo.svg";
import "./App.css";
import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ImageGallery from "./Components/SinglePostComponents/ImageGallery/ImageGallery";
import SinglePropertyType from "./Components/BecomeHostComponents/PropertyType/SinglePropertyType";
import Amenities from "./Components/SinglePostComponents/Amenities/Amenities";
import PropertyType from "./Components/BecomeHostComponents/PropertyType/PropertyType";
//import SinglePost from "./Pages/SinglePost/SinglePost.jsx";
import LeftSideBar from "./Components/AdminPageComponents/LeftSideBar";
import UserList from "./Components/AdminPageComponents/UserList";
import Dashboard from "./Components/Dashboard/Dashboard";
import { getData } from "./api";
import Home from "./Pages/HomePage/Home";
import ArchivePage from "./Pages/ArchivePage/ArchivePage";
import { searchFilterContext } from "./Context";
import DestinationDetails from "./Components/ArchivePageComponents/DestinationDetails/DestinationDetails";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Singup";
import AddProperty from "./Components/BecomeHostComponents/PropertyType/AddProperty";
import ViewProperties from "./Components/BecomeHostComponents/ViewProperties/ViewProperties";

function App() {
  const [bound, setBound] = useState({});
  const [places, setPlaces] = useState([]);

  const [coordinates, setCoordinates] = useState({});
  const [autocomplete, setAutocomplete] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [childClicked, setChildClicked] = useState(null);

  const { destination, setDestination } = useContext(searchFilterContext);

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    setDestination(autocomplete.getPlace().formatted_address);
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();
    setCoordinates({ lat, lng });
  };
  useEffect(() => {
    setIsLoading(true);
    getData(bound, "hotels").then((data) => {
      setPlaces(data?.filter((place) => place.name));
      setIsLoading(false);
    });
    //console.log(places);
  }, [bound]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/add" element={<AddProperty />} />
        <Route
          path="/"
          element={
            <Home
              onLoad={onLoad}
              onPlaceChanged={onPlaceChanged}
              destination={destination}
            />
          }
        />
        <Route
          path="/places"
          element={
            <ArchivePage
              isLoading={isLoading}
              autocomplete={autocomplete}
              bound={bound}
              setAutocomplete={setAutocomplete}
              onPlaceChanged={onPlaceChanged}
              places={places}
              coordinates={coordinates}
              setCoordinates={setCoordinates}
              setBound={setBound}
              childClicked={childClicked}
              setChildClicked={setChildClicked}
            />
          }
        />
        <Route path="/details" element={<DestinationDetails />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/view-properties" element={<ViewProperties />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
