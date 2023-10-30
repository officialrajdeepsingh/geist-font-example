import Link from "next/link";
import { Inter } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return (
    <section className={`${inter.className}  bg-gray-900 text-white"}`}>
      <div className="mx-auto  px-4 py-32 flex h-screen items-center">
        <div className="mx-auto max-w-3xl text-center">

          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"> How To use Geist Font
            <span className="sm:block"> in Nextjs? </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea! </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="/geistsans">
              Gist Sans Font Example
            </Link>

            <Link
              className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              href="/geistmono"
            >
              Geist Mono Font Example
            </Link>

          </div>
        </div>
      </div>
    </section>
  )
}
