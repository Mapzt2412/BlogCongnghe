import Head from "next/head";
import Image from "next/image";
import ReactPlayer from 'react-player'
import "bootstrap/dist/css/bootstrap.min.css";
import { EditorProps  } from 'react-draft-wysiwyg';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'; 
import dynamic from 'next/dynamic';
import { Row, Col, Dropdown, Button, Form, Modal } from "react-bootstrap";
import { Header } from "../../components/Header";
import { useEffect, useRef, useState } from "react";
import icon_image from "../../assets/icon_images.png"
import icon_text from "../../assets/icon_content.png"
import icon_Video from "../../assets/icon_movie.png"
import icon_rating from "../../assets/icon_rating.png"
import icon_code from "../../assets/icon_code.png"
import icon_poll from "../../assets/icon_poll.png"
import icon_map from "../../assets/icon_map.png"
import icon_table from "../../assets/icon_calendar.png"
import icon_question from "../../assets/icon_question.png"
import icon_math from "../../assets/icon_math.jpg"
import { HandleTable } from "../../components/HandleTable";
import { HandleVideo } from "../../components/handleVideo";
import EditorMath from "../../components/Editor";
import { Footer } from "../../components/Footer";
import logo from "../../assets/logo.png"

export default function CreatePost() {
  const [show, setShow] = useState(false);
  const [showContentCode, setShowContentCode] = useState(false);
  const [showImageCode, setShowImageCode] = useState(false);
  const [showVideoCode, setShowVideoCode] = useState(false);
  const [showTableCode, setShowTableCode] = useState(false);
  const [showMapCode, setShowMapCode] = useState(false);
  const [showMathCode, setShowMathCode] = useState(false);
  const [showRateCode, setShowRateCode] = useState(false);
  const [close, setClose] = useState(false);
  const [openDraft, setOpenMDraft] = useState(false);
  const [publish, setPublish] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const handleCloseMap = () => setShowMap(false);
  const handleShowMap = () => setShowMap(true);
  const [showTable, setShowTable] = useState(false);
  const textInput = useRef(null)
  const mapInput = useRef(null)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [image, setImage] = useState();
  const handleImage = (e) => {
    const file = e.target.files[0];
    if(file){
      file.preview = URL.createObjectURL(file);
      setImage(file)
    }
   
  }
  const callbackFunction = (childData) => {
    setShow(childData)
  }

  const Editor = dynamic<EditorProps >(
    () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
    { ssr: false }
  )
  const [editor, setEditor] = useState<boolean>(false)
  useEffect(() => {
    setEditor(true)
  })
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  let imageCode = (
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
                    Hình ảnh
                  </div>
                  <input type="file" 
                    onChange={handleImage }  
                    style={{display:"none"}}   
                  />
                  <Button style={{ flexGrow: "1" }} onClick={ ()=>{
                        const input = document.querySelector('input[type="file"]') as HTMLInputElement;
                        input.click();
                    }}>+</Button>
                </div>
              </Col>
              
              <Col lg={1} style={{ lineHeight: "89px", paddingLeft: "16px" }}>
                <div
                   className="deleteIcon"
                   onClick={()=>{setShowImageCode(false)}}
                >
                  X
                </div>
              </Col>
              {image && (
                    <img src={image.preview} alt=""></img>
                )
                }
            </Row>
    </>
  );
  let videoCode = (
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
                  onClick={()=>{setShowVideoCode(false)}}
                >
                  X
                </div>
              </Col>
                <HandleVideo show ={show} parentCallback={callbackFunction}/>
            </Row>
    </>
  );
  let contentCode = (
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
                    Nội dung
                  </div>
                </div>
                {editor ? (
                    <Editor
                        wrapperClassName="wrapper-class"
                        editorClassName="editor-class"
                        toolbarClassName="toolbar-class"
                        toolbar={{
                            options: ['inline', 'blockType', 'fontSize', 'list', 'textAlign', 'fontFamily', 'colorPicker','emoji','history'],
                            inline: { inDropdown: true },
                            list: { inDropdown: true },
                            textAlign: { inDropdown: true },
                            link: { inDropdown: true },
                            history: { inDropdown: true }
                        }}
                    />) : null}
              </Col>
              
              <Col lg={1} style={{ lineHeight: "89px", paddingLeft: "16px" }}>
                <div
                  className="deleteIcon"
                  onClick={()=>{setShowContentCode(false)}}
                >
                  X
                </div>
              </Col>
              
            </Row></>
  );
  let mathCode = (
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
                  onClick={()=>{setShowMathCode(false)}}
                >
                  X
                </div>
              </Col>
              
            </Row>
    </>
  );
  let tableCode = (
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
                  onClick={()=>{setShowTableCode(false)}}
                >
                  X
                </div>
              </Col>
            {(showTable == true) && (<HandleTable show = {showTable}/>)}
            </Row>
            </>
  ); 
  let mapCode = (
    <>
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
                  onClick={()=>{setShowMapCode(false)}}
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
  let rateCode =(
    <>
    <Row className=" MediaContainer ">
              <Col
                lg={11}
                className="item-container"
              >
                <div
                  className="item"
                >
                  
                  <div style={{ flexGrow: "30", lineHeight: "38px" }}>
                    Đánh giá
                  </div>
                  <Button 
                      style={{ flexGrow: "1" }}
                      onClick={handleShowMap} >+</Button>
                </div>
              </Col>
              
              <Col lg={1} style={{ lineHeight: "89px", paddingLeft: "16px" }}>
                <div
                  className="deleteIcon"
                  onClick={()=>{setShowRateCode(false)}}
                >
                  X
                </div>
              </Col>
          </Row>
    </>
  );
  let element = (
    <>
    {contentCode}
        </>
);
  return (
    <div>
      <Head>
        <title>CreatePost</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header userId="1"/>
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
      <div className="container2">
        <div style={{ color: "#999", padding: "20px 0px 30px 0px" }}>
          Home / <span style={{ color: "#333" }}>Tạo bài viết</span>
        </div>

        <Row className="CreatePostContainer">
          <Col lg={8}>
            <Row
              className="rowContainer"
            >
              <Col lg={2}>
                <div
                  className="col2"
                >
                  Chủ đề
                </div>
              </Col>
              
              <Col lg={10} style={{ paddingRight: "0px" }}>
              <Form.Select aria-label="Default select example">
                <option>Chọn chủ đề cho bài viết của bạn </option>
                <option value="1">TECHNOLOGY</option>
                <option value="2">PROGRAMMING</option>
                <option value="3">CRYPTOCURRENCY</option>
                <option value="4">PYTHON</option>
                <option value="5">JAVASCRIPT</option>
                <option value="6">BLOCKCHAIN</option>
                <option value="7">GAMING</option>
                <option value="8">AI</option>
                <option value="9">REACT</option>
                <option value="10">SECURITY</option>
                <option value="11">SOFTWARE DEVELOPMENT</option>
                <option value="12">MACHINE LEARNING</option>
                <option value="13">REVIEWS</option>

              </Form.Select>
              </Col>
              
            </Row>
            <Row
              className="rowContainer"
            >
              <Col lg={2}>
                <div
                  className="col2"
                >
                  Tag
                </div>
              </Col>
              
              <Col lg={10} style={{ paddingRight: "0px" }}>
              <Form.Group className="mb-3 title" controlId="title">
                <Form.Control as="textarea" rows={1} placeholder="Mỗi bài viết được gắn tối đa 4 tag"/>
              </Form.Group>
              </Col>
              
            </Row>
            <Row
              className="rowContainer"
            >
              <Col lg={2}>
                <div
                  style={{
                    display: "inline-block",
                    verticalAlign: "middle",
                    lineHeight: "normal"
                  }}
                >
                  Tiêu đề
                </div>
              </Col>
              
              <Col lg={10} style={{ paddingRight: "0px" }}>
              <Form.Group className="mb-3 title" controlId="title">
                <Form.Control as="textarea" rows={1} />
              </Form.Group>
              </Col>
              
            </Row>
            <Row className="rowContainer"
            >
              <Col lg={2}>
                <div className="col2">
                  Sơ lược
                </div>
              </Col>
              <Col lg={10} style={{ paddingRight: "0px" }}>
              <Form.Group className="mb-3 title" controlId="title">
                <Form.Control as="textarea" rows={3} placeholder="140-170 ký tự đầu tiên có thể xuất hiện trong kết quả tìm kiếm."/>
              </Form.Group>
              </Col>
              
            </Row>
            {(showContentCode==true) ? contentCode: null}
            {(showImageCode==true) ? imageCode: null}
            {(showVideoCode==true) ? videoCode: null}
            {(showTableCode==true) ? tableCode: null}
            {(showMapCode==true) ? mapCode: null}
            
            {(showRateCode==true) ? rateCode: null}
            {(showMathCode==true) ? mathCode: null}
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
                >
                  X
                </div>
              </Col>
              
            </Row>
            <Row>
              <Col
                lg={11}
                style={{
                  padding: "25px 0",
                }}
              >
                <h1
                  style={{
                    textAlign: "center",
                    padding: "10px",
                    border: "2px dashed rgb(212 212 212)",
                    color: "rgb(212 212 212)",
                  }}
                >
                  +
                </h1>
                <div
                  style={{
                    color: "#848484",
                    fontSize: "12px",
                    textAlign: "center",
                  }}
                >
                  Thêm tiện ích bằng cách kéo rê thành phần ở bên phải vào khung
                  trên
                </div>
              </Col>
              <Col lg={1}></Col>
            </Row>

            <Row>
              <Col lg={6}></Col>
              <Col lg={3}>
                {" "}
                <Button
                  variant="light"
                  style={{ border: "1px solid blue", color: "blue" }}
                  onClick={()=>{setOpenMDraft(true)}}
                >
                  LƯU BẢN NHÁP
                </Button>
              </Col>
              <Col lg={3}>
                {" "}
                <Button variant="primary" onClick={()=>{setPublish(true)}}>ĐĂNG BÀI VIẾT</Button>
              </Col>
            </Row>
          </Col>
          <Col lg={4} style={{ paddingLeft: "34px" }}>
            <div
              style={{ backgroundColor: "#f6f6f6", padding: "0 18px 20px 20px" }}
            >
              <h2
                style={{
                  fontSize: "19px",
                  fontWeight: "700",
                  padding: "14px 0",
                  borderBottom: "2px solid #c1afaf",
                }}
              >
                THÊM TIỆN ÍCH
              </h2>
              <Row>
                
                <Col lg={6}>
                  <div
                    style={{
                      backgroundColor: "white",
                      padding: "10px 20px",
                      height: "150px",
                      marginTop: "15px"
                    }}
                  >
                    <Image src={icon_text} width={150} height={150} onClick={() => {setShowContentCode(true)}}></Image>
                  </div>
                </Col>
                <Col lg={6}>
                  <div
                    style={{
                      backgroundColor: "white",
                      padding: "10px 20px",
                      height: "150px",
                      marginTop: "15px"
                    }}
                  >
                    <Image src={icon_image} width={150} height={150} onClick={() => {setShowImageCode(true)}}></Image>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={6}>
                  <div
                    style={{
                      backgroundColor: "white",
                      padding: "10px 20px",
                      height: "150px",
                      marginTop: "15px"
                    }}
                  >
                    <Image src={icon_Video} width={150} height={150} onClick={() => {setShowVideoCode(true)}}></Image>
                  </div>
                </Col>
                <Col lg={6}>
                  <div
                    style={{
                      backgroundColor: "white",
                      padding: "10px 20px",
                      height: "150px",
                      marginTop: "15px"
                    }}
                  >
                    <Image src={icon_poll} width={150} height={150}></Image>
                  </div>
                </Col>
                <Col lg={6}>
                  <div
                    style={{
                      backgroundColor: "white",
                      padding: "10px 20px",
                      height: "150px",
                      marginTop: "15px"
                    }}
                  >
                  <Image src="https://www.seekpng.com/png/detail/444-4449289_diagram-png-diagram-icon.png" alt="Diagram Png - Diagram Icon@seekpng.com" width={150} height={150}/> 
                  </div>
                </Col>
                <Col lg={6}>
                  <div
                    style={{
                      backgroundColor: "white",
                      padding: "10px 20px",
                      height: "150px",
                      marginTop: "15px"
                    }}
                  >
                    <Image src={icon_map} width={150} height={150} onClick={() => {setShowMapCode(true)}}></Image>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={6}>
                  <div
                    style={{
                      backgroundColor: "white",
                      padding: "10px 20px",
                      height: "150px",
                      marginTop: "15px"
                    }}
                  >
                    <Image src={icon_table} width={150} height={150} onClick={() => {setShowTableCode(true)}}></Image>
                  </div>
                </Col>
                <Col lg={6}>
                  <div
                    style={{
                      backgroundColor: "white",
                      padding: "10px 20px",
                      height: "150px",
                      marginTop: "15px"
                    }}
                  >
                    <Image src={icon_math} width={150} height={150} onClick={() => {setShowMathCode(true)}}></Image>
                  </div>
                </Col>  
              </Row>
              <Row>
                <Col lg={6}>
                  <div
                    style={{
                      backgroundColor: "white",
                      padding: "10px 20px",
                      height: "150px",
                      marginTop: "15px"
                    }}
                  >
                  <Image src={icon_question} width={150} height={150}></Image>
                  </div>
                </Col>
                <Col lg={6}>
                  <div
                    style={{
                      backgroundColor: "white",
                      padding: "10px 20px",
                      height: "150px",
                      marginTop: "15px"
                    }}
                  >
                    <Image src={icon_rating} width={150} height={150} onClick={() => {setShowRateCode(true)}}></Image>
                  </div>
                </Col>
              </Row>
              <Row>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
      <Modal
            show={openDraft}
            onHide={()=>{setOpenMDraft(false)}}
            backdrop="static"
            keyboard={false}
            
        >
          <Modal.Body>
                <h2 className="text-center"><Image src={logo} width={200} height={48} className="logo">
              </Image></h2>
                <h4 className="text-muted text-center pt-2">Thông báo</h4>
                <p className="text-center">Bạn có muốn lưu bài viết này không</p>
                <div className="col d-flex justify-content-center">
                        <Button className="btn btn-block text-center my-3 " style={{margin: 10}} data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>{setOpenMDraft(false)}}>Lưu bản nháp</Button>
                        <Button className="btn btn-block text-center my-3 " data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>{setOpenMDraft(false)}}>Không</Button>
                    </div>
            </Modal.Body>
        </Modal>
        <Modal
            show={openDraft}
            onHide={()=>{setOpenMDraft(false)}}
            backdrop="static"
            keyboard={false}
            
        >
          <Modal.Body>
                <h2 className="text-center"><Image src={logo} width={200} height={48} className="logo">
              </Image></h2>
                <h4 className="text-muted text-center pt-2">Thông báo</h4>
                <p className="text-center">Bạn có muốn lưu bài viết này không</p>
                <div className="col d-flex justify-content-center">
                        <Button className="btn btn-block text-center my-3 " style={{margin: 10}} data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>{setOpenMDraft(false)}}>Lưu bản nháp</Button>
                        <Button className="btn btn-block text-center my-3 " data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>{setOpenMDraft(false)}}>Không</Button>
                    </div>
            </Modal.Body>
        </Modal>
        <Modal
            show={publish}
            onHide={()=>{setPublish(false)}}
            backdrop="static"
            keyboard={false}
            
        >
          <Modal.Body>
                <h2 className="text-center"><Image src={logo} width={200} height={48} className="logo">
              </Image></h2>
                <h4 className="text-muted text-center pt-2">Thông báo</h4>
                <Form.Select aria-label="Default select example">
                  <option>Chọn chế độ đăng bài</option>
                  <option value="1">Công khai</option>
                  <option value="2">Chỉ cho người theo dõi</option>
                  <option value="3">Chỉ mình tôi</option>
                </Form.Select>
                <p className="text-center">Bạn có muốn đăng bài ngay lập tức </p>
                <div className="col d-flex justify-content-center">
                        <Button className="btn btn-block text-center my-3 " style={{margin: 10}} data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>{setPublish(false)}}>Đăng bài</Button>
                        <Button className="btn btn-block text-center my-3 " data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>{setPublish(false)}}>Lập lịch đăng bài</Button>
                  </div>
            </Modal.Body>
        </Modal>
    <Footer/>
    </div>
  );

}
