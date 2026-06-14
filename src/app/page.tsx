'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, {  useState } from "react";

export default function Home() {
  const [value, setValue] = useState("");
  const navigate = useRouter();
  const updateValue = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setValue(e.target.value);
  }
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>
  {
    e.preventDefault();
    if(value.trim())
    {
      navigate.push(`/about/services/${value}`)
    }
  }
  return (
    <div>
      <div>
      Home Page!
      </div>
      <Link href={"/about"}>About</Link> <br/>
      <Link href={"/about/services"}>Services</Link> <br/>
      <div className="min-h-screen flex justify-center items-center">
        <form className="flex space-y-16 justify-center items-center flex-col" onSubmit={handleSubmit}>
          <div className="text-4xl">FormFill</div>
          <label htmlFor="param">Input your url destination!</label>
          <input type="text" id="param" value={value} className="border" onChange={updateValue}/>
          <button type="submit" className="border p-2 rounded-md cursor-pointer">Navigate!</button>
        </form>
      </div>
      <Link href={`/about/services/${value}`}>click</Link>
      </div>
  );
}
