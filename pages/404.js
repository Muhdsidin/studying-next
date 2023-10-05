import Link from 'next/link'
import React from 'react'
// this is 404 page base not designed 
function Unknown() {
  return (
    <div>
      Sorry this is 404 Page please Go hame Page 
      <Link href="/">Go To </Link>
    </div>
  )
}

export default Unknown
