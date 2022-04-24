import { useState } from "react";
import { Row,Col,Button } from "react-bootstrap";
import { HandleVideo } from "../handleVideo";

export const VideoCode = (props)=>{
    const [show, setShow] = useState(false);
    const callbackFunction = (childData) => {
        setShow(childData)
      }
    return(<>
        <Row className="MediaContainer">
              <Col
                lg={11}
                className="item-container"
              >
                <div
                  className="item"
                >
                  
                  <div style={{ flexGrow: "30", lineHeight: "38px" }}>
                    Video
                  </div>
                  <Button 
                      style={{ flexGrow: "1" }}
                      onClick={()=> {
                        setShow(true)
                      }} >+</Button>
                </div>
              </Col>
              
              <Col lg={1} style={{ lineHeight: "89px", paddingLeft: "16px" }}>
                <div
                  className="deleteIcon"
                  onClick={()=>{props.parentCallback(props.class)}}
                >
                  X
                </div>
              </Col>
                <HandleVideo show ={show} parentCallback={callbackFunction}/>
            </Row>
    </>);
}