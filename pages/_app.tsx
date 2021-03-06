import '../styles/globals2.css'
import '../styles/globals.css'
import '../styles/header.css';
import '../styles/login.css';
import '../styles/carousel.css';
import '../styles/home.css'
import '../styles/articleCard.css'
import '../styles/footer.css'
import '../styles/shortvideo.scss'
import '../styles/vlog.css'
import '../styles/createPost.css'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import  Head  from 'next/head';
import { userService } from '../services/user.service';

function MyApp({ Component, pageProps }) {

    return (
        <>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp
