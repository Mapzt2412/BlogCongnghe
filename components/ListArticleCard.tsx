import { Col, Row } from "react-bootstrap";
import { ArticleCard } from '../components/ArticleCard'
import xuhuong1 from "../assets/thumbnail2.jpg"
import xuhuong from "../assets/thumbnail.jpeg"
export const ListArticleCard = (props) => {
    return (
        <>
        <div className='list-card'>
              <div className='topic'>
                <div className='arrowLine-title'>
                  <div className='arrowLine'>
                      <p>{props.title}</p>
                    </div>
                    <div className='triangle_left'>
                  </div>
                </div>
                <div className="more"> 
                    <a href="#" >Xem thêm</a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                </div>
                
              </div>
              
            
              <Row>
                
                <Col lg={4}>
                  <section className='articleCard'>
                  
                  <ArticleCard title = "Nga tuyen bo chan FaceBook de chan tin gia" img={xuhuong} author="ndminhduc" time="01/03/2020"/>
                </section>
                </Col>
                <Col lg={4}>
                  <section className='articleCard'>
                  
                  <ArticleCard title = "Nga tuyen bo chan FaceBook de chan tin gia" img={xuhuong} author="ndminhduc" time="01/03/2020"/>
                </section>
                </Col>
                <Col lg={4}>
                  <section className='articleCard'>
                  
                  <ArticleCard title = "Nga tuyen bo chan FaceBook de chan tin gia" img={xuhuong} author="ndminhduc" time="01/03/2020"/>
                </section>
                </Col>
              </Row>
            </div>
            </>
    );
}