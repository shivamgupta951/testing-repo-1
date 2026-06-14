import React from "react";
interface PageProps {
  params: Promise<{ [key: string]: string | string[] | undefined }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const page = async ({ params , searchParams}: PageProps) => {
  const resolvedParams = await params;
  const {servs} = resolvedParams;
  console.log(resolvedParams);
  return (
    <div className="min-h-screen flex justify-center items-center">
      {servs}
    </div>
  );
};

export default page;
