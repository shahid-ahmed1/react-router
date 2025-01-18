
import PropTypes from 'prop-types';
import { Outlet, useLocation, useNavigation } from 'react-router-dom';
import Headear from '../Headeer/Headear';
const Home = props => {
    const navigation = useNavigation();
    const location = useLocation();
    console.log(location);

    return (
        <div>
            <Headear></Headear>
            {
                navigation.state==='loading'?<p>lodding</p>:    <Outlet></Outlet>
            }
        
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;