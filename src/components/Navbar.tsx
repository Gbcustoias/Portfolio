import Link from "next/link"; 

export default function Navbar() { 
  return ( 
    <nav> 
      <Link href="/">home</Link> 
      <Link href="/projeto">projeto</Link> 
      <Link href="/certificados">certificados</Link> 
      <Link href="/sobre">sobre</Link> 
    </nav> 
  ); 
}
