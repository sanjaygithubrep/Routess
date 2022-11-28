import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
        <img src="https://images.pexels.com/photos/13228345/pexels-photo-13228345.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
   <Link to="/">Previous Page</Link>
    </div>
  )
}

export default Home