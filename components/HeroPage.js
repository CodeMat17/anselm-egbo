import Image from "next/image"

function HeroPage() {
    return (
        <div className="px-4 pt-16 sm:pt-28 pb-14 flex flex-col justify-center items-center sm:flex-row sm:justify-evenly space-x-4">
            <div className="shadow-xl w-72 shadow-black rounded-full overflow-hidden">
               <Image
                    src="/anselm_img.jpg"
                    width={300}
                    height={300}
                /> 
            </div>            
            <div className="text-center pt-6">
                <h1 className="text-white font-bold text-2xl sm:text-4xl tracking-widest">
                    Barr. Anselm Egbo
                </h1>
                <p className="text-lg sm:text-2xl">Rank / Position</p>
                <p>&</p>
                <p className="text-lg font-semibold sm:text-2xl">C. E. O. Seleco Security Guard, SSG</p>
            </div>
        </div>
    )
}

export default HeroPage
