import Image from "next/image";
import { useEffect, useState } from "react";
import Avatar1 from "../assets/avatar3.jpg"
import "bootstrap/dist/css/bootstrap.min.css";
import { Form , Button} from "react-bootstrap";
export const EditProfile = () =>{
    const [avatar, setAvatar] = useState(Avatar1);
    const handleAvatar = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setAvatar(file.preview)
    }
    useEffect(() => {
        return () => {
            URL.revokeObjectURL(avatar)
        }
    }, [avatar])
    return (
    <>
        
        <div className=" section">
            <h4>Ảnh đại diện</h4>
            <div className="photo_section">
                {avatar && (
                    <Image src={avatar} alt="" width={200} height={200} onClick={ ()=>{
                        const input = document.querySelector('input[type="file"]') as HTMLInputElement;
                        input.click();
                    }}></Image>
                )
                }
                <p>Nhấp vào để thay đổi ảnh đại diện</p>
                <input type="file" 
                    onChange={handleAvatar }  
                    className="avatarImage custom-file-input"  
                    style={{display:"none"}}   
                />
            </div>
        </div>
        <div className="displayName section">
            <h4>Tên hiển thị</h4>
            <Form.Control
                type="displayName"
                id="inputDisplayName"
            />
        </div>
        <div className="location section">
            <h4>Địa chỉ</h4>
            <Form.Control
                type="location"
                id="inputLocation"
            />
        </div>
        <div className="Bio section">
            <h4>Tiểu sử</h4>
            <Form.Group className="mb-3" controlId="Bio">
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
        </div>
        <div className="link section">
            <h4>Liên kết</h4>
            <h4>FaceBook</h4>
            <Form.Control
                type="FaceBook"
                id="inputFaceBook"
            />
            <h4>Twitter</h4>
            <Form.Control
                type="Twitter"
                id="inputTwitter"
            />
            <h4>Instagram</h4>
            <Form.Control
                type="Instagram"
                id="inputInstagram"
            />
            <h4>Github</h4>
            <Form.Control
                type="Github"
                id="inputGithub"
            />
        </div>
        <div className="Email section">
            <h4>Email</h4>
            <Form.Control
                type="Email"
                id="inputEmail"
            />
        </div>
        <div className="Phone section">
            <h4>Số điện thoại</h4>
            <Form.Control
                type="Phone"
                id="inputPhone"
            />
        </div>
        <Button className="save" variant="">Lưu</Button>
    </>
    );
}