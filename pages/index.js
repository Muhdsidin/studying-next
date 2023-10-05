import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {push} = useRouter()
  const handleProgrammiCallyNav =()=>{

    alert("redirecting To Counter Page")
    setTimeout(() => {
      push("/counter")
    }, 2000);// this is programmically naviagte one page to another page 
  }

  // this is navigate form one page to another page 
  return (
    <>
    <h2>
      THis is Home PAge OF OUr WebSite<br />
      Product Page : <Link href="/product">hello</Link> <br />
      Todo Page : <Link href="/todo">Hello</Link> <br /> 
      <button onClick={handleProgrammiCallyNav}>Go To </button>

    </h2>
        </>
  )
}
