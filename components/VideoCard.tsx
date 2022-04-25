import Image from "next/image";
import Link from "next/link";
import thumbnail from "../assets/thumbnail1.jpeg"
import avatar from "../assets/avatar.jpg"
import { useEffect, useState } from "react";
let classname = "VideoCard";
export const VideoCard = () =>{
    
    const [preview, setPreview] = useState(false);
    const [counter, setCounter] = useState(0);
    const [time, setTime] = useState(0); 
    useEffect(() => {
        const timeout = setTimeout(() => {
            setCounter(counter + 1);
        }, 1000);
     }, [counter]);
    const playPreview = (e:any) =>{
        setTime(counter);
        setPreview(true);
    }
    const endPreview = (e:any) =>{
        classname = "VideoCard";
        setTime(0);
        setPreview(false);
    }
    const returnThumbnail = () =>{
        if(preview== false || (counter - time) < 3){
            return (
                <>
                    <Image src={thumbnail}></Image>
                    
                </>
            );
        }
        else{
            classname = classname + " VideoCardHover";
            return (
                <>
                    <video  
                        className="short_video_player"
                        loop
                        autoPlay={true}
                        src="https://v16-webapp.tiktok.com/0f965934b701c80abaae8a0881787cf6/6266a74f/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/4581c7f83c854bca934d342c3308020e/?a=1988&br=2396&bt=1198&cd=0%7C0%7C0%7C0&ch=0&cr=0&cs=0&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8ZjcN4we2NecQml7Gb&l=202204250747450102452441951805C35C&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2ZyaDY6ZnRtOzMzZjgzM0ApOThnMzplN2Q2N2ZnPGRlZGdrbF5hcjQwZTRgLS1kL2Nzcy5iLy40MjU1NF8uNDE1LjE6Yw%3D%3D&vl=&vr="
                        >
                    </video>
                </>
            );
        }
    }
    return (
        <>
        <div className={classname} onMouseOut={(e) => endPreview(e)} onMouseEnter={(e) => playPreview(e)}>
            <div className="thumbnail" >
                {returnThumbnail()}
            </div>
            <div className="VideoDetail">
                <div className="AvatarAuthor">
                    <Link href={"#"}>
                        <Image src={avatar} className="avatar" width={72} height={10}/>
                    </Link>
                </div>
                
                <div className="detail">
                    <p className="title">
                        <Link href={"#"}>Vô cùng nhiều tài nguyên ... Tại sao Châu Phi vẫn nghèo</Link>
                    </p>
                        
                    <div className="VideoAuthor">
                        <Link href={"#"}>Clever Programmer</Link>
                    </div>
                    <div className="View_Time">
                        <p>65N người xem • 2 giờ trước</p>
                    </div>
                </div>
            </div>
            
        </div>
        </>
    );
}