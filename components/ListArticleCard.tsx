import { Col, Row } from "react-bootstrap";
import { ArticleCard } from '../components/ArticleCard'
import xuhuong1 from "../assets/thumbnail2.jpg"
import xuhuong from "../assets/thumbnail.jpeg"
import avatar from "../assets/avatar1.jpg"
import Image from "next/image";
import ArrowIcon from "../assets/icon_next.png"
export const ListArticleCard = (props) => {
  console.log(props);
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
                {props.postsList&&props.postsList.slice(0, 3).map((post) => {
                  return <Col lg={4}>
                    <section className='articleCard'>
                    <ArticleCard title ={post.title} avatar={post.author.avatar} img={post.thumbnail} author={post.author.name} time={post.date}/>
                  </section>
                  </Col>
                })}
              </Row>
            </div>
            </>
    );
}