import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import avatar from "../assets/avatar3.jpg";
import NextIcon from "../assets/icon_next.png";

export default function NewsFeedBar() {
  const [listStory, setListStory] = useState(null);

  useEffect(() => {
    fetch('/api/shortVideo')
    .then(response => response.json())
    .then(data => {
      setListStory(data);
    });
  }, []);
  console.log(listStory);

  return (
    <div style={{ paddingBottom: "40px" }}>
      {listStory&&listStory.slice(0, 9).map((val) => {
        return (
          <Link href="/shortvideo">
            <div
              style={{
                width: "11%",
                height: "220px",
                display: "inline-block",
                padding: "0px 7px",
                position: "relative",
              }}
            >
              <img
                className="story-avatar"
                src={val.avatar}
                width="40px"
                height="40px"
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "15px",
                  borderRadius: "50%",
                  border: "1px solid white",
                  zIndex: "100"
                }}
              />
              <div style={{ width: "100%", height: "100%", borderRadius: "11px", overflow: "hidden", position: "relative" }}>
                <img
                  src={val.thumbnail}
                  alt="Post Image"
                  width="100%"
                  height="100%"
                />
                <div
                  className="storyHover"
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: "0",
                    left: "0",
                    zIndex: "99",
                    backgroundColor: "#141414",
                    opacity: "0.5"
                  }}
                ></div>
              </div>
              <div
                className="story-name"
                style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "15px",
                  color: "white",
                  fontSize: "13px",
                  fontWeight: "500",
                  zIndex: "100"
                }}
              >
                {val.author}
              </div>
            </div>
          </Link>
        );
      })}
      <div style={{ padding: "25px", textAlign: "right" }}>
        <Image src={NextIcon} width="40" height="15" />
      </div>
    </div>
  );
}
