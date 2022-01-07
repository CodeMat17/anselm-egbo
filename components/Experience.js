import { experiences } from '../data/experienceData'

function Experience() {
    return (
        <div className="bg-gray-100 text-black">
            <div className="px-4 py-14 max-w-3xl mx-auto">
                <h1 className="font-rye text-2xl text-center sm:text-4xl">
                    EXPERIENCE
                </h1>
                {experiences && experiences.map(experience => (
                    <ul key={experience.id} className="pt-6">
                        <li className="font-semibold text-lg">
                            {experience.item}
                        </li>
                    </ul>
                ))}                
            </div>
        </div>
    )
}

export default Experience
