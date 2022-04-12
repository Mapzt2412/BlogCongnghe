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
                        src="https://v16-webapp.tiktok.com/600ea70ed0d1aeef887b119df274eeb4/625499d2/video/tos/useast2a/tos-useast2a-pve-0037-aiso/af2e3745105a4fb183a7f6bffb9613db/?a=1988&br=1328&bt=664&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8Z1Hdhwe2NZGQml7Gb&l=202204111511320102440552271927E597&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amVzPDQ6Znd4OzMzZjgzM0ApNTk1NmY3NTtmNzZnaTw2aWcyb3NlcjRfc3BgLS1kL2NzczJiNTNjYDYyMV8yYGNfLjE6Yw%3D%3D&vl=&vr="
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