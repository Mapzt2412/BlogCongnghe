import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import xuhuong1 from "../assets/thumbnail2.jpg"
import xuhuong from "../assets/thumbnail.jpeg"

export const TrendingCard = () => {
    return (
        <Row>
        <Col lg={4}>
          <Image
            className="d-block w-100"
            src= {xuhuong1}
            alt="Xuhuong1" 
            width={170}
            height={100}
          />
        </Col>
          <Col lg={8}>
            <p>Trong tương lai mô hình kinh doanh sẽ chuyển sang online</p>
          </Col>
      </Row>
    );
}