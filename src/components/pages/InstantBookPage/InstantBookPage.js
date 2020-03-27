import React from "react";
import moment from "moment";

import { Button } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./InstantBookPage.css";
import "../RequestRidePage/RequestRidePage.css";

import Navbar from "../../navbar/Navbar";
import { withRouter } from "react-router-dom";
import {
  faLongArrowAltRight,
  faMapMarkerAlt,
  faCalendarAlt,
  faClock,
  faGraduationCap
} from "@fortawesome/free-solid-svg-icons";

const InstantBookPage = ({ location, history }) => {
  const handlePayment = () => {
    history.push({
      pathname: "/rider/instant-book/confirm",
      state: {
        from: location.state.from,
        to: location.state.to,
        date: location.state.date,
        time: location.state.time,
        price: location.state.price,
        specificDropoff: location.state.specificDropoff,
        specificPickup: location.state.specificPickup,
        driverNote: location.state.driverNote,
        ownerUsername: location.state.ownerUsername
      }
    });
  };

  return (
    <div className="request-ride">
      <Navbar />
      <div className="request-ride-content">
        <div className="request-ride-left-div">
          <div className="request-ride-content">
            <div className="request-ride-title">Instant Book Summary</div>
            <div className="request-ride-path1">Summary</div>
            <div className="request-ride-path2">></div>
            <div className="request-ride-path2">Payment</div>
            <div className="request-ride-path2">></div>
            <div className="request-ride-path2">Confirmation</div>
          </div>
        </div>
      </div>
      <div className="instant-book-info-card">
        <div className="instant-book-one-third">
          <div className="instant-book-location">
            {location.state.from}
            <FontAwesomeIcon
              icon={faLongArrowAltRight}
              style={{ width: "40px", height: "40px" }}
            />
            {location.state.to}
          </div>
          <div className="instant-book-date">
            <div>
              <FontAwesomeIcon
                icon={faCalendarAlt}
                style={{ marginLeft: "0px", marginRight: "10px" }}
              />
              {moment(location.state.date)
                .utc()
                .format("M/DD/YY")}{" "}
            </div>
            <div>
              <FontAwesomeIcon
                icon={faClock}
                style={{ marginLeft: "70px", marginRight: "10px" }}
              />
              {moment(location.state.date)
                .utc()
                .format("h A")}{" "}
            </div>
          </div>
          <div className="instant-book-pickup">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              style={{ marginLeft: "0px", marginRight: "10px" }}
            />
            {/* Pickup: {location.state.specificPickup} */}
            <span style={{ fontWeight: "bold", marginRight: "16px" }}>
              Pickup:
            </span>
            Westwood In N Out
          </div>
          <div className="instant-book-dropoff">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              style={{ marginLeft: "0px", marginRight: "10px" }}
            />
            {/* Dropoff: {location.state.specificDropoff} */}
            <span style={{ fontWeight: "bold", marginRight: "10px" }}>
              Dropoff:
            </span>{" "}
            Bay Area near Cupertino
          </div>
          <div className="instant-book-carryon">
            <span style={{ fontWeight: "bold", marginRight: "20px" }}>
              Carry-on:
            </span>{" "}
            1
          </div>
        </div>
        <div className="instant-book-one-third">
          <div className="instant-book-driver-title">Driver:</div>
          <div className="instant-book-driver-info">
            <div className="instant-book-driver-image">
              <img
                src={process.env.PUBLIC_URL + "/images/bp_logo.svg"}
                alt="bear"
                style={{ width: "65px", height: "65px" }}
              />
            </div>
            <div className="instant-book-driver-personal">
              <div className="instant-book-driver-name">
                {location.state.ownerUsername}
              </div>
              <div className="instant-book-driver-school">
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  style={{ marginRight: "5px" }}
                />
                UCLA
              </div>
            </div>
          </div>
          <div className="instant-book-driver-note">Driver's Note:</div>
          <div className="instant-book-driver-text">
            {location.state.driverNote}
          </div>
        </div>
        <div className="instant-book-one-third">
          <div className="instant-book-cancel-title">
            Cancellation Policy (Strict):
          </div>
          <div className="instant-book-cancel-text">
            Free cancellation for 48 hours after booking.
            <br />
            After that, cancel before 10:00PM on Apr 30 and
            <br />
            get a 50% refund, minus the service fee.
            <br />
            Cutoff times are based on the listing's local time.
          </div>
          <div className="instant-book-price-title">Trip Total:</div>
          <div className="instant-book-price-value">
            ${location.state.price}
          </div>
        </div>
      </div>
      <div className="instant-book-summary-buttons">
        <Button
          style={{
            backgroundColor: "white",
            border: "1px solid #3d77ff",
            color: "#3d77ff",
            boxShadow: "none",
            marginRight: "80px",
            width: "200px",
            height: "50px",
            borderRadius: "10px"
          }}
          onClick={() => history.push("/rider")}
        >
          Back to Ride Search
        </Button>
        <Button
          style={{
            backgroundColor: "#3d77ff",
            borderWidth: "0px",
            color: "white",
            boxShadow: "none",
            width: "200px",
            height: "50px",
            borderRadius: "10px"
          }}
          onClick={handlePayment}
        >
          Proceed to Payment
        </Button>
      </div>
    </div>
  );
};

export default withRouter(InstantBookPage);