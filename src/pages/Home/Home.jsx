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

export default function Home() {
  return (
    <div>



      <Header />

      <Grid container spacing={2} direction="column">
        <Grid item xs={12} container>

          <Grid item xs={1} sx={{ position: "fixed", background: "none", zIndex: 1 }}>
            <LeftBanner />
          </Grid>

          <Grid item xs={10}>
            <TextVideo />
            <MeAndIcons />
          </Grid>

          <Grid item xs={1} sx={{ position: "fixed", background: "none", zIndex: 1 }}>
            <RightBanner />
          </Grid>

        </Grid>
      </Grid>
    </div>
  )
}