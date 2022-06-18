import React from 'react'
import TextVideo from '../../common/TextVideo'


import avator2 from '../../static/img/avator2.JPG'

import '../../static/css/home.css'
import Button from '@mui/material/Button';
import JavaIcon from '../../common/JavaIcon'
import { styled } from '@mui/material/styles';
import { height } from '@mui/system';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Header from '../../common/Header'
import MeAndIcons from '../../common/MeAndIcons'

export default function Home() {
  return (
    <div>


      <Header />

      <div>
        <Button variant="contained">hello world</Button>
      </div>


      <div>
        <MeAndIcons />
      </div>

    </div>
  )
}