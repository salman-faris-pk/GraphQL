import React, { useState } from 'react'
import { useMutation, useQuery} from "@apollo/client"
import {QUERY_ALL_USERS,USER_MUTATION} from "../DefineDatas"


const UserDatas = () => {

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(0);
  const [nationality, setNationality] = useState("");

  const {data, loading, refetch}=useQuery(QUERY_ALL_USERS)
  const [createUser]=useMutation(USER_MUTATION)
  

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


     
   <div class="form-container">
     <input type="text" placeholder="Name..." class="custom-input"  onChange={(event) => {
            setName(event.target.value);
          }}/>
     <input type="text" placeholder="Username..." class="custom-input"   onChange={(event) => {
            setUsername(event.target.value);
          }}/>
    <input type="number" placeholder="Age..." class="custom-input"  onChange={(event) => {
            setAge(event.target.value);
          }}/>
     <input type="text" placeholder="Nationality..." class="custom-input" onChange={(event) => {
            setNationality(event.target.value.toUpperCase());
          }}/>
    <button class="custom-button"
     onClick={()=>{
       createUser({
        variables: {
          input: {name,username,age:Number(age),nationality}
        }
       });

       refetch();
     }}
    >Create User</button>
</div>



      
    </div>
  )
}

export default UserDatas