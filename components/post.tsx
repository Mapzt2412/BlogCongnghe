import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import avatar from "../assets/avatar3.jpg"

export default function Post(props) {
  return (
    <Row className="post">
      <Col lg={4}>
        <Link href="listArticleDetail">
        <Image src={props.thumbnail || ""} alt="Post Image" layout="intrinsic" width={720} height={480} />
        </Link>
      </Col>  
      <Col lg={8}>
        <h4>{props.title}</h4>
        <p>
          iPhone Pro Max luôn là tâm điểm trong mỗi lần xuất hiện. Mẫu iPhone
          cao cấp nhất của Apple thu hút người dùng không chỉ nhờ kích thước
          siêu to, mà còn do những nâng cấp đặc biệt về camera, cấu hình.
        </p>
        <div className="interactive-num">
        <Image src={props.avatar} width= {40} height={40} />  
        <p>{props.author} | 218 Like  10 Comment</p>
        </div>
      </Col>
    </Row>
  );
}
