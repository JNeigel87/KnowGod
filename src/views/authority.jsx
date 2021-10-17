import React, { useEffect, useState } from 'react';
import {Link} from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Main = props => {
    const [judges, setJudges] = useState({
        visible: false
    });

    const [prov, setProv] = useState({
        visible: false
    });
    
    const [matt, setMatt] = useState({
        visible: false
    });

    const [romans, setRomans] = useState({
        visible: false
    });

    const [eph, setEph] = useState({
        visible: false
    });

    const [thes1, setThes1] = useState({
        visible: false
    });

    const handleClick = () => {
        set(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    const handleClick2 = () => {
        set(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    const handleClick3 = () => {
        set(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    const handleClick4 = () => {
        set(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    const handleClick5 = () => {
        set(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    const handleClick6 = () => {
        set(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    return (
        <div>
            <div className="jumbotron">
                <h1></h1> <h3>See Also Marriage, Parents</h3>
                <div className="col-sm-8">
                    <h2 onClick={handleClick}>Judges 21:23-25</h2>
                    {judges.isToggleOn ?
                    <p2>So the men of Benjamin did as they were told. Each man caught one of the women as she danced in the celebration and carried her off to be his wife. They returned to their own land, and they rebuilt their towns and lived in them. Then the people of Israel departed by tribes and families, and they returned to their own homes. In those days Israel had no king; all the people did whatever seemed right in their own eyes.</p2>
                :
                <p3></p3>
                }
                </div>
                <div className="col-sm-8">
                    <h2 onClick={handleClick2}>Proverbs 21:1</h2>
                    {prov.isToggleOn ?
                    <p2>The king's heart is like a stream of water directed by the Lord; he guides it wherever he pleases</p2>
                    :
                <p3></p3>
                }
                </div>
                <div className="col-sm-8">
                    <h2 onClick={handleClick3}>Matthew 28:18</h2>
                    {matt.isToggleOn ?
                    <p2>Jesus came and told his disciplies, "I have been given all authority in heaven and on earth."</p2>
                :
                <p3></p3>
                }
                </div>
                <div className="col-sm-8">
                    <h2 onClick={handleClick4}>Romans 13:1-7</h2>
                    {romans.isToggleOn ?
                    <p2>Everyone must submit to governing authorities. For all authority comes from God, and those in positions of authority have been placed there by God. So anyone who rebels against authority is rebelling against God has instituted, and they will be punished. For the authorities do not strike fear in people who are doing right, but in those who are doing wrong. Would you like to live without fear of authorities? Do what is right, and they will honor you. The authorities are God's servants, sent for your good. But if you are doing wrong, of course you should be afraid, for they have the power to punish you. They are God/s servants, sent for the very purpose of punishing those who do what is wrong. So you must submit to them, not only to avoid punishment, but also to keep a clear conscience. Pay your taxes, too, for these same reasons For government workers need to be paid. They are serving God in what they do. Give everyone what you owe them: Pay your taxes and government fees to those who collect them, and give respect and honor to those who are in authority.</p2>
                :
                <p3></p3>
                }
                </div>
                <div className="col-sm-8">
                    <h2 onClick={handleClick5}>Ephesians 6:1-3</h2>
                    {eph.isToggleOn ?
                    <p2>Children, obey your parents because you belong to the Lord, for this is the right thing to do. "Honor your father and mother." This is the first commandment with a promise: If you honor your father and mother, "things will go well for you, and you will have a long life on the earth."</p2>
                :
                <p3></p3>
                }
                </div>
                <div className="col-sm-8">
                    <h2 onClick={handleClick6}>1 Thessalonians 5:12-13</h2>
                    {thes1.isToggleOn ?
                    <p2>Dear brothers and sisters, honor those who are your leaders in the Lord's work. They work hard among you and give you spiritual guidance. Show them great respect and wholehearted love because of their work. And live peacefully with each other.</p2>
                :
                <p3></p3>
                }
                </div>
            </div>
        </div>
    )
}

export default Main;