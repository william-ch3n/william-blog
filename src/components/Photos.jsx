import React, { Fragment, useEffect, useRef } from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import '../static/css/photos.css'

export default function Photos() {

  const photoRef = useRef();
  const photoModal = useRef();

  useEffect(() => {

  }, []);

  const clickPhoto = (imgSrc) => {
    photoModal.current.style.display = "block";
    photoRef.current.src = imgSrc;
  }

  const closePhoto = () => {
    photoModal.current.style.display = "none";
  }

  window.onclick = (event) => {
    if (event.target.className === "modal") {
	    closePhoto();
	  }
  }  


  const itemData = [
    {
      img: 'photos/1.jpg',
      title: 'tokyo tower',
    },
    {
      img: 'photos/2.jpg',
      title: 'Kitchen',
    },
    {
      img: 'photos/3.jpg',
      title: 'Sink',
    },
    {
      img: 'photos/4.jpg',
      title: 'Books',
    },
    {
      img: 'photos/5.jpg',
      title: 'Chairs',
    },
    {
      img: 'photos/6.jpg',
      title: 'Candle',
    },
    {
      img: 'photos/7.jpg',
      title: 'Laptop',
    },
    {
      img: 'photos/8.jpg',
      title: 'Doors',
    },
    {
      img: 'photos/9.jpg',
      title: 'Coffee',
    },
    {
      img: 'photos/10.jpg',
      title: 'Storage',
    },
    {
      img: 'photos/11.jpg',
      title: 'Coffee table',
    },
    {
      img: 'photos/12.jpg',
      title: 'Blinds',
    },
    {
      img: 'photos/13.jpg',
      title: 'Blinds',
    },
    {
      img: 'photos/14.jpg',
      title: 'Blinds',
    },
    {
      img: 'photos/15.jpg',
      title: 'Blinds',
    },
  ];

  return (
    <Fragment>
      <div className="modal" ref={photoModal}>
        <div className="modal-content">
          <span className="close" onClick={closePhoto}>&times;</span>
          <img src="" className="photoView" ref={photoRef}/>
        </div>
      </div>

      <div className="photosDiv">
        <ImageList sx={{ width: "80vw", height: "60vw" }} variant="woven" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={item.img}
                srcSet={item.img}
                alt={item.title}
                loading="lazy"
                onClick={() => clickPhoto(item.img)}
                className="photo"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </Fragment>
  )
}
