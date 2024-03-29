import { LocalParkingOutlined, MeetingRoomOutlined } from "@mui/icons-material";
import {
  InputBase,
  Rating,
  TextField,
  Typography,
  Box,
  Divider,
  Container,
  useMediaQuery,
  Paper,
  IconButton,
  Button,
} from "@mui/material";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useContext, useEffect, useState } from "react";
//import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
//import { ConnectButton, Icon, useNotification } from "web3uikit";
import { searchFilterContext } from "../../../Context";

import logo from "../../../images/airbnbRed.png";
import mobileLogo from "../../../images/mobileLogoRed.png";
import { useNavigate } from "react-router-dom";

// const stripePromise = loadStripe(
//   `${process.env.RENT_IN_EASE_STRIPE_PUBLIC_KEY}`
// );
const stripePromise = loadStripe(
  "pk_test_51KOpzCGpIuRQXwxCd8Hv6vKz4kn1iKOLtexLVlmvHSHqbHkHvZxaP0PeToDUddekzzrcPUISB8EDd5jedH1k4lFr00Le2qC2yK"
);

const DestinationDetails = () => {
  const handleSubmit = async (event, elements, stripe) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log(error);
    } else {
      const orderData = {
        payment: {
          gateway: "stripe",
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };
      // onCaptureCheckout(checkoutToken.id, orderData);
      // timeout();

      // nextStep();
    }
  };

  const rentalsList = {
    attributes: {
      unoDescription: "2 Guests • 2 Beds • 1 Rooms",
      dosDescription: "Wifi • Kitchen • Living Area",
    },
  };
  let isMobile = useMediaQuery("(max-width:850px)");
  const { checkIn, setCheckIn, checkOut, setCheckOut, guests, setGuests } =
    useContext(searchFilterContext);

  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#EB4E5F",
    },
  });

  const navigate = useNavigate();
  const { state: place } = useLocation();

  const [noOfDays, setNoOfDays] = useState();

  //****************************  code for no of days ***********************************
  useEffect(() => {
    var today = new Date(
      checkIn.split("-")[0],
      checkIn.split("-")[1] - 1,
      checkIn.split("-")[2]
    );

    var date2 = new Date(
      checkOut.split("-")[0],
      checkOut.split("-")[1] - 1,
      checkOut.split("-")[2]
    );

    var timeDiff = Math.abs(date2.getTime() - today.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1;

    setNoOfDays(diffDays);
  }, [checkIn, checkOut]);

  //***********************************   Styles *****************************************

  const styles = {
    logo: {
      width: "6vw",
      marginRight: "3rem",
      minWidth: "6rem",
      ...(isMobile && {
        minWidth: "0.5rem ",
      }),
    },
    line: {
      borderTop: "1px solid rgb(230, 229, 229)",
      mb: "0px",
    },
    image_div: {
      marginTop: 4,
    },
    card: {
      padding: "1.5rem",

      width: "30%",
      border: "1.5px solid rgb(242, 242, 242)",
      borderRadius: "15px",
      boxShadow: "rgba(0, 0, 0, 0.2) 0px 5px 20px",
      mb: 4,
    },
    card_top: {
      display: "flex",
      marginTop: "1.5rem",
      justifyContent: "space-between",
      alignItems: "center",
    },
    price_div: {
      fontSize: "1.25rem",
      fontWeight: "bold",
      color: "black",
      marginLeft: "10px",
    },
    card_rating: {
      alignItems: "center",
      display: "flex",
    },
    description: {
      mt: 2,
    },
    input: {
      fontSize: "0.75rem",
      fontWeight: "bold",
      color: "rgba(0, 0, 0, 0.842)",
      padding: "0.75rem",
      margin: 1,
      height: "2.75rem",
    },
  };

  return (
    <Box>
      <Container
        minWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: "1rem",
        }}
      >
        <Box>
          <Link to="/">
            <img
              style={styles.logo}
              src={isMobile ? mobileLogo : logo}
              alt="logo"
            ></img>
          </Link>
        </Box>
      </Container>

      <Divider />
      <Container
        sx={{ mt: 2 }}
        // style={{ margin: "0 15vw 0 15vw", marginTop: "2vh" }}
      >
        <Typography variant={isMobile ? "h5" : "h4"}>
          {place.autobroaden_label}
        </Typography>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "20px",
            marginTop: 2,
          }}
        >
          <StyledRating
            name="read-only"
            value={Number(place.rating)}
            readOnly
            precision={0.5}
            size="small"
          />
          <span
            style={{
              marginLeft: "0.5rem",
              fontSize: "15px",
            }}
          >
            {Number(place.rating)}
          </span>
          <span
            style={{ color: "gray", marginLeft: "0.2rem", fontSize: "17px" }}
          >
            ({place.num_reviews} reviews)
          </span>

          <Box
            style={{
              color: "gray",
              marginLeft: "0.75rem",
              fontSize: "17px",
            }}
          >
            {place.location_string.substr(0, 15)}
          </Box>
        </Box>

        <Box sx={styles.image_div}>
          <img
            style={{
              width: "50rem",
              maxHeight: "35rem",
              borderRadius: "15px",
              ...(isMobile && {
                width: "100%",
              }),
            }}
            src={
              place.photo
                ? place.photo.images.original.url
                : "https://imgs.search.brave.com/eoIZlg2L0ttNGXCr45Nq_l3TtsSqY7MQ3YlS5n6jIqs/rs:fit:789:883:1/g:ce/aHR0cHM6Ly9sZWlm/ZXJwcm9wZXJ0aWVz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/Tk8tSU1BR0UtQVZB/SUxBQkxFLmpwZw"
            }
            alt="place"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 4,
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: "60%",
              ...(isMobile && {
                width: "100%",
                mb: 4,
              }),
            }}
          >
            <Typography variant={isMobile ? "h6" : "h5"}>
              {place.name}
            </Typography>
            <Typography variant="body1" color="gray">
              {rentalsList.attributes.unoDescription}
            </Typography>
            <Typography variant="body1" color="gray">
              {rentalsList.attributes.dosDescription}
            </Typography>
            <Divider sx={{ mt: 3, mb: 3 }} />

            <Box display="flex" sx={{ mb: 2 }}>
              <MeetingRoomOutlined />
              <Typography variant="body1" color="initial" sx={{ ml: 2 }}>
                Self check-in
              </Typography>
            </Box>
            <Box display="flex" sx={{ mb: 2 }}>
              <LocalParkingOutlined />
              <Typography variant="body1" color="initial" sx={{ ml: 2 }}>
                Park for free
              </Typography>
            </Box>
            <Divider sx={{ mt: 3, mb: 3 }} />

            <Typography variant="body1" color="black">
              FREE NETFLIX . Private, Cozy, Clean, Comfortable Room <br />
              We offer Weakly and Monthly Discounts
              <br />
              Central A/C and Heat. Flat Screen TV w many free channels. Fast
              WiFi.
            </Typography>
          </Box>
          {isMobile ? (
            <Paper
              sx={{
                display: "flex",
                position: "fixed",
                justifyContent: "space-between",
                alignItems: "center",
                bottom: 0,
                width: "100%",
                p: 3,
                ml: -3,
              }}
            >
              <Box style={{ display: "flex" }}>
                {/* <Icon fill="#808080" size={16} svg="matic" /> &nbsp; */}
                {(
                  (place.rating ? Number(place.rating) / 50 : 0.07) * noOfDays
                ).toFixed(2)}
              </Box>
              {/* <LoadingButton
                loading={loading}
                onClick={() => {
                  if ("account")
                    bookRental(
                      place.name,
                      place.location_string,
                      checkIn,
                      checkOut,
                      place.photo.images.original.url
                    );
                  else handleAccount();
                }}
                variant="text"
                sx={{
                  color: "#fff",
                  bgcolor: "#d44957",
                  borderRadius: "0.2rem",
                  mr: 4,
                  ":hover": {
                    backgroundColor: "#b4414c",
                  },
                }}
              >
                Book Now
              </LoadingButton> */}
            </Paper>
          ) : (
            <Box sx={styles.card}>
              <Box sx={styles.card_top}>
                <Box display="flex">
                  {/* <Icon fill="#808080" size={20} svg="matic" /> */}
                  <Box sx={styles.price_div}>
                    {place.rating ? Number(place.rating) / 50 : 0.07} / Day
                  </Box>
                </Box>
                <Box sx={styles.card_rating}>
                  <StyledRating
                    name="read-only"
                    value={place.rating / 5}
                    precision={0.1}
                    readOnly
                    max={1}
                  />
                  <span
                    style={{
                      marginLeft: "5px",
                      fontSize: "1rem",
                    }}
                  >
                    {place.rating}
                  </span>
                  <span
                    style={{
                      color: "gray",
                      marginLeft: "5px",
                      fontSize: "0.8rem",
                    }}
                  >
                    ({place.num_reviews} reviews)
                  </span>
                </Box>
              </Box>
              <Divider sx={{ mt: 2 }} />
              <Box sx={styles.description}>
                <Box style={{ display: "flex", flexDirection: "column" }}>
                  <Box sx={styles.input}>
                    Check-in
                    <TextField
                      variant="standard"
                      type="date"
                      fullWidth
                      InputProps={{ disableUnderline: true }}
                      onChange={(e) => {
                        setCheckIn(e.target.value);
                      }}
                      value={checkIn}
                    />
                  </Box>
                  <Box sx={styles.input}>
                    Check Out
                    <TextField
                      variant="standard"
                      type="date"
                      fullWidth
                      InputProps={{ disableUnderline: true }}
                      onChange={(e) => {
                        setCheckOut(e.target.value);
                      }}
                      value={checkOut}
                    />
                  </Box>
                </Box>
                <Box sx={styles.input}>
                  Guests
                  <InputBase
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    type="number"
                    fullWidth
                    inputProps={{ min: 1 }}
                    sx={{ padding: "5px" }}
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "2.75rem",
                    marginTop: "1.75rem",
                  }}
                >
                  <Box style={{ display: "flex" }}>
                    {/* <Icon fill="#808080" size={16} svg="matic" /> &nbsp; */}
                    {place.rating ? Number(place.rating) / 50 : 0.07} x{" "}
                    {noOfDays}
                    &nbsp; Days
                  </Box>
                  <Box style={{ display: "flex" }}>
                    {/* <Icon fill="#808080" size={16} svg="matic" /> &nbsp; */}
                    {(
                      (place.rating ? Number(place.rating) / 50 : 0.07) *
                      noOfDays
                    ).toFixed(2)}
                  </Box>
                </Box>
                <Divider sx={{ mb: "1.75rem" }} />
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "1.75rem",
                  }}
                >
                  <Typography variant="h6" color="initial">
                    Total :
                  </Typography>
                  <Box style={{ display: "flex", alignItems: "center" }}>
                    {/* <Icon fill="#808080" size={16} svg="matic" /> &nbsp; */}
                    {(
                      (place.rating ? Number(place.rating) / 50 : 0.07) *
                      noOfDays
                    ).toFixed(2)}
                  </Box>
                </Box>
                <Typography
                  variant="h6"
                  gutterBottom
                  style={{ margin: "20px 0" }}
                >
                  Payment Method
                </Typography>
                <Elements stripe={stripePromise}>
                  <ElementsConsumer>
                    {({ elements, stripe }) => (
                      <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
                        <CardElement />
                        <br /> <br />
                      </form>
                    )}
                  </ElementsConsumer>
                </Elements>
                <Button
                  variant="text"
                  sx={{
                    color: "#fff",
                    bgcolor: "#d44957",
                    borderRadius: "0.2rem",
                    mr: 4,
                    ":hover": {
                      backgroundColor: "#b4414c",
                    },
                  }}
                >
                  Book Now
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default DestinationDetails;

