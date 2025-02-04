import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import LandingPage from "./components/pages/LandingPage/LandingPage";
import HowItWorksPage from "./components/pages/LandingPage/HowItWorksPage/HowItWorksPage";
import AboutUsPage from "./components/pages/LandingPage/AboutUsPage/AboutUsPage";
import AboutUsDetailPage from "./components/pages/LandingPage/AboutUsDetailPage/AboutUsDetailPage";
import HelpCenterPage from "./components/pages/LandingPage/HelpCenterPage/HelpCenterPage";
import TermsOfService from "./components/pages/LandingPage/TermsOfService/TermsOfService";
import SignupPage1 from "./components/pages/SignupPage/SignupPage1";
import SignupPage2 from "./components/pages/SignupPage/SignupPage2";
import VerificationExpiredPage from "./components/pages/SignupPage/VerificationExpiredPage";
import SignupPage3 from "./components/pages/SignupPage/SignupPage3";
import SignupPage4 from "./components/pages/SignupPage/SignupPage4";
import SignupPage5 from "./components/pages/SignupPage/SignupPage5";
import SignupPage6 from "./components/pages/SignupPage/SignupPage6";
import RiderPage from "./components/pages/RiderPage/RiderPage";
import MyRidesPage from "./components/pages/MyRidesPage/MyRidesPage";
import DriverRegister1 from "./components/modules/DriverRegister/DriverRegister1";
import DriverRegister2 from "./components/modules/DriverRegister/DriverRegister2";
import DriverPost from "./components/modules/DriverPost/DriverPost";
import MyDrivesPage from "./components/pages/MyDrivesPage/MyDrivesPage";
import HelpPage from "./components/pages/HelpPage/HelpPage";
import ProfilePage from "./components/pages/ProfilePage/ProfilePage";
import AccountSettingsPage from "./components/pages/AccountSettingsPage/AccountSettingsPage";
import RideCheckoutPage from "./components/pages/RideCheckoutPage/RideCheckoutPage";
import PostRideSummary from "./components/pages/DriverPage/PostRideSummary";
import RequestRidePage from "./components/pages/RequestRidePage/RequestRidePage";
import RequestRideSummary from "./components/pages/RequestRidePage/RequestRideSummary";
import InstantBookPage from "./components/pages/InstantBookPage/InstantBookPage";
import InstantBookConfirmPage from "./components/pages/InstantBookConfirmPage/InstantBookConfirmPage";
import CloseAccountPage from "./components/pages/CloseAccountPage/CloseAccountPage";
import MainState from "./context/MainState";

import "./App.css";

const App = () => {
  return (
    <MainState>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/how-it-works" component={HowItWorksPage} />
          <Route exact path="/about-us" component={AboutUsPage} />
          <Route exact path="/about-us/detail" component={AboutUsDetailPage} />
          <Route exact path="/help-center" component={HelpCenterPage} />
          <Route exact path="/policy" component={TermsOfService} />
          <Route exact path="/signup/1" component={SignupPage1} />
          <Route exact path="/signup/2" component={SignupPage2} />
          <Route path="/signup/2/expired" component={VerificationExpiredPage} />
          <Route path="/signup/3" component={SignupPage3} />
          <Route exact path="/signup/4" component={SignupPage4} />
          <Route exact path="/signup/5" component={SignupPage5} />
          <Route exact path="/signup/6" component={SignupPage6} />
          <Route exact path="/close-account" component={CloseAccountPage} />
          <Route exact path="/rider" component={RiderPage} />
          <Route exact path="/rider/my-rides" component={MyRidesPage} />
          <Route exact path="/rider/help" component={HelpPage} />
          <Route exact path="/rider/profile" component={ProfilePage} />
          <Route exact path="/rider/settings" component={AccountSettingsPage} />
          <Route exact path="/driver/signup/1" component={DriverRegister1} />
          <Route exact path="/driver/signup/2" component={DriverRegister2} />
          <Route exact path="/driver/post" component={DriverPost} />
          <Route exact path="/driver/my-drives" component={MyDrivesPage} />
          <Route exact path="/driver/help" component={HelpPage} />
          <Route exact path="/driver/profile" component={ProfilePage} />
          <Route
            exact
            path="/driver/settings"
            component={AccountSettingsPage}
          />
          <Route exact path="/ride/checkout" component={RideCheckoutPage} />
          <Route exact path="/rider/request-ride" component={RequestRidePage} />
          <Route exact path="/rider/instant-book" component={InstantBookPage} />
          <Route
            exact
            path="/rider/instant-book/confirm"
            component={InstantBookConfirmPage}
          />
          <Route
            exact
            path="/rider/request-ride-summary"
            component={RequestRideSummary}
          />
          <Route
            exact
            path="/driver/post-summary"
            component={PostRideSummary}
          />

          <Redirect to="/" />
        </Switch>
      </Router>
    </MainState>
  );
};

export default App;
