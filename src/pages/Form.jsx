import React from 'react'

function Form() {
   return (
      <div>
         <form className='form-control'>
            <input type="email" placeholder='Enter your email...' />
            <textarea></textarea>
            <button>Send</button>
         </form>
      </div>
   )
}

export default Form