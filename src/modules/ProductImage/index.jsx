import Typography from '@/shared/components/Typography'
import React from 'react'

const ProductImage = () => {
  return (
    <div>
<div className="relative flex flex-col items-center gap-4 bg-white">
  <div className="bg-white border border-[#C6853F] px-6 py-2 rounded-full shadow-sm cursor-default">
    <Typography variant="content2" className="text-[#C6853F] font-semibold">
      What keeps us on Top
    </Typography>
  </div>

  <Typography
    variant="heading2"
    text="Our Expert Services"
    className="text-center mt-4 text-[#C6853F]"
  />
</div>


    </div>
  )
}

export default ProductImage