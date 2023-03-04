import Logout from "../components/Logout"; // import the Logout component
import Adminnames from "../components/Adminnames"; // import the Adminnames component

const Admindash = () => { // declare the Admindash component
  
  return (
    <div className="admin-container">
      <div className="admin-home-head">
        <div className="admin-logo">

          <h2>Admin Panel</h2> 
        </div>
        <div className="logout-btnsA">
          {/*  render the Logout component */}
          <Logout></Logout> 
        </div>
      </div>
      <div className="admin-card">
        <div className="admin-card-title"><h2>patients</h2></div> 
        <div className="patient">
          <ul>
            <Adminnames /> 
            {/* // render the Adminnames component, which displays a list of patient names */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Admindash; // export the Admindash component