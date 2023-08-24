import { faNewspaper } from "@fortawesome/free-regular-svg-icons";

import {
  faAngleLeft,
  faAngleRight,
  faFileInvoiceDollar,
  faTicket,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  LocalizationProvider,
  MuiPickersAdapterContext,
} from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterFormats } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { StaticDatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

function Super() {
  return (
    <>
      <div className="das-section">
        <div className="container-fluid">
          <div className="container">
            <div className="dashboard">
              <div className="heading">Deshboard</div>
              <div className="box">
                <div className="card">
                  <div className="icon">
                    <FontAwesomeIcon icon={faUserTie} />{" "}
                  </div>
                  <div className="text">
                    <small>Total</small>
                    <h6>Staff</h6>
                  </div>

                  <div className="staff">20</div>
                </div>
                <div className="card">
                  <div className="icon">
                    <FontAwesomeIcon icon={faTicket} />{" "}
                  </div>
                  <div className="text">
                    <small>Total</small>
                    <h6>Ticket</h6>
                  </div>
                  <div className="staff">5</div>
                </div>

                <div className="card">
                  <div className="icon">
                    <FontAwesomeIcon icon={faFileInvoiceDollar} />{" "}
                  </div>
                  <div className="textes">
                    <small>Total</small>
                    <h6>Account Balance</h6>
                  </div>
                  <div className="staff">$50,000</div>
                </div>

                <div className="card">
                  <div className="icon">
                    <FontAwesomeIcon icon={faNewspaper} />{" "}
                  </div>
                  <div className="text">
                    <small>Total</small>
                    <h6>Jobs</h6>
                  </div>
                  <div className="staff">5</div>
                </div>
                <div className="card">
                  <div className="icon">
                    <FontAwesomeIcon icon={faNewspaper} />{" "}
                  </div>
                  <div className="text">
                    <small>Total</small>
                    <h6>Active Jobs</h6>
                  </div>
                  <div className="staff">20</div>
                </div>
                <div className="card">
                  <div className="icon">
                    <FontAwesomeIcon icon={faNewspaper} />{" "}
                  </div>
                  <div className="texte">
                    <small>Total</small>
                    <h6>Inactive Job</h6>
                  </div>
                  <div className="staff">0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="table-section">
        <div className="col-xxl-12">
          <div className="row">
            <div className="col-xxl-5">
              <div className="card_car">
                <div className="card-box">
                  <div className="heading">
                    <h5> Meeting schedule</h5>
                  </div>
                  <div className="table">
                    <table>
                      <thead>
                        <tr>
                          <th>TITLE</th>
                          <th>DATE</th>
                          <th>TIME</th>
                        </tr>
                      </thead>

                      <tbody className="list">
                        <tr>
                          <td>New Technology</td>
                          <td>Aug 15 2023</td>
                          <td>4:20 PM</td>
                        </tr>
                        <tr>
                          <td>Team Meeting</td>
                          <td>Aug 20 2023</td>
                          <td>4:20 PM</td>
                        </tr>
                        <tr>
                          <td>Event Related</td>
                          <td>Aug 20 2023</td>
                          <td>4:20 PM</td>
                        </tr>
                        <tr>
                          <td>Company Rules</td>
                          <td>Aug 20 2023</td>
                          <td>4:20 PM</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* 2nd talbe */}
              <div className="tab-sec">
                <div className="card_car-wapper">
                  <div className="card-box">
                    <div className="heading">
                      <h5>Today's Not Clock In</h5>
                    </div>
                    <div className="table-wapper">
                      <table className="tab-name">
                        <thead>
                          <tr>
                            <th>NAME</th>
                            <th>STATUS</th>
                          </tr>
                          <tbody>
                            <tr>
                              <td>sandhya</td>
                              <td>Absent</td>
                            </tr>
                            <tr>
                              <td>Piyush sir</td>
                              <td>Absent</td>
                            </tr>
                            <tr>
                              <td>Nikhil sir</td>
                              <td>Absent</td>
                            </tr>
                            <tr>
                              <td>Rupesh sir</td>
                              <td>Absent</td>
                            </tr>
                            <tr>
                              <td>Sahil</td>
                              <td>Absent</td>
                            </tr>
                            <tr>
                              <td>Paven sir</td>
                              <td>Absent</td>
                            </tr>
                            <tr>
                              <td>Pankaj</td>
                              <td>Absent</td>
                            </tr>
                            <tr>
                              <td>Pawan</td>
                              <td>Absent</td>
                            </tr>
                            <tr>
                              <td>Pawan</td>
                              <td>Absent</td>
                            </tr>
                            <tr>
                              <td>Manish</td>
                              <td>Absent</td>
                            </tr>
                            <tr>
                              <td>Abhiranjan</td>
                              <td>Absent</td>
                            </tr>

                            <tr>
                              <td>Radhika </td>
                              <td>Absent</td>
                            </tr>

                            <tr>
                              <td>Namrata</td>
                              <td>Absent</td>
                            </tr>
                            <tr>
                              <td>Pawan</td>
                              <td>Absent</td>
                            </tr>
                            

                           
                          </tbody>
                        </thead>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-7">
              <div className="card">
                <div className="card_header">
                  <div className="row">
                    <div className="col-xxl-6">
                      <div className="cal_heading">
                        <h5>Calendar</h5>
                      </div>
                    </div>

                    <div className="col-xxl-6">
                      <div className="select-option">
                        <select name="calen" id="calen">
                          <option value="local">Local Calendar</option>
                          <option value="google">Google Calender</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-xxl-12">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <StaticDatePicker
                        displayStaticWrapperAs="desktop"
                        defaultValue={dayjs("")}
                        fullWidth
                        slotProps={{
                          toolbar: {
                            toolbarFormat: "ddd DD MMMM",
                            hidden: false,
                          },
                        }}
                      />
                    </LocalizationProvider>
                    </div>
                    {/* </div>
                  </div> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="card">
                <div className="card-heading">
                  <h5>Announcement List</h5>
                </div>

                <div className="table-wapper">
                  <table className="table">
               
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>START DATE</th>
                        <th>END DATE</th>
                        <th>DESCRIPTION</th>
                      </tr>
                     
                    </thead>
                    
                    <tbody className="list">
                      <tr>
                        <td>Magnam est ducimus</td>
                        <td>Aug 20 2023</td>
                        <td>Aug 30 2023</td>
                        <td>At est quasi saepe p</td>
                      </tr>
                      <tr>
                        <td>Project Meeting</td>
                        <td>Aug 20 2023</td>
                        <td>Aug 30 2023</td>
                        <td>Lorem Ipsum, Or Lipsum</td>
                      </tr>
                      <tr>
                        <td>Team Meeting</td>
                        <td>Aug 20 2023</td>
                        <td>Aug 30 2023</td>
                        <td>Lorem Ipsum, Or Lipsum</td>
                      </tr>
                      <tr>
                        <td>Event Related</td>
                        <td>Aug 20 2023</td>
                        <td>Aug 30 2023</td>
                        <td>Lorem Ipsum, Or Lipsum</td>
                      </tr>
                      <tr>
                        <td>Meeting Related</td>
                        <td>Aug 20 2023</td>
                        <td>Aug 30 2023</td>
                        <td>Lorem Ipsum, Or Lipsum</td>
                      </tr>
                      <tr>
                        <td>Event Related</td>
                        <td>Aug 20 2023</td>
                        <td>Aug 30 2023</td>
                        <td>Lorem Ipsum, Or Lipsum</td>
                      </tr>
                      <tr>
                        <td>Event Related</td>
                        <td>Aug 20 2023</td>
                        <td>Aug 30 2023</td>
                        <td>Lorem Ipsum, Or Lipsum</td>
                      </tr>
                      <tr>
                        <td>Event Related</td>
                        <td>Aug 20 2023</td>
                        <td>Aug 30 2023</td>
                        <td>Lorem Ipsum, Or Lipsum</td>
                      </tr>
                      
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Super;
