
import PropTypes from 'prop-types';
import './User.css'
const User = ({user}) => {
    const {name,email,phone} = user;
    return (
        <div className='user'>
            <h4>name : {name}</h4>
            <h4>email : {email}</h4>
            <h4>phone : {phone}</h4>
            
        </div>
    );
};

User.propTypes = {
    user:PropTypes.object
};

export default User;