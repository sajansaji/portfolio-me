import React from 'react'
import '@/assets/css/shadow.css'
const Projects = () => {
    return (
        <section id="project" className="pt-24 font-fre">
            <h1 className="font-bold text-center text-gray-300 text-lg font-name">Project</h1>
            {/* <!-- Project 1 --> */}
            <div className='border-dotted shad border-4 border-gray-600 rounded-3xl lg:mx-48 pb-10 mt-20  text-justify'>
            <h3 className="mt-6 mb-2 text-gray-600 text-lg pl-12 ">
                <u>Concisely</u>
            </h3>
            <div className="text-gray-600 px-16   ">
                <ul className="list-disc">
                    <li className="pb-2">Developed a responsive web application using Python and Node.js serving a custom API with React as the frontend.</li>
                    <li className="pb-2">Optical Character Recognition (OCR) is successfully implemented to read text from images for summarization.</li>
                    <li>Can translate summaries to the user's preferred language and has accessibility features.</li>
                </ul>
            </div>
            {/* <!-- Project 2 --> */}
            <h3 className="mt-6 mb-2 text-gray-600 text-lg pl-12">
                <u>VisionX</u>
            </h3>
            <div className="text-gray-600 px-16">
                <ul className="list-disc">
                    <li className="pb-2">Visitor management system that has OCR integrated for ease of visitor check-in.</li>
                    <li className="pb-2">The admin can securely access the system by authenticating with their assigned username and password.</li>
                    <li>Upon registration in the system, visitors will instantly receive a personalized email containing a unique QR code for their visit.</li>
                </ul>
            </div>
            </div>
        </section>

    )
}

export default Projects