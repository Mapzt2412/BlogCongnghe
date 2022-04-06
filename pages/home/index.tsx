import Head from 'next/head';
import React, { useState } from "react";
import { HotNews } from '../../components/HotNews'
import { Header } from '../../components/Header'
import { ListArticleCard } from '../../components/ListArticleCard'
import { ControlledCarousel } from '../../components/Carousel'
import { TrendingCard } from '../../components/TrendingCard'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Container, Row } from 'react-bootstrap';
import Image from "next/image";
import xuhuong1 from "../../assets/thumbnail2.jpg"
import xuhuong from "../../assets/thumbnail.jpeg"
export default function Home() {
  
  return (
    <div>
      
      <Head>
        <title>Trang chủ</title>
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'/>
      </Head>
      <Header userId ="1"/>
      <HotNews/>
      <div className="container" >
        <Row>
          <Col lg={8}>
            <ControlledCarousel/>
              <ListArticleCard title="TECHNOLOGY"/>
              <ListArticleCard title="PROGRAMMING"/>
              <ListArticleCard title="BLOCKCHAIN"/>
          </Col>
          <Col lg={4} className="grid2">
            <div className='xuhuong grid2-frames'>
            <h4>Xu hướng</h4>
            <hr />
              <TrendingCard/>
              <TrendingCard/>
              <TrendingCard/>
              <TrendingCard/>
              <TrendingCard/>
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
              <p><a href="#">1. Người dùng bị khóa FaceBook nếu không bật tính năng bảo mật</a></p>
              <p><a href="#">2. Người dùng bị khóa FaceBook nếu không bật tính năng bảo mật</a></p>
              <p><a href="#">3. Người dùng bị khóa FaceBook nếu không bật tính năng bảo mật</a></p>
              <p><a href="#">4. Người dùng bị khóa FaceBook nếu không bật tính năng bảo mật</a></p>
              <p><a href="#">5. Người dùng bị khóa FaceBook nếu không bật tính năng bảo mật</a></p>
            </div>
          </Col>
            
            
        </Row>
      </div>
      
      
    </div>
  );
}