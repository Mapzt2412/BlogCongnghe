import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

import { userService } from 'services';

export default Home;

function Home() {


    return (
        <div className="card mt-4">
            
                <Button onClick= {()=>{userService.logout();}}>logout</Button>

        </div>
    );
}