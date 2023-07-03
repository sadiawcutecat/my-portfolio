import About from "../../About/About";
import Contact from "../../Contact/Contact";
import Banner from "../Banner/Banner";
import Projects from "../Project/Projects";




const Home = () => {
    return (
        <div className='mx-6'>
           <Banner></Banner>
           <About></About>
           <Projects></Projects>
           <Contact></Contact>

        </div>
    );
};

export default Home;