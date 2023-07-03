
import {  useLoaderData } from 'react-router-dom';

const ProjectDetails = () => {
    const project = useLoaderData();
    const { name, description,technologies,features, img,liveSide,clientSide,serverSide } = project;
    return (
        <div className="hero justify-items-center">
            <div className="hero-content flex-col lg:flex-row">
                <img src={img} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{name}</h1>
                    <p className="mt-2 font-semibold">{description}</p>
                    <div className='lg:h-16 sm:h-24  rounded-lg w-full bg-info mt-4'>
                    <p className="px-6"><small className=' px-1 text-xl font-bold mt-2'>Technologies:</small>{technologies}</p>
                    </div>
                    <div className='lg:h-24 sm:h-64 rounded-lg bg-success mt-4'>
                    <p className="px-6"><small className=' mr-4 px-1 text-xl font-bold mt-2'>Features:</small>{features}</p>
                    </div>
                   <a href={liveSide}><button className="btn btn-outline btn-error mt-6 mx-6 px-16">Live Website</button></a>
                   <a href={clientSide}><button className="btn btn-outline btn-error mt-6 mx-6  px-16">Client Side</button></a> 
                   <a href={serverSide}><button className="btn btn-outline btn-error mt-6 mx-6 px-16">Server Side</button></a>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;