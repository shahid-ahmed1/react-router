
import { useLoaderData, useNavigate } from 'react-router-dom';

const UserDetails = () => {
  const user = useLoaderData();
  const {name,email,phone,id}=user;
  console.log(user)
 const navigate =useNavigate();
 const handleGoBack=()=>{
  navigate(-1)
 }
    return (
        <div>
          <h3>Details about userId :{id}</h3>  
          <h3>Details about userName :{name}</h3>  
          <h3>Details about userEmail :{email}</h3>  
          <h3>Details about userPhone :{phone}</h3>  
        <button onClick={handleGoBack}>Go Back</button>

        </div>
    );
};

UserDetails.propTypes = {
    
};

export default UserDetails;