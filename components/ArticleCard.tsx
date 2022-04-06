import Image from "next/image";
export const ArticleCard = (props) => {
    return (
        <>
            <Image
                src={props.img}
            />
            <p>{props.title}</p>
            <div className="author">
                <p>{props.author}</p>
                <p className="time">{props.time}</p>
            </div>
        </>
        
    );
}