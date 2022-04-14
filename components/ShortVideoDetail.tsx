import { useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Value } from "sass";
import Image from "next/image";
import avatar from "../assets/avatar.jpg"

export const ShortVideoDetail = (props) =>{
    const videoRef = useRef(null);
    const volumeRef = useRef(null);
    const [play, setPlay] = useState(true);
    const [volume, setVolume1] = useState(50);
    const onVideoPress = () => {
        if(play === false) {
            videoRef.current.play();
            setPlay(true);
        }
        else{
            videoRef.current.pause();
            setPlay(false);
        }
        
    };
    const setVolume = (e:any) =>{
        videoRef.current.volume = volumeRef.current.value/100;
        setVolume1(volumeRef.current.value/100)
    }
    const setMute = (e:any) =>{
        if (videoRef.current.volume ==0){
            videoRef.current.volume = 0.5;
            setVolume1(0.5);
        }
        else{
            videoRef.current.volume = 0;
            setVolume1(0)
        }   
        
    }
    const setIcon = (): JSX.Element => {
        if(volume == 0){
            return(
                <>
                    <path fill-rule={"evenodd"} clipRule={"evenodd"} d="M21 16.9118C21 15.2513 20.8942 15.0909 20.709 15.0221C20.5238 14.9763 20.3122 14.9992 20.1799 15.1138L15.0741 19.5258H11.4762C11.2116 19.5258 11 19.7092 11 19.9384V28.084C11 28.3132 11.2116 28.4965 11.4762 28.4965H15.0741L20.1799 32.8862C20.3122 33.0008 20.5238 33.0237 20.709 32.9779C20.8942 32.9091 21 32.7487 21 32.5882V16.9118Z"
                        fill="white"
                        >
                        </path>
                        <path fill-rule={"evenodd"} clipRule={"evenodd"} d="M35.098 18.9489C34.5998 18.4508 33.7921 18.4508 33.2939 18.949L30.1368 22.1061L26.9797 18.949C26.4815 18.4508 25.6738 18.4508 25.1756 18.9489C24.6775 19.4471 24.6775 20.2548 25.1756 20.753L28.3327 23.9101L25.1757 27.0672C24.6775 27.5654 24.6775 28.3731 25.1757 28.8713C25.6738 29.3694 26.4815 29.3694 26.9797 28.8713L30.1368 25.7142L33.2939 28.8713C33.7921 29.3694 34.5998 29.3694 35.0979 28.8713C35.5961 28.3731 35.5961 27.5654 35.0979 27.0672L31.9409 23.9101L35.098 20.753C35.5962 20.2548 35.5962 19.4471 35.098 18.9489Z"
                        fill="white"
                        >
                        </path>
                </>
            );
        }else{
            return (
                <>
                    <path fill-rule={"evenodd"} clipRule={"evenodd"} d="M21 16.9118C21 15.2513 20.8942 15.0909 20.709 15.0221C20.5238 14.9763 20.3122 14.9992 20.1799 15.1138L15.0741 19.5258H11.4762C11.2116 19.5258 11 19.7092 11 19.9384V28.084C11 28.3132 11.2116 28.4965 11.4762 28.4965H15.0741L20.1799 32.8862C20.3122 33.0008 20.5238 33.0237 20.709 32.9779C20.8942 32.9091 21 32.7487 21 32.5882V16.9118Z"
                        fill="white"
                        >
                        </path>
                    <path d="M30.6653 15C32.7348 17.2304 34.0001 20.2174 34.0001 23.5C34.0001 26.7826 32.7348 29.7696 30.6653 32" stroke="white" stroke-width="2.5" stroke-linecap="round"></path>
                    <path d="M26.8799 17.8833C28.1994 19.381 28.9999 21.347 28.9999 23.5C28.9999 25.653 28.1994 27.6191 26.8799 29.1168" stroke="white" stroke-width="2.5" stroke-linecap="round"></path>
                </>
            );
        }
        
    }
    const setIconPlay = () =>{
        if(play == false){
            return(
                <>
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi bi-play-fill PlayIcon" viewBox="0 0 16 16">
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
            </svg>  
            </>
            );
        }
    }
    const newLocal = "circle";
    return (
        <>
        
        <div className="ShortVideoPlayer">
            <div className="VideoContainer">
                {setIconPlay()}
                <div className="ShortVideoBackGround" ></div>
                <div className="VideoWrapper">
                </div>
                <div className="VideoPlayer">
                    <video  
                        className="short_video_player"
                        loop
                        autoPlay
                        onClick={onVideoPress}
                        ref={videoRef}
                        src="https://v16-webapp.tiktok.com/cbba98386aa26b6f023aba0cbe7b4524/62500a38/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/2d292ad9829048749c38e1042ad8a717/?a=1988&br=1392&bt=696&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8Z-QXGwe2NIfnml7Gb&l=2022040804105201024506219213029570&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzU2bzk6ZmVqOzMzZjczM0ApaTU3NzQ8O2U2NzU8Zjc8N2cvMm1ecjQwa2FgLS1kMWNzcy4zYi0uYl40YzUvLjEwX2I6Yw%3D%3D&vl=&vr="
                        >
                    </video>
                </div>
                <button data-e2e="arrow-left" className="ButtonBasicButtonContainerLeft"><svg width="26" height="26" viewBox="0 0 48 48" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M34.4142 22.5858L18.1213 6.29289C17.7308 5.90237 17.0976 5.90237 16.7071 6.29289L15.2929 7.70711C14.9024 8.09763 14.9024 8.7308 15.2929 9.12132L30.1716 24L15.2929 38.8787C14.9024 39.2692 14.9024 39.9024 15.2929 40.2929L16.7071 41.7071C17.0976 42.0976 17.7308 42.0976 18.1213 41.7071L34.4142 25.4142C35.1953 24.6332 35.1953 23.3668 34.4142 22.5858Z"></path></svg>
                </button>
                <button data-e2e="arrow-right" className="ButtonBasicButtonContainerRight"><svg width="26" height="26" viewBox="0 0 48 48" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M34.4142 22.5858L18.1213 6.29289C17.7308 5.90237 17.0976 5.90237 16.7071 6.29289L15.2929 7.70711C14.9024 8.09763 14.9024 8.7308 15.2929 9.12132L30.1716 24L15.2929 38.8787C14.9024 39.2692 14.9024 39.9024 15.2929 40.2929L16.7071 41.7071C17.0976 42.0976 17.7308 42.0976 18.1213 41.7071L34.4142 25.4142C35.1953 24.6332 35.1953 23.3668 34.4142 22.5858Z"></path></svg>
                </button>
                <div data-e2e="browse-report" className="DivReportText">
                Báo cáo</div>
            <div className="VoiceControlContainer ">
                
                <div className="VolumeControlContainer show " >
                    <form method="post" action=""  name="volumeForm">
                        <input type="range" className="form-range" min="0" max="100" step="1" id="customRange3" ref={volumeRef} onChange={(e) => setVolume(e)}  style={{transform: "rotate(-90deg)"}}/> 
                    </form>
                    
                </div>
                
                <Button className="ButtonVoiceControl" onClick={(e) =>setMute(e)}>
                    <svg width={40} height={40} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx={24} cy={24} fill="000" fillOpacity={1}></circle>
                        {setIcon()}
                    </svg>
                </Button>
                
            </div>
        </div>
            <div className="ContentContainer">
                <div className="DivInforContainer">
                    <a data-e2e="browse-user-avatar" className="tiktok-3izs7l ec62sd5" href="/@maivuluan">
                        <div className="tiktok-uha12h-DivContainer e1vl87hj1" style={{width: "40px; height: 40px;"}}>
                            <span className="SpanAvatarContainer" style={{width: "40px; height: 40px;"}}>
                                <Image loading="lazy" 
                                src={avatar}
                                alt="avatar"
                                className="ImgAvatar"/>
                                    </span>
                                    </div>
                                    </a>
                                    <a className="StyledLink" href="/@maivuluan">
                                        <span data-e2e="browse-username" className="SpanUniqueId">maivuluan</span>
                                        <br/>
                                        <span data-e2e="browser-nickname" className="SpanOtherInfos">LU AN ☀️<span style={{margin:" 0px 4px;"}}> · </span>
                                        <span>3-23</span>
                                    </span> 
                                    </a>
                <Button variant="outline-danger" data-e2e="browse-follow" className="Button-StyledFollowButton">Follow</Button>
                </div>
                <div className="MainContainer">
                    <p>Tôi yêu Việt Nam</p>
                    <div className="Interactive">
                        <Button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-share" viewBox="0 0 16 16">
                            <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
                            
                            </svg>
                        <p>Like</p>
                        </Button>
                        <Button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-share" viewBox="0 0 16 16">
                            <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
                            
                            </svg>
                        <p>Share</p>
                        </Button>
                        <Button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-share" viewBox="0 0 16 16">
                            <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
                            
                            </svg>
                        <p>Comment</p>
                        </Button>
                        
                    </div>
                    <div className="WriteComment">
                        <Form.Group className="mb-3" controlId="WriteComment">
                            <Form.Control as="textarea" rows={3} placeholder="Viết bình luận" />
                        </Form.Group>
                    </div>
                    <div className="comment">
                    </div>
                </div>
            </div>
            
            <Button className="ShortVideoClose"> 
                <svg width={18} height={18} viewBox="0 0 9 10" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.35299 0.792837L4.49961 3.93944L7.64545 0.792566C7.8407 0.597249 8.15733 0.597223 8.35262 0.792508L8.70669 1.14658C8.90195 1.34184 8.90195 1.65842 8.70669 1.85368L5.56027 5.0001L8.70672 8.14655C8.90198 8.34181 8.90198 8.65839 8.70672 8.85366L8.35316 9.20721C8.1579 9.40247 7.84132 9.40247 7.64606 9.20721L4.49961 6.06076L1.35319 9.20719C1.15793 9.40245 0.841345 9.40245 0.646083 9.20719L0.292629 8.85373C0.0973708 8.65847 0.0973653 8.3419 0.292617 8.14664L3.43895 5.0001L0.292432 1.85357C0.0972034 1.65834 0.0971656 1.34182 0.292347 1.14655L0.645801 0.792924C0.841049 0.597582 1.1577 0.597543 1.35299 0.792837Z">
                    </path> 
                </svg>
            </Button>
            
        </div>
        
        </>
    );
}
