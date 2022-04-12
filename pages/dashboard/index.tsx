import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, ListGroup } from "react-bootstrap";

import Post from "../../components/post";
import { Header } from "../../components/Header";

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header userId="1"/>

      <div className="container2">
        <div style={{ color: "#999", padding: "20px 0px 30px 0px" }}>
          Home / Tài khoản cá nhân /{" "}
          <span style={{ color: "#333" }}>Quản lý tài khoản</span>
        </div>
        <Row>
          <Col lg={3} className="dashboard-menu">
            <ul>
              <li className="head head-active">Quản lí nội dung</li>
              <li>
                <ul>
                  <li>Bài viết nháp</li>
                  <li className="item-active">Bài viết đã đăng</li>
                  <li>Bảng tin đã đăng</li>
                </ul>
              </li>
              <li className="head">Quản lí tài khoản</li>
              <li>
                <ul>
                  <li>Thông tin cá nhân</li>
                  <li>Đổi mật khẩu</li>
                  <li>Người theo dõi</li>
                  <li>Người đang theo dõi</li>
                  <li>Bookmark</li>
                </ul>
              </li>
              <li className="head">Quản lí cấp bậc</li>
              <li>
                <ul>
                  <li>Trạng thái</li>
                </ul>
              </li>
            </ul>
          </Col>
          <Col lg={9} className="dashboard-body">
            <h3>DANH SÁCH BÀI VIẾT ĐÃ ĐĂNG</h3>
            <Post />
            <Post />
            <Post />
            <Post />
          </Col>
        </Row>
      </div>
    </div>
  );
}
