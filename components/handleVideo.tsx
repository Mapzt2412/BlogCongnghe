import { useEffect, useRef, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import ReactPlayer from "react-player";
import CreatePost from "../pages/createPost";

export const HandleVideo = (props)=>{
  
    const [show, setShow] = useState(false);
    const handleClose = () => {setShow(false);
      }
    const handleShow = () => setShow(true);
    const textInput = useRef(null)
    useEffect(()=>{
      if(props.show==true){
        setShow(true);
      }
    },[props.show])
    props.parentCallback(false);
    return (
        <>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>Để link video hoặc mã nhúng vào hộp thoại bên dưới
        <Form.Control type="text" placeholder="Url video" id="Url_video" ref={textInput}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>{handleClose}}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{handleClose}}>
            Save Changes
          </Button>
        </Modal.Footer>
        </Modal>
        { 
                
                (textInput.current != null && textInput.current.value) && (
                <ReactPlayer url={textInput.current.value}/>
              )
        }
        </>
    );

}