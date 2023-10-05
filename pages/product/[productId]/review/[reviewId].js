import { useRouter } from 'next/router'
import React from 'react'

function reviewId() {
    const router = useRouter()
    const {productId, reviewId} = router.query
  return (
    <div>
      this is reviewId : {reviewId},
      this is productId : {productId}
    </div>
  )
}

export default reviewId
