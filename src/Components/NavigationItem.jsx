import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavigationItem.css'
export default function NavigationItem(props) {
  return (
      <NavLink to={props.path}>
          <div className="nav-item" 
          onMouseEnter={(e) => { e.target.children[0].src = props.hover }} 
          onMouseLeave={(e) => { e.target.children[0].src = props.icon }}>
              <img  src={props.icon} alt={props.go} />
              <p>{props.go}</p>
          </div>
      </NavLink>
  )
}
