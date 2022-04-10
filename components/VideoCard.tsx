import Image from "next/image";
import Link from "next/link";
import thumbnail from "../assets/thumbnail1.jpeg"
import avatar from "../assets/avatar.jpg"
import { useEffect, useState } from "react";

export const VideoCard = () =>{
    let classname = "VideoCard";
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
        setTime(0);
        setPreview(false);
    }
    console.log(counter - time)
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
            console.log(classname)
            
            return (
                <>
                    <video  
                        className="short_video_player"
                        loop
                        autoPlay={true}
                        src="https://v16-webapp.tiktok.com/a3fdc54ff109254d0a02fc3937c74e00/62517872/video/tos/useast2a/tos-useast2a-pve-0037-aiso/5c755156f26240d3a8b3bffae96813ed/?a=1988&br=2846&bt=1423&cd=0%7C0%7C0%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=6&er=&ft=eXd.6Hk_Myq8ZuT1Bwe2NHJQml7Gb&l=20220409061323010245245003269BFC6C&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=11&rc=M29obzY6ZjN3PDMzZjgzM0ApOmRlOzVnaGQ0NzZpN2ZlNmdxZmBxcjRnYi1gLS1kL2Nzcy40LV4tL2E2MWFgYjMuMzA6Yw%3D%3D&vl=&vr="
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