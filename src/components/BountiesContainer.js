import { CContainer, CRow, CCol } from "@coreui/react";
import Grids from "./DragCard";

function BountiesContainer() {
  return (
    <>
      <div className="d-flex justify-content-center main-container">
        <div className="n-main-div">
          <div className="n-secondmain-div text-white">
            <div className="main-cards-div overflow-x-auto">
              <span className="card-1">OPEN BOUNTIES</span>

              <span className="card-1">IN PROGRESSo</span>

              <span className="card-1">UNDER REVIEW</span>

              <span className="card-1">CLOSE / REWARDED</span>
            </div>
            <Grids />
          </div>
        </div>
      </div>
    </>
  );
}

export default BountiesContainer;
