import React, { useEffect, useState } from 'react';
import {Link} from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Main = props => {
    const [josh23, setJosh23] = useState({
        visible: false
    });

    const [matt10, setMatt10] = useState({
        visible: false
    });
    
    const [john5, setJohn5] = useState({
        visible: false
    });

    const [john7, setJohn7] = useState({
        visible: false
    });

    const [acts5, setActs5] = useState({
        visible: false
    });

    const handleClick = () => {
        setJosh23(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    const handleClick2 = () => {
        setMatt10(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    const handleClick3 = () => {
        setJohn5(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    const handleClick4 = () => {
        setJohn7(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    const handleClick5 = () => {
        setActs5(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    return (
        <div>
            <div className="jumbotron">
                <h1>Approval</h1>
                <div className="col-sm-8">
                    <h2 onClick={handleClick}>Joshua 23:12-14</h2>
                    {josh23.isToggleOn ?
                    <p2>Or else, if indeed you do go back, and cling to the remnant of these nations - these that remain among you - and make marriages with them, and go in to them and they to you, know for certain that the Lord your God will no longer drive out these nations from before you. But they shall be snares and traps to you, and scourges on your sides and thorns in your eyes, until you perish from this good land which the Lord your God has given you. "Behold, this day I am going the way of all the earth. And you know in all your hearts and in all your souls that not one thing has failed of all the good things which the Lord your God spoke concerning you. All have come to pass for you; not one word of them has failed."</p2>
                :
                <p3></p3>
                }
                </div>
                <div className="col-sm-8">
                    <h2 onClick={handleClick2}>Matthew 10:32-33</h2>
                    {matt10.isToggleOn ?
                    <p2>"Therefore whoever confesses Me before men, him I will also confess before My Father who is in heaven. But whoever denies Me before men, him I will also deny before My Father who is in heaven."</p2>
                    :
                <p3></p3>
                }
                </div>
                <div className="col-sm-8">
                    <h2 onClick={handleClick3}>John 5:41-42</h2>
                    {john5.isToggleOn ?
                    <p2>"I do not receive honor from men. But I know you, that you do not have the love of God in you."</p2>
                :
                <p3></p3>
                }
                </div>
                <div className="col-sm-8">
                    <h2 onClick={handleClick4}>John 7:18</h2>
                    {john7.isToggleOn ?
                    <p2>"He who speaks from himself seeks his own glory; but He who seeks the glory of the One who sent Him is true, and no unrighteousness is in Him."</p2>
                :
                <p3></p3>
                }
                </div>
                <div className="col-sm-8">
                    <h2 onClick={handleClick5}>Acts 5:29</h2>
                    {acts5.isToggleOn ?
                    <p2>But Peter and the other apostles answered and said: "We ought to obey God rather than men."</p2>
                :
                <p3></p3>
                }
                </div>
            </div>
        </div>
    )
}

export default Main;