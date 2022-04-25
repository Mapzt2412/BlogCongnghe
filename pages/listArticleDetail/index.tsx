import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Header } from "../../components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Breadcrumb } from "react-bootstrap";
import Post from "../../components/post";
import HotComment from "../../components/HotComment";
import { Footer } from "../../components/Footer";
import avatar from "/assets/avatar3.jpg";
import Thumbnail2 from "/assets/thumbnail2.jpg";
import LikeShareComment from "../../components/LikeShareComment";

export default function listArticleDetail() {
  return (
    <div>
      <Head>
        <title>Trang chi tiết bài viết</title>
      </Head>
      <Header userId="1" />
      <div className="container3">
        <div style={{ color: "#999", padding: "20px 0px 30px 0px" }}>
          Home / Tài khoản cá nhân /{" "}
          <span style={{ color: "#333" }}>
            Đây là các mẫu ốp lưng Pela thân thiện với môi trường dành cho dòng
            Google Pixel 6
          </span>
        </div>

        <h3 style={{ fontSize: "27px" }}>
          Đây là các mẫu ốp lưng Pela thân thiện với môi trường dành cho dòng
          Google Pixel 6
        </h3>
        <div className="interactive-num">

        <Link href='profile'>
          <Image src={avatar} width={30} height={30}></Image>
        </Link>
        <Link href='profile'>
          <p>_vphlinh</p> 
        </Link>
          
          <Button
            variant="primary"
            style={{
              height: "20px",
              margin: "auto 10px",
              fontSize: "10px",
              borderRadius: "0px",
              lineHeight: "4px",
            }}
          >
            + Theo dõi
          </Button>
          <p>
            Ngày đăng: <span style={{ color: "#999" }}>17/4/2022 </span>
            &nbsp;&nbsp;<span style={{ color: "#BBB" }}>|</span>&nbsp;&nbsp;
            Bình luận: <span style={{ color: "#999" }}>10</span>
          </p>
        </div>
        <div style={{ margin: "25px 0px 15px 0px" }}>
          <Image src={Thumbnail2} />
        </div>
        <p align="justify">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32. The standard chunk of Lorem Ipsum used since the
          1500s is reproduced below for those interested. Sections 1.10.32 and
          1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
          reproduced in their exact original form, accompanied by English
          versions from the 1914 translation by H. Rackham.
        </p>
        <p align="justify">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </p>

        <div className="taghot grid2-frames" style={{ marginTop: "30px"}}>
          <h4>TAG NỔI BẬT</h4>
          <hr />
          <div>
            <span
              style={{
                marginRight: "20px",
                color: "#17a5e9",
                fontWeight: "500"
              }}
            >
              #IOS
            </span>
            <span
              style={{
                marginRight: "20px",
                color: "#17a5e9",
                fontWeight: "500"
              }}
            >
              #Android
            </span>
            <span
              style={{
                marginRight: "20px",
                color: "#17a5e9",
                fontWeight: "500"
              }}
            >
              #Javascript
            </span>
            <span
              style={{
                marginRight: "20px",
                color: "#17a5e9",
                fontWeight: "500"
              }}
            >
              #ReactJS
            </span>
          </div>
        </div>

        <LikeShareComment />

        <div className="article-related" style={{ padding: "20px 0 20px 0" }}>
          <h3 style={{ fontSize: "22px", fontWeight: "500" }}>BÀI VIẾT LIÊN QUAN</h3>
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
  );
}
