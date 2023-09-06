
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBusinessTime,
  faCalendarMinus,
  faDownload,
  faFileCircleCheck,
  faFileInvoiceDollar,
} from "@fortawesome/free-solid-svg-icons";
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { BarChart } from '@mui/x-charts/BarChart';

import React from "react";
const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [6000, 4398, 4200, 3908, 4800, 3800, 4300];
const xLabels = [
  'Sep 2023',
  'Aug 2023',
  'Jul 2023',
  'Jun 2023',
  'May 2023',
  'Apr 2023',
  
];

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
                <a href="#" class="btn btn-sm btn-primary">
                  <FontAwesomeIcon icon={faSquareCheck} />{" "}
                </a>
              </div>
              <div className="apply">
                <a href="#" class="btn btn-sm btn-primary">
                  <FontAwesomeIcon icon={faUpload} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-6">
        <div className="container-fluid">
          <div className="container">
            <div className="box-2">
              <div className="card-2">
                <div className="icon-2">
                  <FontAwesomeIcon icon={faFileCircleCheck} />
                </div>
                <div className="data-1">
                  <h6>Report</h6>
                  <small>Income vs Expense Summary</small>
                </div>
              </div>
              <div className="card-2">
                <div className="icon-2">
                  <FontAwesomeIcon icon={faCalendarMinus} />{" "}
                </div>
                <div className="data-1">
                  <h6>Duration</h6>
                  <small>Sep-2023 to Apr-2023</small>
                </div>
              </div>
              <div className="card-2">
                <div className="icon-2">
                  <FontAwesomeIcon icon={faFileInvoiceDollar} />{" "}
                </div>
                <div className="data-1">
                  <h6>Total Income</h6>
                  <small>$13,500.00</small>
                </div>
              </div>
              <div className="card-2">
                <div className="icon-2">
                  <FontAwesomeIcon icon={faBusinessTime} />{" "}
                </div>
                <div className="data-1">
                  <h6>Total Expense</h6>
                  <small>$12,000.00</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
<div className="section-7">
<BarChart
  width={450}
  height={300}
  series={[
    { data: pData, label: 'Income', id: 'pvId' },
    { data: uData, label: 'Expense', id: 'uvId' },
  ]}
  xAxis={[{ data: xLabels, scaleType: 'band' }]}
/>
</div>
    </>
  );
}
export default Expense;
