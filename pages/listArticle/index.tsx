import Head from 'next/head';
import React, { useState } from "react";
import { Header } from '../../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Breadcrumb } from 'react-bootstrap';
import Post from "../../components/post";
import HotComment from "../../components/HotComment";
import { Footer } from '../../components/Footer'

export default function listArticle () {
    return (
        <div>
            <Head>
                <title>Trang danh sách bài viết</title>
            </Head>
            <Header userId ="1"/>
            <div className='container'>
                <Breadcrumb style={{paddingTop: "20px"}}>
                        <Breadcrumb.Item href="#">Trang chủ</Breadcrumb.Item>
                        <Breadcrumb.Item active>Technology</Breadcrumb.Item>
                </Breadcrumb>

                <Row>
                    <Col lg={8} className="dashboard-body">
                        <h3>TECHNOLOGY</h3>
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                    </Col>
                    <Col lg={4} className="dashboard-body">
                        <div className='taghot grid2-frames'>
                            <h3>TAG NỔI BẬT</h3>
                        </div>
                        <div className='article-related grid2-frames'>
                            <h3>BÌNH LUẬN NỔI BẬT</h3>
                            <HotComment />
                            <HotComment />
                            <HotComment />
                            <HotComment />
                        </div>
                    </Col>
                </Row>
            </div>

            <Footer/>
        </div>
    )
}
