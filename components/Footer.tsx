import Image from "next/image";
import Facebook from "../assets/icon_facebook.png"
import Insta from "../assets/icon_insta.png"
import Github from "../assets/icon_github.png"
import Twitter from "../assets/icon_twitter.png"
import Youtube from "../assets/icon_youtube.png"

export const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="icon facebook">
                    <Image src={Facebook}>
                    </Image>
                </div>
                <div className="icon youtube">
                <Image src={Youtube}>
                    </Image>
                </div>
                <div className="icon insta">
                <Image src={Insta}>
                    </Image>
                </div>
                <div className="icon twitter">
                <Image src={Twitter}>
                    </Image>
                </div>
                <div className="icon github">
                <Image src={Github}>
                    </Image>
                </div>

            </div>

        </>
    );
}