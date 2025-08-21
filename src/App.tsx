import { useEffect } from "react";
import "./App.css";
import Homepage from "./pages/homepage";
import { Routes, Route } from "react-router-dom";
import {
  HOME,
  INDEX,
  WILD_CARD,
} from "./routes/paths.routes";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import ReactGA from "react-ga";
//import "react-multi-carousel/lib/styles.css";
import NotFound from "./components/not-found/NotFound";
//import { clarity } from "react-microsoft-clarity";
//import { ENV, PROD_ENV, constants } from "./constants/constant";

// TODO: Update TRACKING_ID to actual ID
// Start Google Analytics Code
// const TRACKING_ID = "UA-XXXXX-X"; // OUR_TRACKING_ID
// ReactGA.initialize(TRACKING_ID);
// // End Google Analytics Code

// const MICROSOFT_CLARITY_ID = constants().MICROSOFT_CLARITY_ID;

function App() {
  useEffect(() => {
    AOS.init({
      delay: 100,
    });
    AOS.refresh();
  }, []);

  // initialize Microsoft Clarity for analytics in prod
//  if (ENV === PROD_ENV) clarity.init(MICROSOFT_CLARITY_ID);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

     
      <Routes>
        <Route element={<Homepage />} path={HOME} />
        <Route element={<Homepage />} path={INDEX} />

        <Route
          path={WILD_CARD}
          element={<NotFound error="Sorry, but that page cannot be found!" />}
        />
      </Routes></>
  );
}

export default App;
