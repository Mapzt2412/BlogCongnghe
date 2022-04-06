import { Row, Col, Button, NavLink} from "react-bootstrap";
import Marquee from "react-fast-marquee";
import Style from "../styles/HotNews.module.css"
export const HotNews = () =>{
    return (
        <>
            <Row className={Style.ticker}>
                <Col lg={1} className={Style.title}>
                    <h6 className={Style.button}>TIN NÓNG
                    </h6>
                    
                </Col>
                <Col className={Style.news} style={{margin:"auto"}}>
                    <Marquee className={Style.newscontent}>
                        <NavLink className={Style.link} style={{color:"Black"}}href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</NavLink>
                    </Marquee>
                </Col>
            </Row>
 
        </>
    )
}