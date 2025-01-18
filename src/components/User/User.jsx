
import PropTypes from 'prop-types';
import './User.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
const User = ({user}) => {
    const {name,email,phone,id} = user;
    const navigate= useNavigate();
    const handleShowDetail =()=>{
   navigate(`/user/${id}`)
    }
    return (
        <div className='user'>
            <h4>name : {name}</h4>
            <h4>email : {email}</h4>
            <h4>phone : {phone}</h4>
           <Link to={`/user/${id}`}>Show More</Link>
           <br />
           <Link to={`/user/${id}`}><button>Click Me</button></Link>
           <button onClick={handleShowDetail}>Click to see details</button>
        </div>
    );
};

User.propTypes = {
    user:PropTypes.object
};

export default User;