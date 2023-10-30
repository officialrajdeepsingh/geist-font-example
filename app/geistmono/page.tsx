import { GeistMono } from 'geist/font'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Geist Mono example ',
  description: 'Geist Fonts example ',
}
export default function Geist() {
    return (
        <div className={`${GeistMono.className} bg-white py-6 sm:py-8 lg:py-12`}>

            <div className="mx-auto max-w-screen-md px-4 md:px-8">

                <Link className='mt-4 text-left text-2xl font-light text-gray-500 sm:text-1xl md:mb-6' href={'/'}>Back</Link>

                <h1 className="my-8 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6">Geist Mono Font Example</h1>

                <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    The important factor when using filler text is that the text looks realistic otherwise it will not look very good.<br /><br />
                </p>

                <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing. <br /><br />
                </p>
                <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    Filler text is dummy text which has no meaning however looks very similar to real text. <br /><br />
                </p>
                <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is <Link href="#" className="text-indigo-500 underline transition duration-100 hover:text-indigo-600 active:text-indigo-700"> random </Link>
                </p>

                <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    or otherwise generated. It may be used to display a sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks very similar to real text.
                </p>

                <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">About us</h2>

                <p className="mb-6 text-gray-500 sm:text-lg md:mb-8"> It may be used to display a sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks very similar to real text.</p>

                <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">It may be used to display a sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks very similar to real text.</p>

                <ul className="mb-6 list-inside list-disc text-gray-500 sm:text-lg md:mb-8">
                    <li>This is a section of some simple filler text</li>
                    <li>Also known as placeholder text</li>
                    <li>It shares some characteristics of a real written text</li>
                </ul>

                <blockquote className="mb-6 border-l-4 pl-4 italic text-gray-500 sm:text-lg md:mb-8 md:pl-6">“This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.”</blockquote>

                <div className="relative mb-6 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:mb-8">
                    <Image width={600} height={350} src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600&h=350" loading="lazy" alt="Photo by Minh Pham" className="h-full w-full object-cover object-center" />
                </div>

                <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">Features</h2>

                <p className="text-gray-500 sm:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks very similar to real text.</p>
            </div>
        </div>
    )
}