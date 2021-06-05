import React, { useEffect, useState } from 'react';
// import {Link} from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';

const Main = props => {
    
    return (
        <div>
            <div className="jumbotron">
                <h1>Angels</h1>
                <div className="col-sm-8">
                    <h3>Matthew 18:10</h3>
                    <p2>"Take heed that you do not despise one of these little ones, for I say to you that in heaven their angels always see the face of My Father who is in heaven."</p2>
                </div>
                <div className="col-sm-8">
                    <h3>Acts 12:5-7</h3>
                    <p2>Peter was therefore kept in prison, but constant prayer was offered to God for him by the church. And when Herod was about to bring him out, that night Peter was sleeping, bound with two chains between two soldiers; and the guards before the door were keeping the prison. Now behold, an angel of the Lord stood by him, and a light shone in the prison; and he struck Peter on the side and raised him up, saying, "Arise quickly!" And his chains fell of his hands.</p2>
                </div>
            </div>
        </div>
    )
}


export default Main;