// import React from "react";
// //import { Icon } from "web3uikit";
// //import { Link } from "react-router-dom";
// import { Rating, Button, Box, useMediaQuery } from "@mui/material";
// import styled from "styled-components";

// const DestinationDetails = ({ selected, place, refProp, isMobile }) => {
//   const isSmall = useMediaQuery("(max-width:420px)");
//   const rentalsList = {
//     attributes: {
//       unoDescription: "2 Guests • 2 Beds • 1 Rooms",
//       dosDescription: "Wifi • Kitchen • Living Area",
//     },
//   };

//   if (selected) {
//     refProp?.current?.scrollIntoView({ behavior: "smooth", block: "center" });
//   }

//   const StyledRating = styled(Rating)({
//     "& .MuiRating-iconFilled": {
//       color: "#EB4E5F",
//     },
//   });

//   const styles = {
//     rentalDivH: {
//       animation: "mymove 5s",
//       borderRadius: "20px",
//       "@keyframes mymove": {
//         from: {
//           backgroundColor: "#dddddd",
//         },

//         to: {
//           backgroundColor: "#dddddd00",
//         },
//       },
//     },

//     rentalDiv: {
//       display: "flex",
//       justifyContent: "space-around",
//       alignItems: "center",
//       ...(isMobile && {
//         flexDirection: "column",
//       }),
//     },
//     rentalImg: {
//       height: "200px",
//       minWidth: "300px",
//       borderRadius: "20px",
//       marginRight: "20px",
//       ...(isMobile && {
//         width: "100%",
//         m: 0,
//         height: "300px",
//       }),
//       ...(isSmall && {
//         height: "200px",
//       }),
//     },
//     rentalInfo: {
//       padding: "10px",
//       width: "100%",
//     },
//     rentalTitle: {
//       fontSize: "23px",
//       marginBottom: "15px",
//       ...(isMobile && {
//         fontSize: "18px",
//         mb: 1,
//       }),
//     },
//     rentalDesc: {
//       color: "gray",
//       marginTop: "5px",
//       ...(isMobile && {
//         fontSize: "14px",
//       }),
//     },
//     bottomButton: {
//       marginTop: "20px",
//       justifyContent: "space-between",
//       display: "flex",
//       width: "100%",
//       alignItems: "center",
//       ...(isMobile && {
//         fontSize: "18px",
//         mt: 1,
//       }),
//     },
//     price: {
//       display: "flex",
//       justifyContent: "end",
//       gap: "5px",
//       color: "#808080",
//       fontSize: "12px",
//     },
//   };

