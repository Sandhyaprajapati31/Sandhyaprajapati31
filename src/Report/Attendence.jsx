import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";

function Attendence() {
  return (
    <>
      <div className="in-section">
        <div className="container-fluid">
          <div className="container">
            <div className="icome-pages">
              <div className="incomepages">
                <div className="heading">
                  <h5>Manage Monthly Attendance</h5>
                </div>
                <div className="home-link">
                  <a href="#">Home</a>
                  <div className="sub-head">
                    Manage Monthly Attendance Report
                  </div>
                </div>
              </div>
              <div className="icons-box">
              <div className="download-page">
                <a href="#" class="btn btn-sm btn-primary">
                  <FontAwesomeIcon icon={faDownload} />
                </a>
                </div>
                <div className="download-page">
                <a href="#" className="btn btn-sm btn-success">
                  <FontAwesomeIcon icon={faFile} />
                </a>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>

<div className="attend-section">
  <div className="container-fluid">
    <div className="container">
      <div className="attend-box">
        <div className="attend-card">
        <label htmlFor="start"> Start Month</label>

<div className="box2">
  <input
    type="month"
    id="bdaymonth"
    name="bdaymonth"
    placeholder="September"
  ></input>
</div>
<div className="box2">
  
</div>
        </div>
      </div>
    </div>
  </div>
</div>


<div className="caed-section">
  <div className="container-fluid">
    <div className="container">
      <div className="attend-main-box">
        <div className="attend-main-card">

        </div>
      </div>
    </div>
  </div>
</div>




    </>
  );
}
export default Attendence;
