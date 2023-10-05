import axios from 'axios'
import React from 'react'
const URL = "https://jsonplaceholder.typicode.com/users"

function index({user}) {
  //  console.log(user)
  return (
    <div>
      this is static generation page For pre-rendring
      {user.map((val)=>(
        <div>
            {val.name}
        </div>
      ))} 
    </div>
  )
}


export default index
export async function getStaticProps (){
    const response = await axios(URL)
   // console.log(response.data)
    const data = response.data

    return {
        props:{
            user:data
        }
    }
}
