import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

import { userService } from 'services';

export default Home;

import Router from 'next/router'
 

function Home() {

    useEffect(() => {
        const {pathname} = Router
        if(pathname == '/' ){
            Router.push('/home')
        }
      });
    return (
        <></>
    );
}