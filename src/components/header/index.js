import Link from "next/link" ;

import Container from "@components/container";
import settings from "../../../config.json";

export default function Header({ siteName }) {
  return (
    <header className="sticky top-0 z-50 py-4 px-0 shadow-xl bg-white">
      <Container>
        <nav className="flex flex-col md:flex-row justify-between items-stretch md:items-center md:overflow-x-auto">
          <div className="flex flex-grow items-center justify-between mb-4 md:mb-0">
            <Link href="/">
              <a className="py-2 text-2xl"><img className="h-12" src={settings.logo} /></a>
            </Link>
            <Link href="/"><a className="md-hidden btn">Contact</a></Link>
          </div>
          <div className="flex overflow-x-auto -m-2">
            <Link href="/about"><a className="w-full md:w-auto m-2 flex-shrink-0">About</a></Link>
          </div>
          <div className="sm-hidden ml-6">
            <Link href="/contact"><a className="btn">Contact</a></Link>  
          </div>
        </nav>
      </Container>
    </header>
  )
}