import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Post = ({post}) => {
    const {name ,title,id,}=post
    return (
        <div>
            <div className='user'>
                <h3> post Id : {id}</h3>
                <h3>{name}</h3>
                <h3>{title}</h3>
                <Link to={`/post/${id}`}>Show Details</Link>
                
            </div>
        </div>
    );
};

Post.propTypes = {
    
};

export default Post;