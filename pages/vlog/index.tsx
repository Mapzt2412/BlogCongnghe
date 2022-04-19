import Head from 'next/head';
import React, { useState } from "react";
import { HotNews } from '../../components/HotNews'
import { Header } from '../../components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Container, Row } from 'react-bootstrap';

import { VideoCard } from "../../components/VideoCard";
import { Footer } from '../../components/Footer';

export default function Vlog (){
    return (
        <>
            <Head>
                <title>Vlog</title>
                <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'/>
            </Head>
            <Header userId ="1" page="vlog"/>
            <HotNews/>
            <div className="container" >
                <Row>
                    <Col lg={3}>
                        <VideoCard/>
                    </Col>
                    <Col lg={3}>
                    <VideoCard/>
                    </Col>
                    <Col lg={3}>
                    <VideoCard/>
                    </Col>
                    <Col lg={3}>
                    <VideoCard/>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3}>
                        <VideoCard/>
                    </Col>
                    <Col lg={3}>
                    <VideoCard/>
                    </Col>
                    <Col lg={3}>
                    <VideoCard/>
                    </Col>
                    <Col lg={3}>
                    <VideoCard/>
                    </Col>
                </Row>
            </div>
        <Footer/>
        </>
    );
}