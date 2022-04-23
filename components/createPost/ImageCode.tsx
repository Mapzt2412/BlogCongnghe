import image from "next/image";
import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";

export const ImageCode  = (props)=>{
    const [image, setImage] = useState();
    function handleImage(e) {
        const file = e.target.files[0];
        if (file) {
            file.preview = URL.createObjectURL(file);
            setImage(file);
        }

    }
      
    return (<>
        <Row className="MediaContainer">
              <Col
                lg={11}
                className="item-container"
              >
                <div
                  className="item"
                >
                  
                  <div style={{ flexGrow: "30", lineHeight: "38px" }}>
                    Hình ảnh
                  </div>
                  <div className={props.class}>
                    <input  type="file" name={props.class}
                      onChange={handleImage }  
                      style={{display:"none"}}   
                    />
                  </div>
                  
                  <Button style={{ flexGrow: "1" }} onClick={ ()=>{
                        const input = document.querySelector('input'+"[name='" +props.class+ "']") as HTMLInputElement;
                        input.click();
                    }}>+</Button>
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
              {image && (
                    <img src={image.preview} alt=""></img>
                )
                }
            </Row>
    </>);
}