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
                        src="https://v16-webapp.tiktok.com/30bb378c5f141d50690106d5e75f970e/6263d522/video/tos/useast2a/tos-useast2a-pve-0037-aiso/0d40cd3b1c9d48a2b16a5cfa7cb008b5/?a=1988&br=6628&bt=3314&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8ZHrONwe2NPWF2l7Gb&l=202204230428330102450050981A8DD067&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anhzbzc6Zmc1PDMzZjgzM0ApPDs6aDw6N2U1NzY8NjM2ZWdvc3FqcjQwZGVgLS1kL2NzczYvNjUyX2A2YDFjNF82L186Yw%3D%3D&vl=&vr="
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