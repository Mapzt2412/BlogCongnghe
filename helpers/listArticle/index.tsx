import Head from 'next/head';
import React, { useEffect, useState } from "react";
import { Header } from '../../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Breadcrumb } from 'react-bootstrap';
import Post from "../../components/post";
import HotComment from "../../components/HotComment";
import { Footer } from '../../components/Footer'

export default function listArticle () {
    const [listPosts, setListPosts] = useState(null);

  useEffect(() => {
    fetch('/api/post')
    .then(response => response.json())
    .then(data => {
      let list = data[0].posts.concat(data[1].posts, data[2].posts);
      setListPosts(list);
    });
  }, []);
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
                        {listPosts&&listPosts.slice(0, 8).map((post) => {
                        return <Post thumbnail={post.thumbnail || ""} title={post.title} author={post.author.name} avatar={post.author.avatar} />;
                        })}
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
