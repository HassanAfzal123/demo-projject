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
      { i: "c", x: 2, y: 0, w: 0.9, h: 5.5 },
      { i: "d", x: 3, y: 0, w: 0.9, h: 5.5 },
      { i: "e", x: 0, y: 0, w: 0.9, h: 5.5 },
      { i: "f", x: 1, y: 0, w: 0.9, h: 5.5 },
      { i: "g", x: 2, y: 0, w: 0.9, h: 5.5 },
      { i: "h", x: 3, y: 0, w: 0.9, h: 5.5 },
    ];

    const changeCardColor = (items) => {
      items.forEach((item)=>{
        let key = item.i;
        var newColor;
        switch(item.x) {
          case 0:
            newColor = 'gray';
            break;
          case 1:
            newColor = 'darkblue';
            break;
          case 2:
            newColor = '#e10bed';
            break;
          case 3:
            newColor = '#2cf7a9';
        }
        let element = document.getElementById(key).getElementsByClassName('card-footer')[0]
        element.setAttribute('style',element.getAttribute('style')+`;background-color: ${newColor}`)
      })

      return;
    }
    return (
      <ResponsiveGridLayout
        className="layout"
        layouts={{ lg: layout }}
        cols={{ lg: 4, sm: 4, xs: 4, md: 4 }}
        rowHeight={30}
        containerPadding={[10, 20]}
        useCSSTransforms={true}
        style={{ position: "relative" }}
        onDragStop={(items)=>changeCardColor(items)}
      >
        {/* Card 1 */}

        <CCard
          style={{
            color: "white",
            backgroundColor: "#5a4860",
            textAlign: "left",
            borderRadius: "0.7rem",
            border: "none"
          }}
          key="a"
          id="a"
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
            style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", color: "black", backgroundColor: "gray", borderBottomLeftRadius:"0.7rem", borderBottomRightRadius:"0.7rem" }}
          >
            <span>Reward: 5$</span>
            <span>Time left: 2 days</span>
          </CCardFooter>
        </CCard>

        {/* Card 2 */}
        <CCard
          style={{
            color: "white",
            backgroundColor: "#5a4860",
            textAlign: "left",
            borderRadius: "0.7rem",
            border: "none"
          }}
          key="b"
          id="b"
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
            style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", color: "black", backgroundColor: "darkblue", borderBottomLeftRadius:"0.7rem", borderBottomRightRadius:"0.7rem" }}
          >
            <span>Reward: 5$</span>
            <span>Time left: 2 days</span>
          </CCardFooter>
        </CCard>

        {/* Card 3 */}
        <CCard
          style={{
            color: "white",
            backgroundColor: "#5a4860",
            textAlign: "left",
            borderRadius: "0.7rem",
            border: "none"
          }}
          key="c"
          id="c"
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
            style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", color: "black", backgroundColor: "#e10bed", borderBottomLeftRadius:"0.7rem", borderBottomRightRadius:"0.7rem" }}
          >
            <span>Reward: 5$</span>
            <span>Time left: 2 days</span>
          </CCardFooter>
        </CCard>

        {/* Card 4 */}
        <CCard
          style={{
            color: "white",
            backgroundColor: "#5a4860",
            textAlign: "left",
            borderRadius: "0.7rem",
            border: "none"
          }}
          key="d"
          id="d"
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
            style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", color: "black", backgroundColor: "#2cf7a9", borderBottomLeftRadius:"0.7rem", borderBottomRightRadius:"0.7rem" }}
          >
            <span>Reward: 5$</span>
            <span>Time left: 2 days</span>
          </CCardFooter>
        </CCard>

        {/* Card 5 */}

        <CCard
          style={{
            color: "white",
            backgroundColor: "#5a4860",
            textAlign: "left",
            borderRadius: "0.7rem",
            border: "none"
          }}
          key="e"
          id="e"
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
            style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", color: "black", backgroundColor: "gray", borderBottomLeftRadius:"0.7rem", borderBottomRightRadius:"0.7rem" }}
          >
            <span>Reward: 5$</span>
            <span>Time left: 2 days</span>
          </CCardFooter>
        </CCard>

        {/* Card 6 */}
        <CCard
          style={{
            color: "white",
            backgroundColor: "#5a4860",
            textAlign: "left",
            borderRadius: "0.7rem",
            border: "none"
          }}
          key="f"
          id="f"
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
            style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", color: "black", backgroundColor: "darkblue", borderBottomLeftRadius:"0.7rem", borderBottomRightRadius:"0.7rem" }}
          >
            <span>Reward: 5$</span>
            <span>Time left: 2 days</span>
          </CCardFooter>
        </CCard>

        {/* Card 7 */}
        <CCard
          style={{
            color: "white",
            backgroundColor: "#5a4860",
            textAlign: "left",
            borderRadius: "0.7rem",
            border: "none"
          }}
          key="g"
          id="g"
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
            style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", color: "black", backgroundColor: "#e10bed", borderBottomLeftRadius:"0.7rem", borderBottomRightRadius:"0.7rem" }}
          >
            <span>Reward: 5$</span>
            <span>Time left: 2 days</span>
          </CCardFooter>
        </CCard>

        {/* Card 8 */}
        <CCard
          style={{
            color: "white",
            backgroundColor: "#5a4860",
            textAlign: "left",
            borderRadius: "0.7rem",
            border: "none"
          }}
          key="h"
          id="h"
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
            style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", color: "black", backgroundColor: "#2cf7a9", borderBottomLeftRadius:"0.7rem", borderBottomRightRadius:"0.7rem" }}
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
