const register = () => {
  return (
    <>
     <div className="signup-form-wrapper modal">
          <div className="x-btn signup-x">
            &times;
          </div>
          <div className="form-header">
            <h1>Get access to the portal</h1>
            <h3>Register</h3>
          </div>
          <form className="form">
            <div className="input-group">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-group">
              <i className="far fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-group">
              <i className="fas fa-key"></i>
              <input type="password" placeholder="Password" />
            </div>
            <button type="button">Register</button>
          </form>
        </div>
    </>
  );
};
export default register
