// Importing the Login and Register components from their respective files
import Login from "./Login";
import Register from "./Register";

// Defining the Home component
const Home = () => {
  return (
    <div className="home-page">
      <div className="logoh">
        <h2>the</h2>
        <h1>portal</h1>
      </div>

      <div className="input_wrap">
        {/* The registration section is defined using the Register component */}
        <div className="register_wrap">
          <Register></Register>
        </div>

        {/* The login section is defined using the Login component */}
        <div className="login_wrap">
          <Login></Login>
        </div>
      </div>
    </div>
  );
};

// Exporting the Home component
export default Home;