import { useNavigate,useParams } from "react-router-dom";
import Logout from "../components/Logout";
import Adminnames from "../components/Adminnames";

const Admindash = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-container">
      <div className="admin-home-head">
        <div className="admin-logo">
          <h2>Admin Panel</h2>
         
          
          
       
        </div>
        <div className="logout-btnsA">
          <Logout></Logout>
        </div>
      </div>
      <div className="admin-card">
        <div className="admin-card-title"><h2>patients</h2></div>
        <div className="patient">
          <ul>
            <Adminnames />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Admindash;