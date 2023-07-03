
import toy from '../../../assets/images/toy.png';
import eduline from '../../../assets/images/eduline.png';
import job from '../../../assets/images/jobholder.png';
import SingleProject from './SingleProject';

const Projects = () => {
    const allProjects = [
        {
            _id: 1,
            name: 'Toy Market',
            description: 'This is a Disney Toys Website.',
            img: toy
        },
        {
            _id: 2,
            name: 'JobHolder',
            description: 'This is a JobHolder Website',
            img: job
        },
        {
            _id: 3,
            name: 'EduLine',
            description: 'This is a foreign language club website.',
            img: eduline
        }
    ]
    return (
        <div className='mb-6 '>
            <h1 className='text-4xl text-center font-bold mt-12'>My Project</h1>
            <hr className='mb-12 mt-6' />
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                allProjects.map(project => <SingleProject
                     key={project._id}
                     project={project}
                ></SingleProject>)
            }
        </div>
        </div>
    );
};

export default Projects;
// const project = [
//     {

//     }
// ]