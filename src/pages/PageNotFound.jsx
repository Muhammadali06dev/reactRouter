import React from 'react'
import { NavLink } from 'react-router-dom'

function PageNotFound() {
   return (
      <div className='pageNotFound'>
         <h1>Page Not Found😪</h1>
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat soluta voluptates, eaque officiis, earum nisi quis dolorum omnis tempora maiores non? Natus nam voluptatum aliquid fugiat, voluptatem corrupti porro qui doloribus modi quam. Consequatur a illum saepe qui ut. Cum repellendus qui quos temporibus deleniti culpa adipisci repellat placeat quam.</p>
         <NavLink to="/">Home</NavLink>
      </div>
   )
}

export default PageNotFound