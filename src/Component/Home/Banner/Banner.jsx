
// import img from '../../../assets/dipro.png'
import logo from '../../../assets/images/sadia.jpg'
import { FaEnvelope,FaPhone} from "react-icons/fa";

const Banner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
                <img src={logo} alt='' className="max-w-xs rounded-xl shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Hi,I am <small className='text-5xl font-bold text-primary'>Sadia Binta Salam Shifat</small> </h1>
                    <h2 className="text-4xl mt-6 text-primary font-bold"> <small className='text-4xl text-bold '>A</small> MERN Stack Developer</h2>
                    <p className="py-6 text-lg">I am a web developer with an amazing ability to develop websites that are both functional and aesthetically pleasing.
                     <br /> I have a strong understanding about creating websites that users will find easy to use and visually appealing.</p>
                     <button className='btn btn-info mx-2'><FaEnvelope className='mx-2'></FaEnvelope> sadiasalam62@gmail.com</button>
                     <button className='btn btn-info my-4 mx-2'><FaPhone className='mx-2'></FaPhone> 01870791863</button>
                     <br />
                    <a href="https://drive.google.com/file/d/18kUgIhRXRl77B7WybDUHAlol3aQMCiPN/view?usp=drive_link"><button className="btn btn-success  mx-2 my-2">My Resume</button></a>
                </div>
            </div>
        </div>
    );
};

export default Banner;