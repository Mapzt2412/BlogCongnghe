import Head from "next/head";
import { ShortVideoDetail } from "../../components/ShortVideoDetail";
export default function shortvideo (){
    return (
        <>
            <Head>
                <title>Tin ngắn</title>
                <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'/>
            </Head>
            <ShortVideoDetail />
            
        </>
    );
}