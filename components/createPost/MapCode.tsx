import { useRef, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";

export const MapCode = (props) =>{
    const [showMap, setShowMap] = useState(false);
    const handleCloseMap = () => setShowMap(false);
    const handleShowMap = () => setShowMap(true);
    const mapInput = useRef(null)
    return(
        <>
        <Modal show={showMap} onHide={handleCloseMap}>
            <Modal.Header closeButton>
            <Modal.Title>Bản đồ</Modal.Title>
            </Modal.Header>
            <Modal.Body>Để mã nhúng vào bên dưới
            <Form.Control type="text" placeholder="Mã nhúng bản đồ của bạn" id="Url_video" ref={mapInput}/>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseMap}>
                Close
            </Button>
            <Button variant="primary" onClick={handleCloseMap}>
                Save Changes
            </Button>
            </Modal.Footer>
         </Modal>
        <Row className=" MediaContainer ">
              <Col
                lg={11}
                className="item-container"
              >
                <div
                  className="item"
                >
                  
                  <div style={{ flexGrow: "30", lineHeight: "38px" }}>
                    Bản đồ
                  </div>
                  <Button 
                      style={{ flexGrow: "1" }}
                      onClick={handleShowMap} >+</Button>
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
              { 
                
                (mapInput.current != null && mapInput.current.value) && (
                  <div className="MapContainer" dangerouslySetInnerHTML={{__html: mapInput.current.value}}></div> 
              )
              }
          </Row>
          </>
    );
}