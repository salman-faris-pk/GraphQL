import React from 'react'
import { useQuery} from "@apollo/client"
import {QUERY_ALL_USERS} from "../DefineDatas"


const UserDatas = () => {

  const {data, loading, refetch}=useQuery(QUERY_ALL_USERS)

  if (loading) {
    return <h5>LOADING...</h5>;
  }
  
  return (
    <div className='User'>
      <h1>UserDatas</h1>
      <div className='cards'>
      {data && 
       data.users.map((user)=> (
        <div className="user-card" key={user.id}>
        <h1 className="user-info">Name: {user.name}</h1>
        <h1 className="user-info">Username: {user.username}</h1>
        <h1 className="user-info">Age: {user.age}</h1>
        <h1 className="user-info">Nationality: {user.nationality}</h1>
        <h1 className="user-info">
                Friends:{" "}
                {user.friends && user.friends.length > 0 ? (
                  user.friends.map((frd,i) => (
                    <span key={frd.id}>
                      {frd.name}
                      {i < user.friends.length - 1 && ", "}
                    </span>
                  ))
                ) : (
                  <span>No friends</span>
                )}
              </h1>
      </div>
       ))
      }
      </div>






      
    </div>
  )
}

export default UserDatas