
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const SingleProject = ({project}) => {
    // eslint-disable-next-line react/prop-types
    const {_id,name,description,img}=project;
    return (
        <div className="card w-50 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <Link to={`/project/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleProject;