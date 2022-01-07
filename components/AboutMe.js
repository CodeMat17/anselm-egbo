import Link from 'next/Link';

function AboutMe() {
    return (
        <div className="bg-gray-100 text-black">
            <div className="px-4 py-14 tracking-widest max-w-3xl mx-auto">
                <h1 className="font-rye text-2xl text-center sm:text-4xl">
                    ABOUT ME
                </h1>
                <p className="pt-6 ">
                    My name is Barr. Anselm A. Egbo I am 
                    lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <p className="pt-6 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <div className="mt-12 p-2 max-w-xs mx-auto flex justify-center">
                    <Link href="/ssg">
                        <a className="bg-gray-700 px-4 py-2 text-gray-300 font-bold rounded-md">
                            GOTO SSG
                        </a>
                    </Link>
                </div>
                
            </div>            
        </div>
    )
}

export default AboutMe
