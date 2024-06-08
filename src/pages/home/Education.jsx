import React from 'react'

const Education = () => {
    return (
        <section id="edu" class="pt-24">
            <h1 class="font-bold text-xl text-gray-300 pl-24 pb-16 font-name">
                Education
            </h1>
            <div class="border-dotted border-4 border-gray-600 rounded-3xl mx-48 pb-10">
                {/* <!-- B.Tech --> */}
                <div class="text-gray-600 justify-between pl-5 pt-5 pr-20">
                    <div className='flex justify-between pb-3'>
                        <h3 class="underline">B.Tech Computer Science</h3>
                        <span>2020 - 2024</span>
                    </div>

                    <p class="pl-5">
                        APJ Abdul Kalam Technological University <br />
                        Marian Engineering College, Kazhakootam <br />
                        CGPA: 7.49
                        <br />
                        Relevant Courses: Data Structure, Logic System Design, Java, Database Management Systems, Operating System, Computer Networks, Compiler Design, Distributed Computing, Mobile Computing, Soft Computing.
                    </p>
                </div>
                {/* <!-- Higher Secondary Education --> */}
                <div class="text-gray-600 justify-between pl-5 pt-5 pr-20">
                    <div className='flex justify-between pb-3'>
                        <h3 class="underline">Higher Secondary Education</h3>
                        <span>2018 - 2020</span>
                    </div>

                    <p class="pl-5">
                        Directorate of General Education <br />
                        Percentage: 89.90
                        <br />
                        Relevant Courses: Computer Science, Mathematics, Physics, Chemistry.
                    </p>
                </div>
                {/* <!-- Secondary Education --> */}
                <div class="text-gray-600 justify-between pl-5 pt-5 pr-20">
                    <div className='flex justify-between pb-3'>
                        <h3 class="underline">Secondary Education</h3>
                        <span>2018</span>
                    </div>
                    <p class="pl-5">
                        Kerala Board Of Public Examinations <br />
                        Percentage: 95
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Education