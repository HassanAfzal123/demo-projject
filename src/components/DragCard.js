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
      { i: "a", x: 0, y: 0, w: 0.95, h: 5.5 },
      { i: "b", x: 1, y: 0, w: 0.95, h: 5 },
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
        breakpoints={{ lg: "15%" }}
        cols={{ lg: 4 }}
        rowHeight={30}
        containerPadding={[10, 20]}
        useCSSTransforms={true}
      >
        <CCard style={{ color: "black" }} key="a">
          <CCardBody>
            <CCardHeader>Card title</CCardHeader>
            <CCardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CCardText>
            <CCardFooter>Reward</CCardFooter>
          </CCardBody>
        </CCard>
      </ResponsiveGridLayout>
    );
  }
}

export default Grids;
