import React from 'react'

interface PageProps {
  params: Promise<{ [key: string]: string | string[] | undefined }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const page = async ({params,searchParams} : PageProps) => {
    const paramObject = await params;
    const {todoSchdule} = paramObject; 
  return (
    <div className='flex justify-center items-center min-h-screen'>
      {todoSchdule}
    </div>
  )
}

export default page
