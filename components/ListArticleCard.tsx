import { Col, Row } from "react-bootstrap";
import { ArticleCard } from '../components/ArticleCard'
import xuhuong1 from "../assets/thumbnail2.jpg"
import xuhuong from "../assets/thumbnail.jpeg"
import avatar from "../assets/avatar1.jpg"
import Image from "next/image";
import ArrowIcon from "../assets/icon_next.png"
export const ListArticleCard = (props) => {
    return (
        <>
        <div className='list-card'>
              <div className='topic'>
                <div className='arrowLine-topic'>
                  <div className='arrowLine'>
                      <p>{props.title}</p>
                    </div>
                    <div className='triangle_left'>
                  </div>
                </div>
                <div className="more"> 
                    <a href="#" >Xem thêm</a>
                    <Image src={ArrowIcon}></Image>
                </div>
                
              </div>
              
            
              <Row>
                
                <Col lg={4}>
                  <section className='articleCard'>
                  
                  <ArticleCard title = "Nga tuyen bo chan FaceBook de chan tin gia" avatar={avatar} img={xuhuong} author="ndminhduc" time="01/03/2020"/>
                </section>
                </Col>
                <Col lg={4}>
                  <section className='articleCard'>
                  
                  <ArticleCard title = "Nga tuyen bo chan FaceBook de chan tin gia" avatar={avatar} img={xuhuong} author="ndminhduc" time="01/03/2020"/>
                </section>
                </Col>
                <Col lg={4}>
                  <section className='articleCard'>
                  
                  <ArticleCard title = "Nga tuyen bo chan FaceBook de chan tin gia" avatar={avatar} img={xuhuong} author="ndminhduc" time="01/03/2020"/>
                </section>
                </Col>
              </Row>
            </div>
            </>
    );
}