import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import avatar from "../assets/avatar3.jpg";
import NextIcon from "../assets/icon_next.png";

export default function Post() {
  const arrs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div style={{ paddingBottom: "40px" }}>
      {arrs.map((val) => {
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
                src="/avatar.jpg"
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
                  src="https://p16-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/2c0a0193d3be45d78ed07e418fa41866_1649993981~tplv-dmt-logom:tos-useast5-p-0000-tx/c01361dd7f8f4a8182c8d0243b554d53.image?x-expires=1650272400&x-signature=mNMKzNRkFaqRPYiRElHcn%2BKbXFs%3D"
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
                VPHLinh
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
