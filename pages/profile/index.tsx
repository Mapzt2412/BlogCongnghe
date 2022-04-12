import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, ListGroup } from "react-bootstrap";

import Post from "../../components/post";

export default function Profile() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Profile</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        style={{ width: "100%", height: "200px", backgroundColor: "#73e6ff" }}
      ></div>

      <div className="container2">
        <div style={{ color: "#999", padding: "20px 0px 30px 0px" }}>
          Home / Tài khoản cá nhân /{" "}
          <span style={{ color: "#333" }}>Quản lý tài khoản</span>
        </div>

        <div className="profile-info">
          <div className="avatar" style={{ textAlign: "center" }}>
            <img
              src="/avatar.jpg"
              width="120px"
              height="120px"
              style={{ borderRadius: "50%" }}
            />
          </div>
          <h3
            style={{
              fontSize: "21px",
              fontWeight: "600",
              margin: "0",
              textAlign: "center",
              padding: "20px 0 0 0",
            }}
          >
            VÕ PHƯƠNG HOÀI LINH
          </h3>
          <div style={{ color: "#ffe200", fontSize: "17px", textAlign: "center" }}>
            star star star star star
          </div>
          <div className="contact" style={{ padding: "10px 0", textAlign: "center", color: "#8a8a8a" }}>
            <span style={{ padding: "0px 40px" }}>Email: vphlin1994@gmail.com</span>
            <span>Điện thoại: 090 123 4567</span>
          </div>
          <div className="activity">
            <span>Email: vphlin1994@gmail.com</span>
            <span>|</span>
            <span>Điện thoại: 090 123 4567</span>
            <span>|</span>
            <span>Email: vphlin1994@gmail.com</span>
            <span>|</span>
            <span>Điện thoại: 090 123 4567</span>
          </div>
        </div>

        <Row>
          <Col lg={3} className="profile-menu">
            <ul>
              <li className="active">Danh sách bài viết</li>
              <li>Người theo dõi</li>
              <li>Người đang theo dõi</li>
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
