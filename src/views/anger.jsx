import React, { useEffect, useState } from 'react';
import {Link} from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Main = props => {
    const [numb, setNumb] = useState({
        visible: false
    });

    const [romans, setRomans] = useState({
        visible: false
    });
    // this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    
    const handleClick2 = () => {
    setRomans(prevState => ({
        isToggleOn: !prevState.isToggleOn
        }));
    }

    const handleClick = () => {
    setNumb(prevState => ({
        isToggleOn: !prevState.isToggleOn
        }));
    }

    return (
        <div>
            <div className="jumbotron">
                <h1>Anger</h1>
                <div className="col-sm-8">
                    <h2>Numbers 22:29</h2>
                    <p2>And Balaam said to the donkey, "Because you have abused me. I wish there were a sword in my hand, for now I would kill you!"</p2>
                </div>
                <div className="col-sm-8">
                    <h2 onClick={handleClick}>1 Kings 21:4-10</h2>
                    {numb.isToggleOn ?
                    <p2>So Ahab went into his house sullen and displeased because of the word which Naboth the Jezreelite had spoken to him; for he had said, "I will not give you the inheritance of my fathers." And he lay down on his bed, and turned away his face, and would eat no food. But Jezebel his wife came to him, and said to him, "Why is your spirit so sullen that you eat no food?" He said to her, "Because I spoke to Naboth the Jezreelite, and said to him, 'Give me your vineyard for money; or else, if it pleases you, I will give you another vieyard for it.' And he answered, 'I will not give you my vineyard.'" Then Jezebel his wife said to him, "You now exercise authority over Israel! Arise, eat food, and let your heart be cheerful; I will give you the vineyard of Naboth the Jezreelite." And she wrote letters in Ahab's name, sealed them with his seal, and sent the letters to the elders and the nobles who were dwelling in the city with Naboth. She wrote in the letters, sayin, Proclaim a fast, and seat Naboth with high honor among the people; and seat two men, scoundrels, before him to bear witness against him, saying. "You have blasphemed God and the king" Then take him out and stone him, that he may die. </p2>
                    :
                <p3></p3>
                }
                </div>
                <div className="col-sm-8">
                    <h2>Proverbs 12:16</h2>
                    <p2>A righteous man regards the lift of his animal, But the tender mercies of the wicked are cruel.</p2>
                </div>
                <div className="col-sm-8">
                    <h2>Mark 3:5-6</h2>
                    <p2>And when He had looked around at them with anger, being grieved by the hardness of their hearts, He said to the man, "Stretch out your hand." And he stretched it out, and his hand was restored as whole as the other. Then the Pharisees went out and immediately plotted with the Herodians against Him, how they might destroy Him.</p2>
                </div>
                <div className="col-sm-8">
                    <h2>John 2:13-17</h2>
                    <p2>Now the Passover of the Jews was at hand, and Jesus went up to Jerusalem. And He found in the temple those who sold oxen and sheep and doves, and the money changers doing business. When He had made a whip of cords, He drove them all out of the temple, with the sheep and the oxen, and poured out the changers' money and overturned the tables. And He said to those who sold doves, "Take these things away! Do not make My Father's house a house of merchandise!"</p2>
                </div>
                <div className="col-sm-8">
                    <h2 onClick={handleClick2}>Romans 1:18-32</h2>
                    {romans.isToggleOn ?
                    <p2>For the wrath of God is revealed from heaven against all ungodliness and unrighteousness of men, who suppress the truth in unrighteousness, because what may be knowon of God is manifest in them, for God has shown it to them. For since the creation of the world His invisible attributes are clearly seen, being understood by the things that are made, even His eternal power and Godhead, so that they are without excuse, because , although they knew God, the did not glorify Him as god, nor were thankful, but became futile in their thoughts, and their foolish hearts were darkened. Professing to be wise, they became fools, and changed the glory of the incorruptible God into an image made like a corruptible man - and birds and four-footed animals and creeping things. Therefore God also gave them up to cleanliness, in the lusts of their hearts, to dishonor their bodies among themselves, who exchanged the truth of God for the lie, and worshiped and served the creature rather than the Creator, who is blessed forever, Amen. For this reason God gave them up to vile passions. For even their women exchanged the natural use for what is against nature. Likewise also the men, leaving the natural use of the woman, burned in their lust for one another, men with men committing what is shameful, and receiving in themselves the penalty of their error which was due. And even as they did not like ot retain God in their knowledge, God gave them over to a debased mind, to do those things which are not fitting; being filled with all unrighteousness, sexual immortality, wickedness, covetousness, maliciousness; full of envy, murder, strife, deceit, evil-mindedness; they are whisperers, backbiters, haters of God, violent, proud, boasters, inventors of evil things, disboedient to parents, undiscerning, untrustworthy, unloving, unforgiving, unmerciful; who, knowing the righteous judgment of God, that those who practice such things are deserving of death, not only do the same but also approve of those who practice them.</p2>
                    :
                <p3></p3>
                }
                </div>
                <div className="col-sm-8">
                    <h2>James 3:5-6</h2>
                    <p2>Even so the tongue is a little member and boasts great things. See how great a forest a little fire kindles! And the tongue is a fire, a world of iniquity. The tongue is so set among our members that it defiles the whole body, and sets on fire the courese of nature; and it is set on fire by hell</p2>
                </div>

            </div>
        </div>
    )
}

export default Main;