import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import Loader from "../components/Loader";
import Error from "../components/Error";  
import moment from 'moment';

function Bookingscreen({match} ) {
    const { roomid , fromdate,todate } = useParams();
    // const { fromdate } = moment(useParams()).format('DD-MM-YYYY');
    // const { todate } = moment(useParams()).format('DD-MM-YYYY');
    console.log(fromdate);
    
    console.log(todate);
    console.log(roomid);
    const[loading,setloading]=useState(true);
    const [error, seterror] = useState();
    const[room, setroom]= useState([]);
 
  // const totaldays = moment.duration(todate.diff(fromdate)).asDays();
    useEffect(() => {
        async function fetchdata() {
            try {
                setloading(true);
                const response = (await axios.post('/api/rooms/getroombyid',{roomid} ));
              //  const responseData = response.data; // Access .data property here

                console.log(response);
                setroom(response.data);
                setloading(false);
            } catch (error) {
                seterror(true);
                console.error("AxiosError:", error);
                setloading(false);
            }
        }
            
        fetchdata();
      }, []);
  return (
    <>
 
      <div className="conatiner">
    <div className="row justify-content-center mt-10">
             {loading ? (
                <h2><Loader/></h2>
            ) : room ? (  
              

                <>
                    <div className='row justify-content-center'>
                     <div className="col-md-4">
                        <h1>{room.name}</h1>
                        <img src={room.imageUrl[0]} className="img-fluid bigimg" alt="image"/>
                         
                     </div>
                     <div className="col-md-5">
                        <h1>Booking Details</h1>
                        <hr/>
                       <b>
                       <p>Name : </p>
                        <p>From Date : {fromdate}</p>
                        <p>to Date : {todate}</p>
                        <p>Max Count : {room.maxcount} </p>
                       </b>
                     </div>
                        <div className="col-md-3">
                        <h1>Amount : </h1>
                        <hr/>
                        {/* <p>Total days : {totaldays} </p> */}
                        <p>Rent per day : {room.rentperday}</p>
                        <p>Total Amount : </p>
                        </div>

                        <div style={{float:'right'}}>
                            <button className="btn btn-primary">Pay Now</button>
                        </div>
                    </div>
                </>
                
            ) : (
                <Error/>
            )}
        </div>
        </div>
    </>
  )
}

export default Bookingscreen