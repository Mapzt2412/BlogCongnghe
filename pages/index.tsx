import Head from 'next/head';
import React, { useState } from "react";
import { HotNews } from '../components/HotNews'
import { Header } from '../components/Header'
import { ControlledCarousel } from '../components/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Container, Row } from 'react-bootstrap';


export default function Home() {
  
  return (
    <div>
      
      <Head>
        <title>Trang chủ</title>
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'/>
      </Head>
      <Header />
      <HotNews/>
      <div className="container" >
        <Row>
          <Col lg={8}>
            <ControlledCarousel/>
          </Col>
          <Col lg={4}>
            
          </Col>
        </Row>
      </div>
      
      
    </div>
  );
}