import React, { useState, useEffect } from "react";
import axios from "axios";
import Room from "../components/Room";
import Loader from "../components/Loader";
import Error from "../components/Error";
import {DatePicker, Space} from 'antd';
import moment from 'moment';
 function Homescreen() {
    const[loading,setloading]=useState();
    const [error, seterror] = useState();

    const[rooms, setrooms]= useState([]);
    const { RangePicker } = DatePicker;
    const [fromdate, setfromdate] = useState();
    const [todate, settodate] = useState();

   
  useEffect(() => {
    async function fetchdata() {
        try {
            setloading(true);
            const response = await axios.get('/api/rooms/getallrooms');
            const responseData = response.data.rooms; // Access .data property here
            console.log(responseData);
            setrooms(responseData);
            setloading(false);
        } catch (error) {
            seterror(true);
            console.error("AxiosError:", error);
            setloading(false);
        }
    }
        
    fetchdata();
  }, []);


  function filterbydate(dates)
  {
        console.log(dates);
        const fromdate=(dates[0]).format('DD-MM-YYYY');
        const todate=(dates[1]).format('DD-MM-YYYY');
        console.log(fromdate+" I am fromdate");
        console.log(todate+" I am todaet");
        setfromdate(fromdate);
        settodate(todate);
   }
    
  return (
    <div className="conatiner">
    <div className="row justify-content-center mt-5">
    <div className="col-md-5 mt-5 text-center">
    <RangePicker format="DD-MM-YYYY" onChange={filterbydate}/>
    </div> 
    </div>
    <div className="row justify-content-center mt-10">
             {loading ? (
                <h2><Loader/></h2>
            ) : rooms.length > 1? (  
                
                <>
                    <div>
                    
                    <ol>
                    
                        {rooms.map(room=>{
                            return <div className="col-md-9 mt-2">
                            <Room room={room} fromdate={fromdate} todate={todate}/>
                              </div>
                        })}
                    </ol>
                    </div>
                </>
            ) : (
                <Error/>
            )}
        </div>
        </div>
  );
}

export default Homescreen;
