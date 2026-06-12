import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
      Home Page!
      </div>
      <Link href={"/about"}>About</Link> <br/>
      <Link href={"/about/services"}>Services</Link>
      </div>
  );
}
