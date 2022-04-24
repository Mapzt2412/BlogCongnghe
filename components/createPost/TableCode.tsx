import { useState } from "react";
import { Col, Row , Button} from "react-bootstrap";
import { HandleTable } from "../HandleTable";

export const TableCode = (props) =>{
    const [showTable, setShowTable] = useState(false);
    return (
        <>
        <Row className="MediaContainer">
              <Col
                lg={11}
                className="item-container"
              >
                <div
                  className="item"
                >
                  <div style={{ flexGrow: "30", lineHeight: "38px" }}>
                    Bảng
                  </div>
                  <Button 
                      style={{ flexGrow: "1" }}
                      onClick={()=>{
                        setShowTable(true)
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
            {(showTable == true) && (<HandleTable show = {showTable}/>)}
            </Row>
        </>
    );
}