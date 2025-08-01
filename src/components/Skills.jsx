import React from 'react'
import deviconSvgs from '../constants/deviconSvgs';

const Skills = () => {

    return (
        <section id="skills" className="px-6 py-10">
            <div className="mx-auto">
                <h2 className="text-4xl text-left mb-4">Skills</h2>
                <div className="flex flex-wrap">
                    {deviconSvgs.map((icon, index) => (
                    <div key={index} className="p-2 flex flex-col items-center group">
                        <img src={icon.src} alt={icon.name} className="w-16 h-16 transition-transform duration-300 group-hover:scale-110" />
                        <p className="mt-2 text-sm group-hover:text-blue-600">{icon.name}</p>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills;