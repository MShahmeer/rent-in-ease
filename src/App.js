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
import { getData } from "./api/index";
import Home from "./Pages/HomePage/Home";
import ArchivePage from "./Pages/ArchivePage/ArchivePage";
import { searchFilterContext } from "./Context";
import DestinationDetails from "./Components/ArchivePageComponents/DestinationDetails/DestinationDetails";

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
    console.log(places);
  }, [bound]);

  return (
    <BrowserRouter>
      <Routes>
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
      </Routes>
      {/* <SinglePropertyType />
      <ImageGallery />;
      <Amenities /> */}

      {/* <PropertyType className="propertyType" /> */}

      {/* <SinglePost /> */}
      {/* <LeftSideBar /> */}

      {/* <UserList type="Hosts" /> */}
      {/* <Dashboard /> */}
      {/* <Home /> */}
      {/* <ArchivePage /> */}
    </BrowserRouter>
  );
}

export default App;
