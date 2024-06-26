
import '@/assets/css/shadow.css'



const About = () => {
  return (
    <section id="about" style={{ paddingTop: '90px' }}>
      <h1 className="font-name text-center " style={{ color: '#999', fontSize: 'larger', paddingTop: '60px', paddingBottom: '10px' }}>
        About
      </h1>
      <p className="font-fre shad sm:ml-48 sm:mr-48 mx-4 " style={{
        color: '#999',
        textAlign: 'justify',
        paddingLeft: '20px',
        paddingRight: '20px',
        borderStyle: 'dotted',
        borderColor: '#999',
        borderWidth: '4px',
        borderRadius: '20px',
        // marginLeft: '200px',
        // marginRight: '200px',
        marginTop: '50px',
        paddingTop: '20px',
        paddingBottom: '20px',
        
      }}>
        I am a dedicated computer science student completed my B.Tech degree in computer science and engineering, with a strong focus on web development and
        React. Through college projects, I have honed my skills in building dynamic and responsive web applications
        using React, showcasing my ability to create engaging user experiences.
        Constantly seeking growth, I stay updated with the latest industry trends and explore new technologies. I
        thrive in collaborative environments, where I can contribute my technical expertise, problem-solving skills,
        and team spirit.
        My goal is to secure a challenging role in a dynamic organization, where I can apply my passion for web
        development to create impactful solutions. In my free time, I participate in coding challenges and
        contribute to open-source projects.
        <br /><br />
        Explore my portfolio to gain insights into my projects and experiences. I&apos;m excited about the opportunities
        that lie ahead and look forward to discussing how I can contribute to your organization&apos;s success.
      </p>
    </section>

  )
}

export default About