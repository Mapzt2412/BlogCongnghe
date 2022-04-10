import Link from "next/link";
import { useEffect,useState } from "react";
import { Button, Form, FormControl, InputGroup, Modal } from "react-bootstrap";
import Image from "next/image";
import logo from "../assets/logo.png"

export const Register = (showModal) =>{

    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
    }

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
                <h2 className="text-center">
                    <Image src={logo} width={200} height={48} className="logo">
                 </Image></h2>
                <h4 className="text-muted text-center pt-2">Đăng ký</h4>
                <Form className="pt-3">
                    <span>Họ và tên</span> 
                    <InputGroup className="py-2">
                        
                        <FormControl
                            className="input-field"
                        />
                    </InputGroup>
                    <span>Tên đăng nhập</span> 
                    <InputGroup className="py-2">
                        
                        <FormControl
                            className="input-field"
                        />
                    </InputGroup>
                    <span>Email</span> 
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
                        />
                    </InputGroup>
                    <span>Xác nhận mật khẩu</span>
                    <InputGroup className="py-1 pb-2">
                        
                        <FormControl
                            type="password"
                            className="input-field"
                        />
                    </InputGroup>
                </Form>
                <div className="pt-3 text-muted">Bằng việc nhấn Đăng ký, đồng nghĩa với việc bạn đã đồng ý với các <Link href="#">Điều khoản</Link>của chúng tôi</div>
                <div className="col d-flex justify-content-center">
                        <Button className="btn btn-block text-center my-3 " data-bs-toggle="modal" data-bs-target="#exampleModal">Đăng ký</Button>
                    </div>
                
            </Modal.Body>
        </Modal>
        
        </>
        

    );
        
}