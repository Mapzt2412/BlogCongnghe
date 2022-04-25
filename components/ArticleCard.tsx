import Image from "next/image";
import Link from "next/link";
export const ArticleCard = (props) => {
    
    return (
        
        <>  
        <Link href="listArticleDetail">
            <Image
                src={props.img}
                width={320}
                height={180}
            />
        </Link>
            
            <p>{props.title}</p>
            <div className="author">
                <div className="AuthorDetail">
                    <div className="AvatarAuthor">
                        <Link href="profile">
                        <Image src={props.avatar}
                        width={320}
                        height={180}
                        />
                        </Link>
                    </div>
                    <p>{props.author}</p>
                </div>
                
                
                <p className="time">{props.time}</p>
            </div>
        </>
        
    );
}