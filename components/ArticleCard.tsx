import Image from "next/image";
export const ArticleCard = (props) => {
    return (
        <>
            <Image
                src={props.img}
            />
            <p>{props.title}</p>
            <div className="author">
                <div className="AuthorDetail">
                    <div className="AvatarAuthor">
                        <Image src={props.avatar}
                        />
                    </div>
                    <p>{props.author}</p>
                </div>
                
                
                <p className="time">{props.time}</p>
            </div>
        </>
        
    );
}