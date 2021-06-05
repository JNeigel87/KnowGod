import React, { useEffect, useState } from 'react';
import {Link} from '@reach/router';
// import {Link} from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';

const Main = props => {
    const [matt, setMatt] = useState({
        visible: false
    });

    const [luke, setLuke] = useState({
        visible: false
    });

    const [tim1, setTim1] = useState({
        visible: false
    });

    const [cor1, setCor1] = useState({
        visible: false
    });
    // this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    
    const handleClick2 = () => {
    setCor1(prevState => ({
        isToggleOn: !prevState.isToggleOn
        }));
    }

    const handleClick3 = () => {
    setLuke(prevState => ({
        isToggleOn: !prevState.isToggleOn
        }));
    }

    const handleClick4 = () => {
    setTim1(prevState => ({
        isToggleOn: !prevState.isToggleOn
        }));
    }

    const handleClick = () => {
    setMatt(prevState => ({
        isToggleOn: !prevState.isToggleOn
        }));
    }

    

    // this.handleClick = this.handleClick.bind(this);
    return (
        <div>
            <div className="jumbotron">
                <h1>Abilities</h1> <Link to="/potential"><h2>(See also Potential)</h2></Link>
                <div className="col-sm-8">
                    <h3 onClick={handleClick}>Matthew 25:14-30</h3>
                    { matt.isToggleOn ?
                    <p2>"For the kingdom of heaven is like a man traveling to a far country, who called his own servants and delivered his goods to them. And to one he gave five talents, to another two, and to another one, to each according to his own ability; and immediately he went on a journey. Then he who had received the five talents and traded with them, and made another five talents. And likewise he who had received two gained two more also. But he who had received one went and dug in the ground , and hid his lord's money. After a long time the lord of those servants came and settled accounts with them. So he who had received five talents came and brought five other talents, saying, 'Lord, you delivered to me five talents; loo, I have gained five more talents besides them.' His lord said to him, 'Well done, good and faithful servant; you were faithful over a few things. I will make you ruler over many things. Enter into the joy of your lord.' He also who had received two talents came and said, 'Lord, you delivered to me two talents; look, I have gained two more talents besides them.' His lord said to him. 'Well done, good and faithful servant; you have been faithful over a few things. Enter into the joy of your lord.'
                        "Then he who had received the one talent came and said, 'Lord, I knew you to be a hard man, reaping where you have not sown, and gathering where you have not scattered seed. And I was afraid, and went and hid your talent in the ground. Loo, there you have what is yours.' But his lord answered and said to him, 'You wicked and lazy servant, you knew that I reap where I have not sown, and gather where I have not scattered seed. So you ought to have deposited my money with the bankers, and at my coming I would have received back my own with interest. So take the talent from him, and give it to him who has ten talents. For to everyone who has, more will be given, and he will have abundance; but from him who does not have, even what he has will be taken away. And cast the unprofitable servant into the outer darkness. There will be weeping and gnashing of teeth.'"
                    </p2>
                    :
                    <p3></p3>
                    }
                </div>
                <div className="col-sm-8">
                    <h3 onClick={handleClick3}>Luke 12:48</h3>
                    { luke.isToggleOn ?
                    <p2>"But he who did not know, yet committed things deserving of stripes, shall be beaten with few. For everyone to whom much is given, from him much will be required; and to whom much has been committed, of him they will ask the more."</p2>
                    :
                    <p3></p3>
                    }
                </div>
                <div className="col-sm-8">
                    <h3 onClick={handleClick2}>1 Corinthians 12</h3>
                    { cor1.isToggleOn ?
                    <p2>Now concerning spiritual gifts, brethren, I do not want you to be ignorant: You know that you were Gentiles, carried away to these dumb idols, however you were led. Therefore I make known to you that no one speaking by the Spirit of God calls Jesus accursed, and no one can say that Jesus is Lord except by the Holy Spirit. There are diversities of gifts, but the same Spirit. There are differences of ministries, but the same Lord. And there are diversities of activities, but it is the same God who works all in all. But the manifestation of the Spirit is given to each one for the profit of all: for to one is given the word of wisdom through the Spirit, to another the word of knowledge through the same Spirit, to another faith by the same Spirit, to another gifts of healings by the same Spirit, to another the working of miracles, to another prophecy, to another discerning of spirits, to another different kinds of tongues, to another the interpretation of tongues. But one and the same Spirit works all these things, distributing to each one individually as He wills.
                        For as the body is one and has many members, but all the members of that one body, being many, are one body, so also is Christ. For by one Spirit we were all baptized into one body - whether Jews of Greeks, whether slaves or free - and have all been made to drink into one Spirit. For in fact the body is not one member but many.
                        If the foot should say, "Because I am not a hand, I am not of the body," is it therefore no of the body? And if the ear should say, "Because I am not an eye, I am not of the body," is it therefore no of the body? If the whole body were an eye, where would be the hearing? If the whole were hearing, where would be the smelling? But now God has set the members, each one of them, in the body just as He pleased. And if they were all one member, where would the body be?
                        But now indeed there are many member, yet one body. And the eye cannot say to the hand, "I have no need of you"; nor again the head to the feet, "I have no need of you." No, much rather, those members of the body which seem to be weaker are necessary. And those members of the body which we think to be less honorable, on these we bestow greater honor; and our unpresentable parts have greater modesty, but our presentable parts have no need. But God composed the body, having given greater honor to that part which lacks it, that there should be no schism in the body, but hat the members should have the same care for one another. And if one member suffers, all the members suffer with it; or if one member is honored, all the members rejoice with it.
                        Now you are the body of Christ, and members individually. And God has appointed these in the church: first apostles, second prophets, third teachers, after that miracles, then gifts of healing, helps, administrations, varieties of tongues. Are all apostles? Are all prophets? Are all teachers? Are all workers of miracles? Do all have gifts of healings? Do all speak with tongues? Do all interpret? But earnestly desire the best gifts. And yet I show you a more excellent way.
                    </p2>
                    :
                    <p3></p3>
                    }
                    
                </div>
                <div className="col-sm-8">
                    <h3 onClick={handleClick4}>1 Timothy 4:14-16</h3>
                    { tim1.isToggleOn ?
                    <p2>Do not neglect the gift that is in you, which was given to you by prophecy with laying on of the hands of the eldership. Meditate on these things; give yourself entirely to them, that your progress may be evident to them, that your progress may be evident to all. Take heed to yourself and to the doctrine. Continue in them, for in doing this you will save both yourself and those who hear you.</p2>
                    :
                    <p3></p3>
                    }
                </div>
            </div>
        </div>
    )
}


export default Main;