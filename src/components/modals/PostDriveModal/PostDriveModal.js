import React, { Component, useState, useEffect } from "react";
import { Button, Input, UncontrolledPopover, PopoverBody } from "reactstrap";
import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faDollarSign
} from "@fortawesome/free-solid-svg-icons";
import {
  faClock,
  faCalendarAlt,
  faUser
} from "@fortawesome/free-regular-svg-icons";

import LocationModal from "../LocationModal/LocationModal";

import "./PostDriveModal.css";

const _ = require("underscore");

class CustomInput extends Component {
  render() {
    return (
      <Button
        onClick={this.props.onClick}
        style={{
          width: window.innerWidth > 950 ? "128%" : "95%",
          borderColor: "#E6E6E6",
          borderWidth: "1px",
          boxShadow: "none",
          backgroundColor: "#EDEDED",
          borderRadius: "10px",
          fontSize: "19px",
          color: "#5C5C5C",
          height: "44px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center"
        }}
      >
        <FontAwesomeIcon icon={faCalendarAlt} style={{ color: "#1D96EF" }} />
        <div style={{ marginLeft: "7px" }}>{this.props.value}</div>
      </Button>
    );
  }
}

const PostDriveModal = ({ modal, toggleModal }) => {
  const [, updateWindow] = useState();
  const [from, setFrom] = useState("From");
  const [to, setTo] = useState("To");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [price, setPrice] = useState(0);
  const [seats, setSeats] = useState(0);
  const [desc, setDesc] = useState("Test Description");

  useEffect(() => {
    window.onresize = () => {
      updateWindow({});
    };
  });

  const locationStyle = {
    width: "96%",
    borderColor: "#E6E6E6",
    borderWidth: "1px",
    boxShadow: "none",
    backgroundColor: "#EDEDED",
    borderRadius: "10px",
    fontSize: "19px",
    color: "#D3D3D3",
    height: "44px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  };

  const fromStyle = _.extend({}, locationStyle, {
    color: from === "From" ? "#D3D3D3" : "#5C5C5C"
  });

  const toStyle = _.extend({}, locationStyle, {
    color: to === "To" ? "#D3D3D3" : "#5C5C5C"
  });

  const etcStyle = _.extend({}, locationStyle, {
    width: "92%"
  });

  const descStyle = _.extend({}, locationStyle, {
    width: "98%",
    height: "140px",
    color: desc === "Test Description" ? "#D3D3D3" : "#5c5c5c"
  });

  return (
    <div className="post-drive-modal-wrapper">
      <div className="post-drive-title">
        <p>NEW DRIVE</p>
      </div>
      <div className="post-drive-options">
        <div className="post-drive-location">
          <div className="location-input">
            <Button style={fromStyle} id="FromButton">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                style={{ color: "#ADE88F" }}
              />
              <div style={{ marginLeft: "7px" }}>{from}</div>
            </Button>
            <UncontrolledPopover
              trigger="legacy"
              placement="bottom"
              target="FromButton"
              style={{
                backgroundColor: "#5C5C5C",
                width: window.innerWidth > 950 ? "200%" : "130%",
                borderRadius: "4px"
              }}
            >
              <PopoverBody>
                <LocationModal
                  location={from}
                  setLocation={setFrom}
                  buttonColor="#5C5C5C"
                  buttonWidth={window.innerWidth > 950 ? "74%" : "58%"}
                  textColor="white"
                  borderColor="white"
                  titleColor="white"
                />
              </PopoverBody>
            </UncontrolledPopover>
          </div>
          <div className="location-input">
            <Button style={toStyle} id="ToButton">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                style={{ color: "#FABE5D" }}
              />
              <div style={{ marginLeft: "7px" }}>{to}</div>
            </Button>
            <UncontrolledPopover
              trigger="legacy"
              placement="bottom"
              target="ToButton"
              style={{
                backgroundColor: "#5C5C5C",
                width: window.innerWidth > 950 ? "200%" : "130%",
                borderRadius: "4px",
                marginLeft: window.innerWidth > 950 ? "-210px" : "-80px"
              }}
            >
              <PopoverBody>
                <LocationModal
                  location={to}
                  setLocation={setTo}
                  buttonColor="#5C5C5C"
                  buttonWidth={window.innerWidth > 950 ? "74%" : "58%"}
                  textColor="white"
                  borderColor="white"
                  titleColor="white"
                />
              </PopoverBody>
            </UncontrolledPopover>
          </div>
        </div>
        <div className="post-drive-etc">
          <div className="half-inputs">
            <div className="etc-input">
              <DatePicker
                customInput={<CustomInput />}
                selected={date}
                onChange={date => setDate(date)}
                dateFormat="MM/dd/yy"
              />
            </div>
            <div className="etc-input">
              <Button style={etcStyle}>
                <FontAwesomeIcon icon={faClock} style={{ color: "#FF9393" }} />
                <div style={{ marginLeft: "7px" }}>Time</div>
              </Button>
            </div>
          </div>
          <div className="half-inputs">
            <div className="etc-input">
              <Button style={etcStyle}>
                <FontAwesomeIcon
                  icon={faDollarSign}
                  style={{ color: "#7CDDA6" }}
                />
                <div style={{ marginLeft: "7px" }}>Price</div>
              </Button>
            </div>
            <div className="etc-input">
              <Button style={etcStyle}>
                <FontAwesomeIcon icon={faUser} style={{ color: "#A2DAEF" }} />
                <div style={{ marginLeft: "7px" }}>Seats</div>
              </Button>
            </div>
          </div>
        </div>
        <div className="post-drive-desc">
          <Input
            type="textarea"
            style={descStyle}
            value={desc}
            onChange={e => {
              setDesc(e.target.value);
            }}
          />
        </div>
        <div className="post-drive-button">
          <Button
            onClick={() => toggleModal(!modal)}
            style={{
              backgroundColor: "#1D96EF",
              boxShadow: "none",
              borderWidth: "0px",
              width: "100px",
              fontWeight: "bold",
              fontSize: "20px",
              borderRadius: "10px"
            }}
          >
            POST
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostDriveModal;
