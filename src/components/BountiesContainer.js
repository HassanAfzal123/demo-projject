import { CContainer, CRow, CCol } from "@coreui/react";
import Grids from "./DragCard";

function BountiesContainer() {
  return (
    <>
      <div className="d-flex justify-content-center main-container">
        <div className="n-main-div">
          <div className="row">
            <div className="col-12" style={{ marginLeft: "2%" }}>
              <div className="n-secondmain-div">
                <h1>Bounties</h1>
              </div>
            </div>
            <div className="col-12" style={{ marginLeft: "2%" }}>
              <div
                className="n-secondmain-div text-white"
                style={{ borderTop: "1px solid grey" }}
              >
                <div className="main-cards-div overflow-x-auto">
                  <span className="card-1" style={{borderBottom:"4px solid gray"}}>OPEN BOUNTIES</span>

                  <span className="card-1" style={{borderBottom:"4px solid darkblue"}}>IN PROGRESS</span>

                  <span className="card-1" style={{borderBottom:"4px solid #e10bed"}}>UNDER REVIEW</span>

                  <span className="card-1" style={{borderBottom:"4px solid #2cf7a9"}}>CLOSE / REWARDED</span>
                </div>
                <Grids />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BountiesContainer;
