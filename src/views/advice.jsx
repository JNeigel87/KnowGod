import React, { useEffect, useState } from 'react';
// import {Link} from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';

const Main = props => {
    const [prov, setProv] = useState({
        visible: false
    });

    const handleClick = () => {
    setProv(prevState => ({
        isToggleOn: !prevState.isToggleOn
        }));
    }

    const [psalm16, setPsalm16] = useState({
        visible: false
    });

    const handleClick1 = () => {
        setPsalm16(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    const [psalm25, setPsalm25] = useState({
        visible: false
    });

    const handleClick2 = () => {
        setPsalm25(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    const [psalm119, setPsalm119] = useState({
        visible: false
    });

    const handleClick3 = () => {
        setPsalm119(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    const [prov13, setProv13] = useState({
        visible: false
    });

    const handleClick4 = () => {
        setProv13(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    // this.handleClick = this.handleClick.bind(this);
    return (
        <div>
            <div className="jumbotron">
                <h1>Advice</h1> <h2>(See also Believing in God, Future, God's Will, Prayer)</h2>
                <div className="col-sm-8">
                    <h3 onClick={handleClick1}>Psalm 16:7-8</h3>
                    {psalm16.isToggleOn ?
                    <p2>I will bless the Lord who has given me counsel; My heart also instructs me in the night seasons. I have set the Lord always before me; Because He is at my right hand I shall not be moved</p2>
                :
                <p3></p3>
                }
                </div>
                <div className="col-sm-8">
                    <h3 onClick={handleClick2}>Psalm 25:4-7</h3>
                    {psalm25.isToggleOn ?
                    <p2>Show me Your ways, O Lord; Teach me Your paths. Lead me in Your truth and teach me, For You are the God of my slavation; On You I wait all the day. Remember, O Lord, Your tender mercies and Your loving kindnesses, For they are from of old. Do not remember the sins of my youth, nor my transgressions; According to Your mercy remember me, For Your goodness' sake, O Lord.</p2>
                :
                <p3></p3>
                }
                </div>
                <div className="col-sm-8">
                    <h3 onCLick={handleClick3}>Psalm 119:105</h3>
                    {psalm119.isToggleOn ?
                    <p2>Your word is a lamp to my feet And a light to my path.</p2>
                :
                <p3></p3>
                }
                </div>
                <div className="col-sm-8">
                    <h3 onClick={handleClick}>Proverbs 3</h3>
                    { prov.isToggleOn ?
                    <p2>My son, do not forget my law, But let your heart keep my commands; For length of days and long life and peace they will add to you. Let not mercy and truth forsake you; Bind them around your neck, Write them on the tablet of your heart, And so find favor and high esteem in the sight of God and man. Trust in the Lord with all your heart, And lean not on your own understanding; In all your ways acknowledge Him, And He shall direct your paths. Do not be wise in your own eyes; Fear the Lord and depart from evil. It will be health to your flesh, and strength to your bones. Honor the Lord with your possessions, And with the first fruits of all your increase; So your barns will be filled with plenty, and your vats will overflow with new wine. My son, do not despise the chastening of the Lord, Nor detest His correction; For whom the Lord loves He corrects, Just as a father the son in whom he delights. Happy is the man who finds wisdom, And whe man who gains understanding; For her proceeds are better than the profits of silver, And her gain than fine gold. She is more precious than rubies, And all the things you may desire cannot compare with her. Length of days is in her right hand, In her left hand riches and honor. Her ways are ways of pleasantness, And all her paths are peace. She is a tree of life to those who take hold of her, And happy are all who retain her, The Lord by wisdom founded the earth; By understanding He established the heavens; By His knowledge the depths were broken up, And clouds drop down the dew. My son, let them not depart from your eyes - Keep sound wisdom and discretion; So they will be life to your soul And grace to your neck. Then you will walk safely in your way, And your foot will not stumble. When you lie down, you will not be afraid; Yes, you will lie down and your sleep will be sweet. Do not be afraid of sudden terror, Nor of trouble from the wicked when it comes; For the Lord will be your confidence, And will keep your foot from being caught. Do not withhold good from those to whom it is due, When it is in the power of your hand to do so. Do not say to your neighbor, "Go, and come back, And tomorrow I will give it," When you have it with you. Do not devise evil against your neighbor, For he dwells by you for safety's sake. Do not strive with a man without cause, If he has done you no harm. Do not envy the oppressor, And choose none of his ways; For the perverse person is an abomination to the Lord, But His secret counsel is with the upright. The curse of the Lord is on the house of the wicked, But He blesses the home of the just. Surely He scorns the scorngful, But gives grace to the humble. The wise shall inherit glory, But shame shall be the legacy of fools.
                    </p2>
                    :
                    <p3></p3>
                    }
                </div>
                <div className="col-sm-8">
                    <h3 onClick={handleClick4}>Proverbs 13:10, 13</h3>
                    {prov13.isToggleOn ?
                    <p2>By pride comes nothing but strife, But with the well-advised is wisdom.
                    He who despises the word will be destroyed, But he who fears the commandment will be rewarded.</p2>
                :
                <p3></p3>
                }
                </div>
            </div>
        </div>
    )
}


export default Main;