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
                    <a href="listArticle" >Xem thêm</a>
                    <Image src={ArrowIcon}></Image>
                </div>
                
              </div>
              
            
              <Row>
                
                <Col lg={4}>
                  <section className='articleCard'>
                  <ArticleCard title = "Nga tuyen bo chan FaceBook de chan tin gia" avatar={avatar} img={props.image[0]} author="ndminhduc" time="01/03/2020"/>
                </section>
                </Col>
                <Col lg={4}>
                  <section className='articleCard'>
                  
                  <ArticleCard title = "Nga tuyen bo chan FaceBook de chan tin gia" avatar={"https://photo2.tinhte.vn/data/avatars/l/252/252123.jpg?1571427085"} img={props.image[1]} author="MinhTriND" time="01/03/2020"/>
                </section>
                </Col>
                <Col lg={4}>
                  <section className='articleCard'>
                  
                  <ArticleCard title = "Nga tuyen bo chan FaceBook de chan tin gia" avatar={avatar} img={props.image[2]} author="ndminhduc" time="01/03/2020"/>
                </section>
                </Col>
              </Row>
            </div>
            </>
    );
}