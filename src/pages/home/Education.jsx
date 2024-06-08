import React from 'react'

const Education = () => {
    return (
        <section id="edu" className="pt-24 ">
            <h1 className="font-bold text-xl text-gray-300 pl-24 pb-16 font-name">
                Education
            </h1>
            <div className="border-dotted  font-fre border-4 border-gray-600 rounded-3xl lg:mx-48 pb-10  sm:m-2">
                {/* <!-- B.Tech --> */}
                <div className="text-gray-600 justify-between pl-5 pt-5 pr-5 ">
                    <div className='flex justify-between pb-3'>
                        <h3 className="underline">B.Tech Computer Science</h3>
                        <span>2020 - 2024</span>
                    </div>

                    <p className="pl-5 ">
                        APJ Abdul Kalam Technological University <br />
                        Marian Engineering College, Kazhakootam <br />
                        CGPA: 7.49
                        <br />
                        <p className='text-justify'>
                        Relevant Courses: Data Structure, Logic System Design, Java, Database Management Systems, Operating System, Computer Networks, Compiler Design, Distributed Computing, Mobile Computing, Soft Computing.
                        </p>
                    </p>
                </div>
                {/* <!-- Higher Secondary Education --> */}
                <div className="text-gray-600 justify-between pl-5 pt-5 pr-5">
                    <div className='flex justify-between pb-3'>
                        <h3 className="underline">Higher Secondary Education</h3>
                        <span>2018 - 2020</span>
                    </div>

                    <p className="pl-5">
                        Directorate of General Education <br />
                        Percentage: 89.90
                        <br />
                        Relevant Courses: Computer Science, Mathematics, Physics, Chemistry.
                    </p>
                </div>
                {/* <!-- Secondary Education --> */}
                <div className="text-gray-600 justify-between pl-5 pt-5 pr-5">
                    <div className='flex justify-between pb-3'>
                        <h3 className="underline">Secondary Education</h3>
                        <span>2018</span>
                    </div>
                    <p className="pl-5">
                        Kerala Board Of Public Examinations <br />
                        Percentage: 95
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Education