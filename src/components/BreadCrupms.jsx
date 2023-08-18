import React from 'react'
import { useLocation, NavLink } from 'react-router-dom'


function BreadCrupms() {
   const location = useLocation()
   const currentLink = []

   const crumps = location.pathname.split("/")
      .filter((item) => item !== '')
      .map(item => {
         currentLink.push(`/${item}`)
         return (
            <div className='crump'>
               <NavLink to={currentLink.join('')}>{item}</NavLink>
            </div>
         )
      })
   console.log(crumps)
   return (
      <div className='breadCrumps'>
         {crumps}
      </div>
   )
}

export default BreadCrupms