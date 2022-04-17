import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import BubbleTalk from "/assets/icon_bubble_talk.png"


export default function HotComment() {
    return (
        <div className="hot_comment" style={{display: 'flex',marginTop: "18px", borderBottom: "solid 1px #ebebeb"}}>
            <div style={{marginRight:"14px"}}><Image src={BubbleTalk} width= {80} height={80}></Image></div>  
            <p style={{fontSize: "14px", paddingBottom: "18px"}}>It is a long established fact that a reader will be distracted by the readable 
            content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more</p>
        </div>
    );
}