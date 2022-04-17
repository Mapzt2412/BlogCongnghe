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
                  src="https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/088555cc430f4950915516e6a20f0678_1646733324?x-expires=1650229200&x-signature=b%2FgNgyEdlBXpGykIHhgZ5uQLJv0%3D"
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
