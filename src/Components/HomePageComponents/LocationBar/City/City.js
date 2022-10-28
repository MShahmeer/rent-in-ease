import React from "react";
import LocationDetail from "../LocationDetail/LocationDetail";
import "./City.css";
function City() {
  return (
    <div className="locations">
      <div>
        <LocationDetail
          name="Lahore"
          more={["Popular Localities", "Eme Phase 8", "Canal Garden"]}
        />
      </div>

      <div>
        <LocationDetail
          name="Karachi"
          more={["Popular Localities", "Liyari", "DHA-North nazimabad"]}
        />
      </div>
      <div>
        <LocationDetail
          name="Quetta"
          more={["Popular Localities", "City Center Metro", "Mg Road"]}
        />
      </div>
      <div>
        <LocationDetail
          name="Islamabad"
          more={["Popular Localities", "H-12", "Blue Area", "G-11 Sector"]}
        />
      </div>

      <div>
        <LocationDetail
          name="Peshawar"
          more={["Popular Localities", "Bahria Town", "Al kabir town"]}
        />
      </div>
      <div>
        <p>Filtters</p>
      </div>
    </div>
  );
}

export default City;
