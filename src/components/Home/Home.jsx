
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import Headear from '../Headeer/Headear';
const Home = props => {
    return (
        <div>
            <Headear></Headear>
            <h2>This is the home components</h2>
            <Outlet></Outlet>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;