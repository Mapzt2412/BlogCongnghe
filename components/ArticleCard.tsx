import Image from "next/image";
export const ArticleCard = (props) => {
    
    return (
        
        <>
            <Image
                src={props.img}
                width={320}
                height={180}
            />
            <p>{props.title}</p>
            <div className="author">
                <div className="AuthorDetail">
                    <div className="AvatarAuthor">
                        <Image src={props.avatar}
                        width={320}
                        height={180}
                        />
                    </div>
                    <p>{props.author}</p>
                </div>
                
                
                <p className="time">{props.time}</p>
            </div>
        </>
        
    );
}