import React from 'react'

function Inputcomp() {
  return (
    <form className='inputfields'>
      <input type="text" name='name' placeholder='Name'/>
      <input type="text" name='username' placeholder='UserName' />
      <input type="email" name='email'placeholder='Email' />
      <input type="text" name='mobile'placeholder='Mobile'/>
      <button type='submit'>SIGN UP</button>
    </form>
  )
}

export default Inputcomp
