import React from 'react'
import TextVideo from '../../components/TextVideo'
import avator2 from '../../static/img/avator2.JPG'

import '../../static/css/home.css'
import Button from '@mui/material/Button';
import JavaIcon from '../../components/JavaIcon'
import { styled } from '@mui/material/styles';
import { height } from '@mui/system';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Header from '../../components/Header'
import MeAndIcons from '../../components/MeAndIcons'
import { Grid } from '@mui/material'
import LeftBanner from '../../components/LeftBanner';
import RightBanner from '../../components/RightBanner';
import Portfolio from '../../components/Portfolio';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <div>



      <Header />


            <LeftBanner />
            <RightBanner />

            <TextVideo />
            <MeAndIcons />
            <Portfolio />

            

      <Footer />

    </div>
  )
}