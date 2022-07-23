import React, { Fragment } from 'react'
import '../static/css/noteSideBarRight.css'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function NoteSideBarRight() {

  const topicList = [
    {topicId:1, topicName:"java"},
    {topicId:2, topicName:"mysql"},
    {topicId:3, topicName:"react"},
    {topicId:4, topicName:"css"},
    {topicId:5, topicName:"github"},
    {topicId:6, topicName:"javascript"},
    {topicId:7, topicName:"linux"},
    {topicId:8, topicName:"docker"},
    {topicId:9, topicName:"jenkins"},
    {topicId:10, topicName:"bash"},
    {topicId:11, topicName:"diary"},
    {topicId:12, topicName:"english"},
    {topicId:13, topicName:"tweet"},
  ];

  return (
    <Fragment>
      <div className="noteSideBarRightDiv">
        <div className="searchDiv">
          <div className="searchInput">
            <Paper
              component="form"
              sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "20vw", border:"1px solid rgb(224,224,224)", borderRadius: 30, boxShadow:"none" }}
              // elevation={1}
            >
              <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="search"
                inputProps={{ 'aria-label': 'search' }}
              />

            </Paper>
          </div>

          <div className="statistics">
            <span className="notesNumber">
              123
            </span>
            <span className="likesNumber">
              456
            </span>
            <br />
            <span className="notesNumberText">
              notes
            </span>
            <span className="likesNumberText">
              likes
            </span>
          </div>

        </div>

        <hr className="divider" />

        <div className="topicsDiv">
          <div className="topicTitle">
            <span className="topicText">
              Topics:
            </span>
          </div>
          <div className="topics">
            {topicList.map(
              (topic) => {
                return <button key={topic.topicId} className="topicButton">{topic.topicName}</button>
              }
            )}
          </div>
          

        </div>
      </div>
    </Fragment>
  )
}