//   return (
//     <Box sx={selected && styles.rentalDivH}>
//       <Box sx={styles.rentalDiv}>
//         <img
//           style={styles.rentalImg}
//           src={
//             place.photo
//               ? place.photo.images.large.url
//               : "https://imgs.search.brave.com/eoIZlg2L0ttNGXCr45Nq_l3TtsSqY7MQ3YlS5n6jIqs/rs:fit:789:883:1/g:ce/aHR0cHM6Ly9sZWlm/ZXJwcm9wZXJ0aWVz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/Tk8tSU1BR0UtQVZB/SUxBQkxFLmpwZw"
//           }
//           alt="place"
//         />
//         <Box sx={styles.rentalInfo}>
//           <Box sx={styles.rentalTitle}>{place.name}</Box>
//           <Box sx={styles.rentalDesc}>
//             {rentalsList.attributes.unoDescription}
//           </Box>
//           <Box sx={styles.rentalDesc}>
//             {rentalsList.attributes.dosDescription}
//           </Box>
//           <Box
//             style={{
//               marginTop: "1.5rem",
//               display: "flex",
//               alignItems: "center",
//               ...(isMobile && {
//                 justifyContent: "space-between",
//               }),
//             }}
//           >
//             <StyledRating
//               name="read-only"
//               size="small"
//               value={Number(place.rating)}
//               readOnly
//               precision={0.5}
//             />
//             <Box>
//               <span
//                 style={{
//                   marginLeft: "5px",
//                   fontWeight: "bold",
//                   ...(isMobile && {
//                     fontSize: "14px",
//                   }),
//                 }}
//               >
//                 {Number(place.rating)}
//               </span>
//               <span
//                 style={{
//                   color: "gray",
//                   marginLeft: "5px",
//                   ...(isMobile && {
//                     fontSize: "14px",
//                   }),
//                 }}
//               >
//                 ({place.num_reviews} reviews)
//               </span>
//             </Box>
//           </Box>
//           <Box sx={styles.bottomButton}>
//             {/* <Link
//               to={"/details"}
//               style={{ textDecoration: "none" }}
//               state={place}
//             > */}
//             <Button
//               size="small"
//               variant="outlined"
//               sx={{
//                 color: "#d44957",
//                 borderColor: "#d44957",
//                 ":hover": {
//                   borderColor: "#d44957",
//                 },
//               }}
//             >
//               Details
//             </Button>
//             {/* </Link> */}
//             <Box sx={styles.price}>
//               {/* <Icon fill="#808080" size={10} svg="matic" /> */}
//               {place.rating ? Number(place.rating) / 50 : 0.07} / Day
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default DestinationDetails;
