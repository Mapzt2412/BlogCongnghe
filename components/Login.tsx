import Link from "next/link";
import { useEffect,useState } from "react";
import { Button, Form, FormControl, InputGroup, Modal } from "react-bootstrap";
import Image from "next/image";
import hide from "../assets/hide.png"
import logo from "../assets/logo.png"

export const Login = (showModal) =>{
    

    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
    }
    const [passwordShown, setPasswordShown] = useState(false);
    useEffect(() => {
        function handler(evt) {
            if(evt.which === 27)
            handleClose();
        }
        document.addEventListener("keyup", handler);
        return () => {
            document.removeEventListener("keyup", handler);
        }
      }, [])
    useEffect(() => {
        if(showModal.open === true)
            setShow(true);
      }, [showModal.open])

    return(
        <>  
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            
        >
            <Modal.Body>
                <h2 className="text-center"><Image src={logo} width={200} height={48} className="logo">
              </Image></h2>
                <h4 className="text-muted text-center pt-2">Đăng nhập</h4>
                <Form className="pt-3">
                     <span>Tên đăng nhập</span> 
                    <InputGroup className="py-2">
                        
                        <FormControl
                            className="input-field"
                        />
                    </InputGroup>
                    <span>Mật khẩu</span>
                    <InputGroup className="py-1 pb-2">
                        
                        <FormControl
                            type="password"
                            className="input-field"
                            id="password"
                        />
                    </InputGroup>
                </Form>
                <div className="d-flex justify-content-between">
                        <div className="remember"> <label className="option text-muted"> Lưu mật khẩu <input type="radio" name="radio"/> <span className="checkmark"></span> </label> </div>
                        <div className="forgot"> <Link href="#">Quên mật khẩu?</Link> </div>
                </div>
                <div className="col d-flex justify-content-center">
                        <Button className="btn btn-block text-center my-3 " data-bs-toggle="modal" data-bs-target="#exampleModal">Đăng nhập</Button>
                    </div>
                <div className="text-center pt-3 text-muted">Chưa có tài khoản? <Link href="#">Đăng ký</Link></div>
            </Modal.Body>
        </Modal>
        
        </>
        

    );
        
}