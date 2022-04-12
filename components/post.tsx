import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";

export default function Post() {
  return (
    <Row className="post">
      <Col lg={4}>
        <Image src="/postImage.png" alt="Post Image" layout="intrinsic" width={720} height={480} />
      </Col>
      <Col lg={8}>
        <h4>Đây là mẫu điện thoại mới của Iphone năm 2022</h4>
        <p>
          iPhone Pro Max luôn là tâm điểm trong mỗi lần xuất hiện. Mẫu iPhone
          cao cấp nhất của Apple thu hút người dùng không chỉ nhờ kích thước
          siêu to, mà còn do những nâng cấp đặc biệt về camera, cấu hình.
        </p>
        <div className="interactive-num">_vphlinh | 218 Like  10 Comment</div>
      </Col>
    </Row>
  );
}
