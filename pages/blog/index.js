import axios from 'axios'
import Link from 'next/link'
import React from 'react'

function index({blog}) {
  return (
    <>
     {blog.map((val)=>(
        <div key={val.id}>
            <Link href={`/blog/${val.id}`}>
        <h5>{val.title}</h5>
        </Link>
        </div>
     ))} 
    </>
  )
}

export default index

export async function getStaticProps(){
    const response = await axios("https://jsonplaceholder.typicode.com/posts")
    const data = response.data

    return{
        props:{
            blog:data
        }
    }
}
