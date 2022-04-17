import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import avatar from "../assets/avatar3.jpg"
import IconLike from "/assets/icon_like.png";
import IconShare from "/assets/icon_share.png";
import IconComment from "/assets/icon_comment.png";
import { FormControl, InputGroup} from "react-bootstrap";

export default function LikeShareComment() {
  return (
    <div>
                    <div className='icon like'>
                        <Image src={IconLike} width= {24} height={24}></Image>
                        <span style={{ paddingLeft: '8px'}}>218 Thích</span>
                    </div>
                    <div className='icon share'>
                        <Image src={IconShare} width= {24} height={24}></Image>
                        <span style={{ paddingLeft: '8px'}}>0 Chia sẻ</span>
                    </div>
                    <div className='icon comment'>
                        <Image src={IconComment} width= {24} height={24}></Image>
                        <span style={{ paddingLeft: '8px'}}>10 Bình luận</span>
                    </div>
                    <hr />
                    <div className="interactive-num">
                        <Image src={avatar} width= {40} height={40}></Image>  
                        <InputGroup className="form-group has-search">
                            <span className="fa fa-search form-control-feedback"></span>
                            <FormControl className="form-search" placeholder="Viết bình luận"/>
                        </InputGroup>
                    </div>
                    <hr />
                </div>
  );
}
