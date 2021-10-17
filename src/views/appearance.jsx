import React, { useEffect, useState } from 'react';
import {Link} from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Main = props => {
    const [prov19, setProv19] = useState({
        visible: false
    });

    const [matt6, setMatt6] = useState({
        visible: false
    });
    
    const [matt22, setMatt22] = useState({
        visible: false
    });

    const [tim1, setTim1] = useState({
        visible: false
    });

    const [pete1, setPete1] = useState({
        visible: false
    });

    const handleClick = () => {
        setProv19(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    const handleClick2 = () => {
        setMatt6(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    const handleClick3 = () => {
        setMatt22(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    const handleClick4 = () => {
        setTim1(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    const handleClick5 = () => {
        setPete1(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    return (
        <div>
            <div className="jumbotron">
                <h1>Appearance</h1>
                <div className="col-sm-8">
                    <h2 onClick={handleClick}>Proverbs 19:22</h2>
                    {prov19.isToggleOn ?
                    <p2>What is desired in a man is kindness, And a poor man is better than a liar.</p2>
                :
                <p3></p3>
                }
                </div>
                <div className="col-sm-8">
                    <h2 onClick={handleClick2}>Matthew 6:25-34</h2>
                    {matt6.isToggleOn ?
                    <p2>"Therefore I say to you, do not worry about your life, what you will eat or what you will drink; nor about your body, what you will put on. Is not life more than food and the body more than clothing? Look at the birds of the air, for they neither sow nor reap nor gather into barns; yet your heavenly Father feeds them. Are you not of more value than they? Which of you by worrying can add one cubit to his stature? So why do you worry about clothing? Consider the lilies of the field, how they grow: they neither toil nor spin; and yet I say to you that even Solomon in all his glory was not arrayed like one of these. Now if God so clothes the grass of the field, which today is, and tomorrow is thrown into the oven, will He not much more clothe you, O you of little faith? Therefore do not worry, sayin, 'What shall we eat?' or 'What shall we drink?' or 'What shall we wear?' For after all these things the Gentiles seek. For your heavenly Father knows that you need all these things. But seek first the kingdom of God and His righteousness, and all these things shall be added to you. Therefore do not worry about tomorrow, for tomorrow will worry about its own things. Sufficient for the day is its own trouble."</p2>
                    :
                <p3></p3>
                }
                </div>
                <div className="col-sm-8">
                    <h2 onClick={handleClick3}>Matthew 22: 11-12</h2>
                    {matt22.isToggleOn ?
                    <p2>"But when the king came in to see the guests, he saw a man there who did not have on a wedding garment. So he said to him, 'Friend, how did you come in here without a wedding garment?' And he was speechless."</p2>
                :
                <p3></p3>
                }
                </div>
                <div className="col-sm-8">
                    <h2 onClick={handleClick4}>1 Timothy 2:8-10</h2>
                    {tim1.isToggleOn ?
                    <p2>I desire therefore that the men pray everywhere, lifting up holy hands, without wrath and doubting; in like manner also, that the women adorn themselves in modest apparel, with propriety and moderation, not with braided hair or gold or pearls or costly clothing, but, which is proper for women professing godliness, with good works.</p2>
                :
                <p3></p3>
                }
                </div>
                <div className="col-sm-8">
                    <h2 onClick={handleClick5}>1 Peter 3:1-6</h2>
                    {pete1.isToggleOn ?
                    <p2>Wives, likewise, be submissive to your own husbands, that even if some do not obey the word, they, without a word, may be won by the conduct of their wives, when they observe your chaste conduct accompanied by fear. Do not let your adornment be merely outward - arranging the hair, wearing gold, or putting on fine apparel - rather let it be the hidden person of the heart, with the incorruptible beauty of a gentle and quiet spirit, which is very precious in the sight of God. For in this manner, in former times, the holy women who trusted in God also adorned themselves, being submissive to their own husbands, as Sarah obeyed Abraham, calling him lord, whose daughters you are if you do good and are not afraid with any terror.</p2>
                :
                <p3></p3>
                }
                </div>
            </div>
        </div>
    )
}

export default Main;