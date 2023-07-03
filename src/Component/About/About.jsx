
// import codingMan from '../../assets/coding man.jpg'
import developimg from '../../assets/images/developimg.jpg'


const About = () => {
    return (
        <div>
            <h1 className='text-4xl text-center font-bold mt-12'>Learn More About Me</h1>
            <hr className='mb-12 mt-6' />
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                  <img className='w-2/5 rounded-lg ' src={developimg} alt="" />
                    <div>
                        <h1 className="text-2xl font-bold text-primary">Full Stack Web Developer</h1>
                        <p className="py-6 text-lg ">I am a self-motivated Full Stack Developer with <br />
                                            knowledge in React.js,Node.js,Express.js,MongoDB, <br />
                                            JavaScript,HTML,CSS,Bootstrap,Tailwind and mobile <br />
                                            responsive web development.I am always passionate <br />
                                            about new information & technologies.Striving to <br /> 
                                            never stop learning and improving.Look forward to <br />
                                             working with a creative team to improve my skill <br />
                                            and add value.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;