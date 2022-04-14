import { Row, Col, Button } from "react-bootstrap";
import Image from "next/image";
import Avatar from "../assets/avatar3.jpg"
import Link from "next/link";

export const FollowerCard = () => {
    return (
        <>
        <div className="followerCard">
            <div className="avatar">
                <Image src={Avatar} width={80} height={80}>
                </Image>
            </div>
            <div className="description">
                <Link href={"#"}>
                    <h5>Bùi Đức Vũ</h5>
                </Link>
                <p>400 người theo dõi</p>
            </div>
            <Button>Theo dõi</Button>
        </div>
            
        </>
    );
}