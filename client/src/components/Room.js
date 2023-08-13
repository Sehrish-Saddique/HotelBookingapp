import React from 'react'
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
 import { Link } from 'react-router-dom';
 function Room({ room }) {

    const [show, setShow] = useState(false);

    const handleClose = () =>{
        setShow(false)};
    const handleShow = () => {
        setShow(true)}; 

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
   
    <>
      <div className= "flex-row  bg-light bg-opacity-10 bs">
        <div className="col-md-4">
          <img
            src={room.imageUrl[0]} className="smallimg"
          />
        </div>
        <div className="col-md-7 text-left">
          <h1>{room.name}</h1>
          <b>
            <p> Max Count:{room.maxcount} </p>

            <p> Phone Number:{room.phonenumber} </p>
            <p> Rent per day:{room.rentperday}  (US$) </p>
            <p> Type:{room.type} </p>
          </b>
          <div>
            <Button variant="btn btn-primary p-2 mb-3" onClick={handleShow}>
                View Details
            </Button>
            <Link to= {`/book/${room._id}`}>
            <Button variant="btn btn-primary p-2 mb-3">
                Book Now
            </Button>
            </Link>
          </div>
        </div>
     

      

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>{room.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Woohoo, you are reading this text in a modal!
        <Carousel activeIndex={index} onSelect={handleSelect}>
         {room.imageUrl.map(url=>{
            return <Carousel.Item>
      <img
            src={url} className="bigimg"
          />
      </Carousel.Item>
         })}
       
      
    </Carousel>
    <p>{room.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary btn" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </>
  );
}

export default Room