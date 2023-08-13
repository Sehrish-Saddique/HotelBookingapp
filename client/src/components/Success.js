import React from 'react'

function Success({message}) {
  return (
    <div>
        <div class="alert alert-success mt-20" role="alert">
            {message}
</div>
    </div>
  )
}

export default Success