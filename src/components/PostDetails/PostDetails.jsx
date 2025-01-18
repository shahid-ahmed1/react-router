
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    console.log(post)
    const {title,id,body}=post;
    return (
        <div>
            <h2>id: {id}</h2>
            <h2>title: {title}</h2>
            <small>{body}</small>
            <h2></h2>
        </div>
    );
};

PostDetails.propTypes = {
    
};

export default PostDetails;