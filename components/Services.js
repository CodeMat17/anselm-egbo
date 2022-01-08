import { servicesData } from '../data/servicesData'

function Services() {
    return (
        <div className="px-4 py-14 max-w-3xl mx-auto">
            <h1 className="font-rye text-2xl text-center sm:text-4xl">
                LEGAL SERVICES
            </h1>
            <div className="pt-6">
                {servicesData && servicesData.map(services => (
                    <ul key={services.id}>
                        <li className="flex items-center py-4 font-semibold">
                            <span className="rotate-45 text-pink-500 pr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </span> 
                            {services.item}
                        </li>
                    </ul>
                ))}
            </div>
        </div>
    )
}

export default Services
