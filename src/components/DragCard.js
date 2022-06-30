import { Responsive, WidthProvider } from "react-grid-layout";
import React from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCardFooter,
  CCardText,
} from "@coreui/react";

const ResponsiveGridLayout = WidthProvider(Responsive);

class Grids extends React.Component {
  render() {
    // layout is an array of objects, see the demo for more complete usage
    const layout = [
      { i: "a", x: 0, y: 0, w: 0.9, h: 5.5 },
      { i: "b", x: 1, y: 0, w: 0.9, h: 5.5 },
      { i: "c", x: 2, y: 0, w: 0.9, h: 5 },
      { i: "d", x: 3, y: 0, w: 0.9, h: 5 },
      { i: "e", x: 0, y: 0, w: 0.9, h: 5 },
      { i: "f", x: 1, y: 0, w: 0.9, h: 5 },
      { i: "g", x: 2, y: 0, w: 0.9, h: 5 },
      { i: "h", x: 3, y: 0, w: 0.9, h: 5 },
    ];
    return (
      <ResponsiveGridLayout
        className="layout"
        layouts={{ lg: layout }}
        cols={{ lg: 4, sm: 4, xs: 4, md: 4 }}
        rowHeight={30}
        containerPadding={[10, 20]}
        useCSSTransforms={true}
        style={{ position: "relative" }}
      >
        <CCard
          style={{
            color: "white",
            backgroundColor: "#5a4860",
            textAlign: "left",
            borderRadius: "0.7rem",
          }}
          key="a"
        >
          <CCardHeader>
            <h5 className="capitalize text-lg" style={{ fontWeight: "bolder" }}>
              Write A Blogpost For DAOHelper
            </h5>
          </CCardHeader>
          <CCardBody>
            <CCardText style={{ fontSize: "0.9rem" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in er
            </CCardText>
          </CCardBody>
          <CCardFooter
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <span>Reward: 5$</span>
            <span>Time left: 2 days</span>
          </CCardFooter>
        </CCard>
      </ResponsiveGridLayout>
    );
  }
}

export default Grids;
