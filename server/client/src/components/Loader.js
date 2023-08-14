import React from 'react'
import { BounceLoader } from 'react-spinners'
function Loader() {
    let [loading, setLoading] = React.useState(true);
        
  return (<>
     <div className=" sweet-loading row justify-content-center mt-100">
    <BounceLoader color="#0d327b"  loading={loading}  />
    </div> 
    </>
  )
}

export default Loader