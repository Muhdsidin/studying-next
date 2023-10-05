import { useRouter } from 'next/router'
import React from 'react'

function params() {
  const router = useRouter()
  const {params= []} = router.query


  
  return (
    <div>
      this is docs page {params[0]}params
    </div>
  )
}

export default params
