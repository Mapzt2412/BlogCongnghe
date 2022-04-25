import { Row, Col, Button, NavLink} from "react-bootstrap";
import Marquee from "react-fast-marquee";
import Style from "../styles/HotNews.module.css"
import Image from "next/image";
import Icon from "../assets/icon_warning.png"
import { useEffect,useState } from "react";
export const HotNews = () =>{
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
        <>
            <Row className={Style.ticker}>
                <Col lg={1} className={Style.title}>
                    <h6 className={Style.button}>TIN NÓNG
                    </h6>
                    
                </Col>
                <Col lg={11}className={Style.news} style={{margin:"auto"}}>
                    <Marquee className={Style.newscontent}>
                        {listPosts&&listPosts.slice(0, 8).map((post) => {
                            return (<>
                            <Image
                            className={Style.iconWaring}
                            src={Icon}
                            width={16}
                            height={20}
                            >
                            </Image>
                        <NavLink className={Style.link} style={{color:"Black"}}href="listArticleDetail ">
                            {post.title}
                            </NavLink>
                            </>);

                        })}
                        
                    </Marquee>
                </Col>
            </Row>
 
        </>
    )
}