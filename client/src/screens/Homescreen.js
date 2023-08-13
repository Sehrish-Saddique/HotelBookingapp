import React, { useState, useEffect } from "react";
import axios from "axios";
import Room from "../components/Room";
import Loader from "../components/Loader";
import Error from "../components/Error";
function Homescreen() {
    const[loading,setloading]=useState();
    const [error, seterror] = useState();

    const[rooms, setrooms]= useState([]);

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

  return (
    <div className="conatiner">
    <div className="row justify-content-center mt-10">
             {loading ? (
                <h2><Loader/></h2>
            ) : rooms.length > 1? (  
                
                <>
                    <div>
                    
                    <ol>
                    
                        {rooms.map(room=>{
                            return <div className="col-md-9 mt-2">
                            <Room room={room}/>
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
