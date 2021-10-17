import React, { useEffect, useState } from 'react';
import {Link} from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Main = props => {
    const [exodus14, setExodus14] = useState({
        visible: false
    });

    const [numb13, setNumb13] = useState({
        visible: false
    });
    
    const [numb16, setNumb16] = useState({
        visible: false
    });

    const [prov15, setProv15] = useState({
        visible: false
    });

    const [matt5, setMatt5] = useState({
        visible: false
    });

    const handleClick = () => {
        setExodus14(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    const handleClick2 = () => {
        setNumb13(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    const handleClick3 = () => {
        setNumb16(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    const handleClick4 = () => {
        setProv15(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    const handleClick5 = () => {
        setMatt5(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    return (
        <div>
            <div className="jumbotron">
                <h1>Attitudes</h1> <h3>See Also Thankfulness</h3>
                <div className="col-sm-8">
                    <h2 onClick={handleClick}>Exodus 14:11-14</h2>
                    {exodus14.isToggleOn ?
                    <p2>Then they said to Moses, "Becuase there were no graves in Egypt, have you taken us away to die in the wilderness? Why have you so dealt with us, to bring us up out of Egypt? Is this not the word that we told you in Egypt, saying, 'Let us alone that we may serve the Egyptians'? For it would have been better for us to serve the Egyptians than that we should die in the wilderness." And Moses said to the people, "Do not be afraid. Stand still, and see the salvation of the Lord, which He will accomplish for you today. For the Egyptians whom you see today, you shall see again no more forever. The Lord will fight for you, and you shall hold your peace."</p2>
                :
                <p3></p3>
                }
                </div>
                <div className="col-sm-8">
                    <h2 onClick={handleClick2}>Numbers 13:25-14:38</h2>
                    {numb13.isToggleOn ?
                    <p2>And they returned from spying out the land after forty days. Now they departed and came back to Moses and Aaron and all the congregation of the children of Israel in the Wilderness of Paran, at Kadesh; they brought back word to them and to all the congregation, and showed them the fruit of the land. Then they told him, and said: "We went to the land where you sent us. It truly flows with milk and honey, and this is its fruit. Nevertheless the people who dwell in the land  are strong; the cities are fortified and very large; moreover we saw the descendants of Anak there. The Amalekites dwell in the land of the South; the Hittites, the Jebusites, and the Amorites dwell in the mountains; and the Cananites dwell by the sea and along the banks of the Jordan." Then Caleb quieted the people before Moses, and said, "Let us go up at once and take possession, for we are well able to overcome it." But the men who had gone up with him said, "We are not able to go up against the people, for they are stronger than we." And they gave the children of Israel a bad report of the land which they had spied out, saying, "The land through which we have gone as spies is a land that devours its inhabitants, and all the people whom we saw in it are men of great stature. There we saw the giants (the descendants of Anak came from the giants); and we were like grasshoppers in our own sight, and so we were in their sight." (Ch. 14) So all the congregation lifted up their voices and cried, and the people wept that night. And the children of Israel complained against Moses and Aaron, and the whole congreegation said to them, "If only we had died in the land of Egypt! Or if only we had died in this wilderness! Why has the Lord brought us to this land to fall by the sword, that our wives and children should become victims? Would it not be better for us to return to Egypt?" So they said to one another, "Let us select a leader and return to Egypt." Then Moses and Aaron fell on their faces before all the assembly of the congregation of the children of israel. But Joshua the son of Nun and Caleb the son of Jephunneh, who were among those who had spied out the land, tore their clothes; and they spoke to all the congregation of the children of Israel, saying: "The land we passed through to spy out is and exceedingly good land. If the Lord delights in us, then He will bring us into this land and give it to us, 'a land which flows with milk and honey.' Only do not revel against the Lord, nor fear the people of the land, for they are our bread; their protection has departed from them, and the Lord is with us. Do not fear them." And all the congregation said to stone them with stones. Now the glory of the Lord appeared in the tabernacle of meeting before all the children of Israel. Then the Lord said to Moses: "How long will these people reject Me? And how long will they not believe Me, with all the signs which I have performed among them? I will strike them with the pestilence and disinherit them, and I will make of you a nation greater and mightier than they." And Moses said to the Lord: "Then the Egyptians will hear it, for by Your might You brought these people up from among them, and they will tell it to the inhabitants of this land. They have heard that You, Lord, are among tese peoploe; that You, Lord, are seen face to face and Your cloud stands above them, and You go before them in a pillar of cloud by day and in a pillar of fire by night. Now if You kill these people as  one man, then the nations which have heard of Your fame will speak, saying , 'Beause the Lord was not able to bring this people to the land which He swore to give them, therefore He killed them in the wilderness.' And now, I pray, let the power of my Lord be great, just as You have spoken, saying, 'The Lord is longsuffering and abundant in mercy, forgiving iniquity and transgression; but He by no means clears the guilty, visiting the iniquity of the fathers on the children to the third and fourth generation.' Pardon the iniquity of this people, I pray, according to the greatness of Your mercy, just as you have forgiven this people, from Egypt even until now." Then the Lord said: "I have pardoned, according to your word; but truly, as I live, all the earth shall be filled with the glory of the Lord - because all these men who have seen My glory and the signs which I did in Egypt and in the wilderness, and have put Me to the test now these ten times, and have not heeded My voice, they certainly shall not see the land of which I swore to their fathers, nor shall any of those who rejected Me see it. But My servant Caleb, because he has a different spirit in him and has followed Me fully, I will bring into the land where he went, and his descendants shall inherit it. Now the Amalekites and the Canaanites dwell in the valley; tomorrow turn and move out into the wilderness by the Way of the Red Sea." And the Lord spoke to Moses and Aaron, saying "How long shall I bear with this evil congregaytion who complain against Me? I have heard the complaints which the children of Israel make against Me. Say to them, 'As I live,' says the Lord, 'just as you have spoken in My hearing, so I will do to you: The carcasses of you who have complained against Me shall fall in this wilderness, all of you who were numbered, according to your entire number, from twenty years old and above. Except for Caleb the son of Jephunneh and Joshua the son of Nun, you shall by no means enter the land which I swore I would make you dwell in. But your little ones,k whom said would be victims, I will bring in, and they shall know the land which you have despised. But as for you, your carcasses shall fall in this wilderness And your sons shall be shepherds in the wilderness forty years, and bear the brunt of your infidelity, until your carcasses are consumed in the wilderness. According to the number of the days in which you spied out the land, forty days, for each day you shall bear your guilt one year, namely forty years, and you shall know My rejection. I the Lord have spoken this I will surely do so to all this evil congregation who are gathered together against Me. In this wilderness they shall be consumed, and there they shall die.'" Now the men whom Moses sent to spy out the land, who returned and made all the congregation complain against him by bringing a bad report of the land, those very men who brought the evil report about the land, died by the plague before the Lord. But Joshua the son of Nun and Caleb the son of Jephunneh remained alive, of the men who went to spy out the land.</p2>
                    :
                <p3></p3>
                }
                </div>
                <div className="col-sm-8">
                    <h2 onClick={handleClick3}>Numbers 16:41-50</h2>
                    {numb16.isToggleOn ?
                    <p2>On the next day all the congregation of the children of Israel complained against Moses and Aaron, saying, "You have killed the people of the Lord." Now it happened, when the congregation had gathered against Moses and Arron, that they turned toward the tabernacle of meeting; and suddenly the cloud covered it, and the glory of the Lord appeared. Then Moses and Aaron came before the tabernafcle of meeting. And the Lord spoke to Moses, saying, " Get away from among this congregation, that I may consume them in a moment." And they fell on their faces. So Moses siad to Aaron, "Take a censer and put fire in it from the altar, put incense on it, and take it quickly to the congregation and make atonement for them; for wrath has gone out from the Lord. The plague has begun." Then Aaron took it as Mosescommanded, and ran into the midst of the assembly; and already the plague had begun among the people. So he put in the incense and made atonement for the people. And he stood between the dead and the living; so the plague was stopped. Now those who died in the plague were fourteen thousand seven hundred, besides those who died in the Korah incident. So Aaron returned to Moses at the door of the tabernacle of meeting, for the plague had stopped.</p2>
                :
                <p3></p3>
                }
                </div>
                <div className="col-sm-8">
                    <h2 onClick={handleClick4}>Proverbs 15:13-15</h2>
                    {prov15.isToggleOn ?
                    <p2>A merry heart makes a cheerful countenance, But by sorrow of the heart the spirit is broken. The heart of him who has understanding seeks knowledge, But the mouth of fools feeds on foolishness. All the days of the afflicted are evil, But he who is of a merry heart has a continual feast.</p2>
                :
                <p3></p3>
                }
                </div>
                <div className="col-sm-8">
                    <h2 onClick={handleClick5}>Matthew 5:3-12</h2>
                    {matt5.isToggleOn ?
                    <p2>"Blessed are the poor inspirit, For theirs is the kingdom of heaven. Blessed are those who mourn, For they shall be comforted. Blessed are the meek, For they shall inherit the earth. Blessed are those who hunger and thirst for righteousness, For they shall be filled. Blessed are the merciful, For they shall obtain mercy. Blessed are the pure in heart, For they shall see God. Belssed are the peacemakers, For they shall be called sons of God. Blessed are those who are persecuted for righteousness' sake, For theirs is the kingdom of heaven. Blessed are you when they revile and persecute you, and say all kinds of evil against you falsely for My sake. Rejoice and be exceedingly glad, for great is your reward in heaven, for so they persecuted the prophets who were before you."</p2>
                :
                <p3></p3>
                }
                </div>
            </div>
        </div>
    )
}

export default Main;