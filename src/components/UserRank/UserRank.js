import React from 'react'
import './UserRank.css'

const UserRank = ({ userName, rank }) => {
  return (
    <div className="center">
      <p>{userName}, your rank is {rank}</p>
    </div>
  )
}

export default UserRank