import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import EditorMath from "../../components/Editor";

export const MathCode = (props) =>{
    const [editorLoaded, setEditorLoaded] = useState(false);
    const [data, setData] = useState("");

    useEffect(() => {
        setEditorLoaded(true);
    }, []);
    return (
        <>
        <Row className="TextContainer">
              <Col
                lg={11}
                className="item-container"
              >
                <div
                  className="item"
                >
                  
                  <div style={{ flexGrow: "30", lineHeight: "38px" }}>
                    Công thức toán học
                  </div>
                </div>
                {<EditorMath
                      name ="CreatePost"
                      onChange={(data) => {
                        setData(data);
                      }}
                      editorLoaded={editorLoaded}
                    />}

              </Col>
              
              <Col lg={1} style={{ lineHeight: "89px", paddingLeft: "16px" }}>
                <div
                  className="deleteIcon"
                  onClick={()=>{props.parentCallback(props.class)}}
                >
                  X
                </div>
              </Col>
              
            </Row>
            </>
    );
}