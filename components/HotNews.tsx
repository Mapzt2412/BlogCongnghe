import { Row, Col, Button, NavLink} from "react-bootstrap";
import Marquee from "react-fast-marquee";
import Style from "../styles/HotNews.module.css"
import Image from "next/image";
import Icon from "../assets/icon_warning.png"
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
                        <Image
                            className={Style.iconWaring}
                            src={Icon}
                            width={16}
                            height={20}
                            >
                            </Image>
                        <NavLink className={Style.link} style={{color:"Black"}}href="#">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            </NavLink>
                            <Image
                            className={Style.iconWaring}
                            src={Icon}
                            width={16}
                            height={20}
                            >
                            </Image>
                        <NavLink className={Style.link} style={{color:"Black"}}href="#">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            </NavLink>
                    </Marquee>
                </Col>
            </Row>
 
        </>
    )
}