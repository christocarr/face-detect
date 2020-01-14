import React from 'react'
import './UserRank.css'

const UserRank = ({ userName }) => {
  return (
    <div className="center">
      <p>{userName}, your rank is </p>
    </div>
  )
}

export default UserRank