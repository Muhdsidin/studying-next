import { useParams } from 'next/navigation'
import { useRouter } from 'next/router'
import React from 'react'

function productId() {
    const router = useRouter()
    const productId = router.query.productId
  return (
    <div>
      this product details Page {productId? <>{productId}</> : <>loading ....</>}
    </div>
  )
}

export default productId
