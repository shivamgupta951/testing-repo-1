import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <div>
        Service page!
      </div>
      <Link href={"/"}>
        Home-Page
      </Link>
    </div>
  )
}

export default page
