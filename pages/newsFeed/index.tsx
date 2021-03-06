import Head from "next/head";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, ListGroup } from "react-bootstrap";
import { FollowerCard } from "../../components/FollowerCard";
import { Follower } from "../../components/Follower";
import Post from "../../components/post";
import NewsFeedBar from "../../components/newsFeedBar";
import { Header } from "../../components/Header";
import { useState, useEffect } from "react";

export default function Profile() {
  const [content, setContent] = useState("article"); 
  const [listPosts, setListPosts] = useState(null);

  useEffect(() => {
    fetch('/api/post')
    .then(response => response.json())
    .then(data => {
      let list = data[0].posts.concat(data[1].posts, data[2].posts);
      setListPosts(list);
    });
  }, []);
  function ProFileContent (){
    return( 
      <>
      <h3>DANH SÁCH BÀI VIẾT</h3>
        {listPosts&&listPosts.slice(0, 8).map((post) => {
          return <Post thumbnail={post.thumbnail || ""} title={post.title} author={post.author.name} avatar={post.author.avatar} />;
        })}
      </>
    );
  }
  return (
    <div>
      <Head>
        <title>Profile</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header userId="1" page="newsFeed"/>

      <div className="container2">
        <div style={{ color: "#999", padding: "20px 0px 30px 0px" }}>
          Home /{" "}
          <span style={{ color: "#333" }}>Bảng tin</span>
        </div>
  
        <NewsFeedBar />

        <Row>
          <Col lg={2}>
          </Col>
          <Col lg={8} className="dashboard-body">
            
            {ProFileContent()}
          </Col>
          <Col lg={2}>
          </Col>
        </Row>
      </div>
    </div>
  );
}
