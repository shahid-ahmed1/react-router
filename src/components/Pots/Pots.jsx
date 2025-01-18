import React from 'react';
import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Pots = props => {
    const posts = useLoaderData();
    

    return (
        <div>
            <h3>Pots Data here :{posts.length}</h3>
            <div className='users'>
                {
                
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }

            </div>
        </div>
    );
};

Pots.propTypes = {
    
};

export default Pots;