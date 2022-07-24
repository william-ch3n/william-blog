import React, { Fragment, useEffect } from 'react'
import TagIcon from '@mui/icons-material/Tag';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import '../static/css/articles.css'
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useSelector } from 'react-redux';
import Pagination from '@mui/material/Pagination';
import { Box } from '@mui/material';

export default function Articles() {

  const {mainTag} = useSelector(state => state.notesReducer);

  useEffect(()=>{
    console.log("check mainTag:",mainTag);
  },[mainTag]);

  const articles = [
    { articleId: 1, articleTitle: "Title could be very very long, Title could be very very long", articleBody: "Let me just bullshit something to pretend to demonstrate the article body as if there really is a such thing", articleMainTag: "Java", articleSubTag: "basic", articleComments: 11, articleLikes: 31, articleImg: "java.png" },
    { articleId: 2, articleTitle: "Title could be very very long, Title could be very very long", articleBody: "Let me just bullshit something to pretend to demonstrate the article body as if there really is a such thing", articleMainTag: "MySql", articleSubTag: "basic", articleComments: 12, articleLikes: 32, articleImg: "mysql.png" },
    { articleId: 3, articleTitle: "Title could be very very long, Title could be very very long", articleBody: "Let me just bullshit something to pretend to demonstrate the article body as if there really is a such thing", articleMainTag: "React", articleSubTag: "basic", articleComments: 13, articleLikes: 33, articleImg: "react.png" },
    { articleId: 4, articleTitle: "Title could be very very long, Title could be very very long", articleBody: "Let me just bullshit something to pretend to demonstrate the article body as if there really is a such thing", articleMainTag: "Javascript", articleSubTag: "basic", articleComments: 14, articleLikes: 34, articleImg: "javascript.png" },
    { articleId: 5, articleTitle: "Title could be very very long, Title could be very very long", articleBody: "Let me just bullshit something to pretend to demonstrate the article body as if there really is a such thing", articleMainTag: "Css", articleSubTag: "basic", articleComments: 15, articleLikes: 36, articleImg: "css.png" },
  ];

  const subTags = [
    "all", "basic", "sprintboot", "junit"
  ];


  const changeFilter = () => {
    var filterArray = document.getElementsByClassName("filter-tab");
    for(var i = 0; i < filterArray.length; i++){
      if(filterArray[i].className === "filter-tab active")
        filterArray[i].className = "filter-tab";
      else 
        filterArray[i].className = "filter-tab active";
    }
  }

  const selectSubTag = (event) => {
    var subTagArray = document.getElementsByClassName("sub-topic-button");
    for(var i = 0; i < subTagArray.length; i++){
      if(subTagArray[i].className === "sub-topic-button active")
      subTagArray[i].className = "sub-topic-button";
    }
    event.target.className = "sub-topic-button active";
  }

  return (
    <Fragment>
      <div className="articlesDiv">
        <div className="articleHeader">
          {mainTag != null &&
          <>
            <div className="topic">
              <TagIcon sx={{ fontSize: "2.5vw" }} />
              &nbsp;
              {mainTag}
            </div>

            <div className="sub-topic">
              {subTags.map((subTag, index)=>{
                if(subTag === "all")
                  return <button key={index} className="sub-topic-button active" onClick={event => selectSubTag(event)}>{subTag}</button>
                return <button key={index} className="sub-topic-button" onClick={event => selectSubTag(event)}>{subTag}</button>
              })}
            </div>
          </>
          }

          <div className="filter">
            <span className="filter-tab" onClick={changeFilter}>Latest</span>
            <span className="filter-tab active" onClick={changeFilter}>Best</span>
          </div>
        </div>

        <div className="articles">
          {
            articles.map((article) => {
              return (
                <div className="article" key={article.articleId}>
                  <div className="articleTitle">
                    {article.articleTitle}
                  </div>

                  <div className="articleBody">
                    {article.articleBody}
                  </div>

                  <div className="articleTags">
                    <button className="articleTag">{article.articleMainTag}</button>
                    <button className="articleTag">{article.articleSubTag}</button>
                  </div>

                  <div className="commentsAndLikes">
                    <MessageOutlinedIcon sx={{ fontSize: "1.5vw" }} />
                    <span className="commentsAndLikesNumber">{article.articleComments}</span>
                    <FavoriteBorderOutlinedIcon sx={{ fontSize: "1.5vw" }} />
                    <span className="commentsAndLikesNumber">{article.articleLikes}</span>
                  </div>

                  <div className="articleImg">
                    <img src={`articleImg/${article.articleImg}`} alt="" />
                  </div>
                </div>
              )
            })
          }
        </div>
        <Box justifyContent={"center"} alignContent={"center"} display={"flex"}  paddingTop={"3%"}paddingBottom={"3%"}>
          <Pagination count={10} size="large"/>
        </Box>
      </div>
    </Fragment>
  )
}
