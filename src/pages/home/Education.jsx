
import '@/assets/css/shadow.css'

const Education = () => {
    return (
        <section id="edu" className="pt-24  ">
            <h1 className="font-bold text-xl text-[#999] text-center pb-10 font-name">
                Education
            </h1>
            <div className="border-dotted  shad font-fre border-4 border-[#999] rounded-3xl lg:mx-48 pb-10 mx-4 " >
                {/* <!-- B.Tech --> */}
                <div className="text-[#999] justify-between  pt-5 px-2 ">
                    <div className='flex justify-between pb-3 '>
                        <h3 className="underline lg:px-5">B.Tech Computer Science</h3>
                        <span className='lg:pr-5'>2020 - 2024</span>
                    </div>

                    <div className="lg:px-5">
                        APJ Abdul Kalam Technological University <br />
                        Marian Engineering College, Kazhakootam <br />
                        CGPA: 7.49<br />
                        Relevant Courses: Data Structure, Logic System Design, Java, Database Management Systems, Operating System, Computer Networks, Compiler Design, Distributed Computing, Mobile Computing, Soft Computing.
                    </div>
                </div>
                {/* <!-- Higher Secondary Education --> */}
                <div className="text-[#999] justify-between pt-5 pr-5 px-2 ">
                    <div className='flex justify-between pb-3'>
                        <h3 className="underline lg:px-5 ">Higher Secondary Education</h3>
                        <span>2018 - 2020</span>
                    </div>

                    <p className="lg:pl-5">
                        Directorate of General Education <br />
                        Percentage: 89.90
                        <br />
                        Relevant Courses: Computer Science, Mathematics, Physics, Chemistry.
                    </p>
                </div>
                {/* <!-- Secondary Education --> */}
                <div className="text-[#999] justify-between pt-5 pr-5 px-2 ">
                    <div className='flex justify-between pb-3 lg:pl-5 '>
                        <h3 className="underline">Secondary Education</h3>
                        <span>2018</span>
                    </div>
                    <p className="lg:px-5">
                        Kerala Board Of Public Examinations <br />
                        Percentage: 95
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Education