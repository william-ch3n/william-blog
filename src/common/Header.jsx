import React, { Fragment, useRef, useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Avatar, Tooltip, Grid } from '@mui/material'
import avatar from '../static/img/avator.jpg'
import '../static/css/header.css'
import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';

export default function Header() {

	const [index, setIndex] = useState(0);

	const [word, setWord] = useState("");

	const [wordCss, setWordCss] = useState("wordBox");

	const words = ["☺️","🤨","🤓","😶‍🌫️","🤩","😵","🤯","🤣","💩","🖖","😇","🤔","🤪","😎","👾","🥵","😆","😅","😂","🙃","😋","👨‍💻","🐶","🏀","🔥","🍀","🤞"]; 


	const wordRef = useRef();

	const handleChange = (event, newValue) => {
		setIndex(newValue);
	}

	const onClick = () => {
		let index = Math.floor(Math.random()*words.length);
		setWord(words[index]+words[index]+words[index]);
		setWordCss("wordBox");
		setTimeout(()=>{
			setWordCss("wordBox-fadeOut");
		}, 1000);	
	}

	// document.addEventListener()


	return (
		<Fragment>

		<div className="navbar">
		<Grid container spacing={2} direction="column" sx={{position: "fixed", background:"none", zIndex:1}}>

			<Grid item xs={12} container>
				<Grid item xs={1}></Grid>

				<Grid item xs={10}>
					<Grid item xs={12} container>
						<Grid item xs={2}></Grid>
						<Grid item xs={1}>
							<Box className="avatarBox">
								<Tooltip title="Hello there! 👋">
								<img src={avatar} alt="" className="avatar" onClick={onClick}/>
								</Tooltip>
							</Box>
						</Grid>
						<Grid item xs={1}>
							<Box className={wordCss} ref={wordRef}>
								{word}
							</Box>
						</Grid>
						<Grid item xs={8}>
							<Box className="tabBox" >
								<Tabs value={index} onChange={handleChange} centered >
									<Tab disableRipple={true} label="Home" style={{minWidth:"15%"}}/>
									<Tab disableRipple={true} label="Notes" style={{minWidth:"15%"}}/>
									<Tab disableRipple={true} label="Album" style={{minWidth:"15%"}}/>
									<Tab disableRipple={true} label="About" style={{minWidth:"15%"}} />
								</Tabs>
							</Box>
						</Grid>
					</Grid>
				</Grid>

				<Grid item xs={1}></Grid>
			</Grid>


		</Grid>
		</div>


			{/* </Box> */}
		</Fragment>
	)
}