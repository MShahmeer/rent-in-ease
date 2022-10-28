import Header from "../../Components/HomePageComponents/Header/Header";
import Footer from "../../Components/HomePageComponents/Footer/Footer";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
// import Map from "./Map";

import FooterMenu from "../../Components/HomePageComponents/Footer/FooterMenu";
import { displayOnDesktop } from "../../Theme/CommonStyles";

// import ResultLocationCards from "../../Components/HomePageComponents/ResultLocationCards/ResultLocationCards";

import LocationCards from "../../Components/HomePageComponents/HomePageCards/LocationCards";
import React from "react";

import MobileFooter from "../../Components/HomePageComponents/Footer/MobileFooter";

const Home = () => {
  return (
    <React.Fragment>
      <Header />

      <CssBaseline />
      <section>
        <div className="w-screen h-screen grid grid-rows-2 text-white text-4xl md:grid-cols-2">
          <div>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "70vh",
              }}
            >
              <div
                sx={{
                  width: "50vh",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                    height: 420,
                    width: "50%",
                    overflowY: "scroll",
                  }}
                >
                  <Container maxWidth="xl" sx={{ mb: 6 }}>
                    <LocationCards />
                    <Box
                      sx={{
                        display: { xs: "flex", md: "none" },
                      }}
                    >
                      <MobileFooter />
                    </Box>
                  </Container>
                </Box>
              </div>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <FooterMenu />
              </Box>
              <Box sx={displayOnDesktop}>{/* <Footer /> */}</Box>
            </Box>
          </div>
          {/* <div>
            <p>
              <Map />
            </p>
          </div> */}
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
