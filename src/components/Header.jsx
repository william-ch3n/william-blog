import React, { Fragment, useEffect, useRef, useState } from 'react'
import {useSelector} from 'react-redux'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Tooltip } from '@mui/material'
import avatar from '../static/img/avator.jpg'
import '../static/css/header.css'
import { GREETINGS, HINTS } from '../common/constants/allConstants';
import SwipeableMenu from './SwipeableMenu';

export default function Header() {

	const [index, setIndex] = useState(0);
	const [word, setWord] = useState("");
	const [wordCss, setWordCss] = useState("wordBox");
	const wordRef = useRef();
	const headerDivRef = useRef();
	const avatarRef = useRef();
	const tabBoxRef = useRef();

	// use Redux to get state
	const {showHint} = useSelector(state => state.headerReducer);

	// monitor showHint, if it turns true, execute displayHint()
	useEffect(()=>{
		if(showHint)
			displayHint();
	},[showHint]);


	const handleChange = (event, newValue) => {
		setIndex(newValue);
	}

	const onClick = () => {
		let index = Math.floor(Math.random() * GREETINGS.WORDS.length);
		setWord(GREETINGS.WORDS[index] + GREETINGS.WORDS[index] + GREETINGS.WORDS[index]);
		setWordCss("wordBox");
		setTimeout(() => {
			setWordCss("wordBox-fadeOut");
		}, 1000);
	}

	const displayHint = () => {
		setWord(HINTS.DICE);
		setWordCss("wordBox");
		setTimeout(() => {
			setWordCss("wordBox-fadeOut");
		}, 1500);
	}

	window.onscroll = function () { 
		scrollFunction() 
	};

	function scrollFunction() {
		if (window.scrollY > 50 ) {
			
			avatarRef.current.style.top = "1vh";
			avatarRef.current.style.width = "5vh";
			tabBoxRef.current.style.top = "1vh";
			wordRef.current.style.top = "1vh";
			headerDivRef.current.style.height = "7vh";
			headerDivRef.current.style.boxShadow = "1.5px 1.5px 1.5px #D3D3D3";
		} else {
			
			avatarRef.current.style.top = "6vh";
			avatarRef.current.style.width = "6vw";
			tabBoxRef.current.style.top = "10vh";
			wordRef.current.style.top = "11vh";
			headerDivRef.current.style.height = "20vh";
			headerDivRef.current.style.boxShadow = "none";
		}
	}


	return (
		<Fragment>

			<div className="headerDiv" ref={headerDivRef}>
				<div className="avatarBox" >
					<Tooltip title="Hello there! 👋">
						<img src={avatar} alt="" className="avatar" onClick={onClick} ref={avatarRef}/>
					</Tooltip>
				</div>


				<div className={wordCss} ref={wordRef}>
					{word}
				</div>


				<div className="tabBox" ref={tabBoxRef}>
					<Tabs value={index} onChange={handleChange} centered >
						<Tab disableRipple={true} label="Home" style={{ minWidth: "15%" }} />
						<Tab disableRipple={true} label="Notes" style={{ minWidth: "15%" }} />
						<Tab disableRipple={true} label="Album" style={{ minWidth: "15%" }} />
						<Tab disableRipple={true} label="About" style={{ minWidth: "15%" }} />
					</Tabs>
				</div>
				<SwipeableMenu />
			</div>

		</Fragment>
	)
}