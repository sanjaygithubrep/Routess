import React from 'react'
import { Link } from "react-router-dom"


const Nav = () => {
  return (
    <div className="container">
        <div className="row1">
            <div className="abox">
                <h1>Olx Clone</h1>
            </div>
            <div className="bbox">
             <button className="btn1">Login</button>
             <button className="btn2">Signup</button>
             <button className="btn3">Post Free Ad</button>
             <Link to="/Home">Next Page</Link> 
             

            </div>
        </div>

    </div>
  )
}

export default Nav