import React from 'react'

const Projects = () => {
    return (
        <section id="project" class="pt-24">
            <h1 class="font-bold pl-24 text-gray-300 text-lg font-name">Project</h1>
            {/* <!-- Project 1 --> */}
            <div className='border-dotted border-4 border-gray-600 rounded-3xl mx-48 pb-10 '>
            <h3 class="mt-6 mb-2 text-gray-600 text-lg pl-12 ">
                <u>Concisely</u>
            </h3>
            <div class="text-gray-600 pl-16 ">
                <ul class="list-disc">
                    <li class="pb-2">Developed a responsive web application using Python and Node.js serving a custom API with React as the frontend.</li>
                    <li class="pb-2">Optical Character Recognition (OCR) is successfully implemented to read text from images for summarization.</li>
                    <li>Can translate summaries to the user's preferred language and has accessibility features.</li>
                </ul>
            </div>
            {/* <!-- Project 2 --> */}
            <h3 class="mt-6 mb-2 text-gray-600 text-lg pl-12">
                <u>VisionX</u>
            </h3>
            <div class="text-gray-600 pl-16">
                <ul class="list-disc">
                    <li class="pb-2">Visitor management system that has OCR integrated for ease of visitor check-in.</li>
                    <li class="pb-2">The admin can securely access the system by authenticating with their assigned username and password.</li>
                    <li>Upon registration in the system, visitors will instantly receive a personalized email containing a unique QR code for their visit.</li>
                </ul>
            </div>
            </div>
        </section>

    )
}

export default Projects