import Container from "@components/container";
import settings from "../../../config.json";

import Link from "next/link";

export default function Footer({}){
  return (
    <footer className="border-t mt-8">
      <Container>
        <div className="py-10 flex flex-col justify-start items-start">
          <div>
            <nav className="flex text-black -m-2 text-xl font-bold">
              <Link href="/about" className="m-2">
                About
              </Link>
              <Link href="/contact" className="m-2">
                Contact
              </Link>
            </nav>
          </div>
          <div className="my-2 text-gray-500">
            <div>Made with Next.js</div>
          </div>
        </div>
      </Container>
    </footer>
  )
}