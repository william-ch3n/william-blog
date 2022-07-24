import React, { Fragment, useEffect, useRef, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Tooltip } from '@mui/material'
import avatar from '../static/img/avator.jpg'
import '../static/css/header.css'
import { GREETINGS, HINTS } from '../common/constants/allConstants';
import SwipeableMenu from './SwipeableMenu';
import { useNavigate, Outlet } from 'react-router-dom'
import { actionStoreTabValue } from '../common/redux/actions/headerActions';
import { getUrlBase } from '../common/utils/urlUtils';

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
	const dispatch = useDispatch();

	// 使用navigate来跳转页面
	const navigate = useNavigate();

	// monitor showHint, if it turns true, execute displayHint()
	useEffect(()=>{
		if(index === 3)
			displayHint();
	},[index]);

	// 初始化tab下标
	useEffect(()=>{
		const baseUrl = getUrlBase();
			if(baseUrl.includes("home")){
				setIndex(0);
			}else if(baseUrl.includes("notes")){
				setIndex(1);
			}else if(baseUrl.includes("album")){
				setIndex(2);
			}else if(baseUrl.includes("about")){
				setIndex(3);
			}
	},[]);


	const handleChange = (event, newValue) => {
		setIndex(newValue);
		dispatch(actionStoreTabValue(newValue));
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
			wordRef.current.style.top = "9vh";
			headerDivRef.current.style.height = "20vh";
			headerDivRef.current.style.boxShadow = "none";
		}
	}

	// 跳转页面
	const clickTab = (tabName) => {
		navigate(`${tabName}`);
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
						<Tab disableRipple={true} label="Home" style={{ minWidth: "15%" }} onClick={()=>clickTab("home")}/>
						<Tab disableRipple={true} label="Notes" style={{ minWidth: "15%" }} onClick={()=>clickTab("notes")}/>
						<Tab disableRipple={true} label="Album" style={{ minWidth: "15%" }} onClick={()=>clickTab("album")}/>
						<Tab disableRipple={true} label="About" style={{ minWidth: "15%" }} onClick={()=>clickTab("about")}/>
					</Tabs>
				</div>
				<SwipeableMenu />
			</div>


		</Fragment>
	)
}