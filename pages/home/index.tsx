import Head from 'next/head';
import React, { useState, useEffect } from "react";
import { HotNews } from '../../components/HotNews'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { ListArticleCard } from '../../components/ListArticleCard'
import { ControlledCarousel } from '../../components/Carousel'
import { TrendingCard } from '../../components/TrendingCard'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Container, Row } from 'react-bootstrap';
import Image from "next/image";
import xuhuong1 from "../../assets/thumbnail2.jpg"
import xuhuong from "../../assets/thumbnail.jpeg"

let thumbnailImage = ["https://photo2.tinhte.vn/data/attachment-files/2022/04/5939918_Cover_Axiom.jpg",
"https://photo2.tinhte.vn/data/attachment-files/2022/04/5939632_Cover_su-that.png",
"https://photo2.tinhte.vn/data/attachment-files/2022/04/5939934_cover_ssd_luu_y_khi_mua_tinhte.jpg",
"https://photo2.tinhte.vn/data/attachment-files/2022/04/5939849_Cover_Microsoft.jpg",
"https://photo2.tinhte.vn/data/attachment-files/2022/04/5939143_cover_pixel.jpg",
"https://photo2.tinhte.vn/data/attachment-files/2022/04/5935575_CV.jpg",
"https://photo2.tinhte.vn/data/attachment-files/2022/04/5935792_Apple_Bao_Mat_.jpg",
"https://photo2.tinhte.vn/data/attachment-files/2022/04/5935900_cover_fujikofujioa_large.jpg",
"https://photo2.tinhte.vn/data/attachment-files/2022/03/5926943_h1.jpg",]
export default function Home() {
  const [listArtical, setListArtical] = useState(null);
  const [listTrending, setListTrending] = useState(null);

  useEffect(() => {
    fetch('/api/post')
    .then(response => response.json())
    .then(data => {
      setListArtical(data);
      let listPosts = data[0].posts.concat(data[1].posts, data[2].posts);
      setListTrending(listPosts);
    });
  }, []);
  
  return (
    <div>
      
      <Head>
        <title>Trang chủ</title>
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'/>
      </Head>
      <Header userId ="0" page = "home"/>
      
      <HotNews/>
      <div className="container" >
        <Row>
          <Col lg={8}>
            <ControlledCarousel image={thumbnailImage.slice(0,5)}/>
            {listArtical&&listArtical.map((artical) => {
              return <ListArticleCard title={artical.topic} postsList={artical.posts} image={thumbnailImage.slice(0,3)}/>
            })}
          </Col>
          <Col lg={4} className="grid2">
            <div className='xuhuong grid2-frames'>
            <h4>Xu hướng</h4>
            <hr />
              {listTrending&&listTrending.slice(0, 4).map((post) => {
                return <TrendingCard title={post.title} image={post.thumbnail}/>
              })}
              <div className='more'>
                <a href="#">Xem thêm</a>
              </div>
            </div>
            <div className='taghot grid2-frames'>
              <h4>TAG NỔI BẬT</h4>
              <hr />
            </div>
            <div className='article-related grid2-frames'>
              <h4>BÀI VIẾT LIÊN QUAN</h4>
              <hr />
              <ol>  
                {listTrending&&listTrending.slice(0, 5).map((post) => {
                  return <li>{ post.title }</li> 
                })}
              </ol>  
            </div>
          </Col>
            
            
        </Row>
      </div>
      
      <Footer/>
    </div>
    
  );
}