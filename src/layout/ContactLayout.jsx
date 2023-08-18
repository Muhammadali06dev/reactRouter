import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function ContactLayout() {
   return (
      <>
         <div>
            <h1>Contact</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo alias error reiciendis numquam minus, accusantium vero itaque quis maiores fugit natus obcaecati inventore expedita architecto minima ducimus reprehenderit corrupti tempore. Beatae, iste quae ratione est veritatis ipsam odit a ab amet dolorem voluptas nihil officiis, sed saepe architecto alias laborum, ullam vero maiores quasi soluta repudiandae? Quae natus qui dolore ipsum, suscipit impedit officiis accusantium voluptate reiciendis maxime distinctio voluptatum porro illo placeat necessitatibus excepturi nesciunt ipsa similique! Aliquid consequuntur assumenda culpa officiis, fuga ducimus perspiciatis vero necessitatibus, nostrum quae atque? Facere eum fuga laborum qui culpa nisi deleniti enim!</p>
         </div>
         <hr />
         <nav>
            <Link to="faq">FAQ</Link>
            <Link to="form">Form</Link>
         </nav>
         <Outlet></Outlet>
      </>
   )
}

export default ContactLayout