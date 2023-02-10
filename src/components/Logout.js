
import { useNavigate } from "react-router-dom";





    
    const Logout = () => {
        let navigate = useNavigate();

    const redirect = () =>{
        localStorage.clear();
        navigate(`/`);

    }

    return(
      <div className="logout">
        <div onClick={redirect} className="logout_btn">
      </div>
    
      </div>

    )

   

        };
    
export default Logout;


