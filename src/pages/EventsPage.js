import React from 'react'
import { Link } from 'react-router-dom'
import './EventsPage.css'
function EventsPage() {
  return (
    <>
    <div className='evePage'>
    <h1 className='h1Eve'>
        KNITTING THE PAGE
    </h1>
    <Link to="/">
        <button class="eveHom">Home</button>
    </Link>
    </div>
    </>
    
  )
}

export default EventsPage;
