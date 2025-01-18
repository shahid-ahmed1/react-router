import { useRouteError,Link } from "react-router-dom";

const Eror = () => {
    const errors = useRouteError();
    const {status,error,statusText}=errors;
    console.log(error)
    return (
        <div>
            <div>
                <h3>{`${status}`}</h3>
                <h3>{`${error}`}</h3>
                {   status=== 404 &&<div>
        <h3>Page Not found</h3>
     <p>Go back where you from</p>
       <Link to='/'><button>Home</button></Link>
       
                    </div>
                }


                </div>
        </div>
    );
};

Eror.propTypes = {
    
};

export default Eror;