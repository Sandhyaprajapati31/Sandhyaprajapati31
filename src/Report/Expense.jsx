import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function Expense() {
  return (
    <>
      <div className="in-section">
        <div className="container-fluid">
          <div className="container">
            <div className="icomepage">
              <div className="incomepages">
                <div className="heading">
                  <h5>Manage Income Vs Expense</h5>
                </div>
                <div className="home-link">
                  <a href="#">Home</a>
                  <div className="sub-head">
                    Manage Income Vs Expense Report
                  </div>
                </div>
              </div>
              <div className="download-page">
                <a href="#" class="btn btn-sm btn-primary">
                  <FontAwesomeIcon icon={faDownload} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-5">
        <div className="container-fluid">
          <div className="container">
            <div className="card-1">
              <div className="card-box1">
             
                  <label htmlFor="start"> Start Month</label>
              
                <div className="box1">
                  <input
                    type="month"
                    id="bdaymonth"
                    name="bdaymonth"
                    placeholder="September"
                  ></input>
                </div>
              </div>

              <div className="card-box1">
             
                  <label htmlFor="End"> End Month </label>
               
                <div className="box1">
                  <input
                    type="month"
                    id="bdaymonth"
                    name="bdaymonth"
                    placeholder="September"
                  ></input>
                </div>
              </div>
              <div className="apply">
              <a href="#" class="btn btn-sm btn-primary" >
                <FontAwesomeIcon icon={faSquareCheck} />                </a>
              </div>
              <div className="apply">
              <a href="#" class="btn btn-sm btn-primary" >
              <FontAwesomeIcon icon={faUpload} />
              </a>  
                        </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Expense;
