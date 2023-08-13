import React from 'react'

function Error({message}) {
  return (
    <div>
        <div class="alert alert-danger mt-20" role="alert">
        {message}
        </div>
    </div>
  )
}

export default Error