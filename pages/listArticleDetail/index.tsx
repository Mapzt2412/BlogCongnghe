import Head from 'next/head';
import Image from "next/image";
import React, { useState } from "react";
import { Header } from '../../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Breadcrumb } from 'react-bootstrap';
import Post from "../../components/post";
import HotComment from "../../components/HotComment";
import { Footer } from '../../components/Footer'
import avatar from "/assets/avatar3.jpg";
import Thumbnail2 from "/assets/thumbnail2.jpg";
import LikeShareComment from "../../components/LikeShareComment";

export default function listArticleDetail () {
    return (
        <div>
            <Head>
                <title>Trang chi tiết bài viết</title>
            </Head>
            <Header userId ="1"/>
            <div className='container3'>
                <Breadcrumb style={{paddingTop: "20px"}}>
                        <Breadcrumb.Item href="#">Trang chủ</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">Technology</Breadcrumb.Item>
                        <Breadcrumb.Item active>Đây là các mẫu ốp lưng Pela thân thiện với môi trường dành cho dòng Google Pixel 6</Breadcrumb.Item>
                </Breadcrumb>

                <h3>Đây là các mẫu ốp lưng Pela thân thiện với môi trường dành cho dòng Google Pixel 6</h3>
                <div className="interactive-num">
                    <Image src={avatar} width= {40} height={40}></Image>  
                    <p>_vphlinh | 218 Like  10 Comment</p>
                </div>
                <Image src={Thumbnail2}></Image>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>

                <div className='taghot grid2-frames'>
                    <h4>TAG NỔI BẬT</h4>
                    <hr />
                </div>

                <LikeShareComment/>

                <div className='article-related' style={{padding: "20px 0 20px 0"}}>
                    <h4>BÀI VIẾT LIÊN QUAN</h4>
                    <hr />
                    <ol>  
                        <li>Người dùng bị khóa FaceBook nếu ông bật tính năng bảo mật</li>  
                        <li>Người dùng bị khóa FaceBook nếu ông bật tính năng bảo mật</li>  
                        <li>Người dùng bị khóa FaceBook nếu ông bật tính năng bảo mật</li>  
                        <li>Người dùng bị khóa FaceBook nếu ông bật tính năng bảo mật</li>  
                        <li>Người dùng bị khóa FaceBook nếu ông bật tính năng bảo mật</li>
                    </ol>  
                </div>
            </div>

        
        </div>
    )
}