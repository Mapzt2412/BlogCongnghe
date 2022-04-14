import { Button, Form ,FormControl,InputGroup} from "react-bootstrap";
import Link from "next/link";

export const ChangePassWord = () => {
    return (
        <>
                <Form className="pt-3">
                     <span>Mật khẩu cũ</span> 
                    <InputGroup className="py-2">
                        
                        <FormControl
                            type="password"
                            className="input-field"
                            id="password"
                        />
                    </InputGroup>
                    <span>Mật khẩu mới</span>
                    <InputGroup className="py-1 pb-2">
                        
                        <FormControl
                            type="password"
                            className="input-field"
                            id="password"
                        />
                    </InputGroup>
                    <span>Nhập lại mật khẩu mới</span>
                    <InputGroup className="py-1 pb-2">
                        
                        <FormControl
                            type="password"
                            className="input-field"
                            id="password"
                        />
                    </InputGroup>
                </Form>
                <div className="col d-flex justify-content-center">
                        <Button className="btn btn-block text-center my-3 " data-bs-toggle="modal" data-bs-target="#exampleModal">Lưu</Button>
                    </div>
        </>
    );
}