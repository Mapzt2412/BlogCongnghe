import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import xuhuong1 from "../assets/thumbnail2.jpg"
import xuhuong from "../assets/thumbnail.jpeg"

export const TrendingCard = (props) => {
    return (
        <Row>
        <Col lg={4}>
          <Image
            className="d-block w-100"
            src= {props.image}
            alt="Xuhuong1" 
            width={170}
            height={100}
          />
        </Col>
          <Col lg={8}>
            <p>{props.title}</p>
          </Col>
      </Row>
    );
}