import { useParams, useNavigate } from "react-router-dom";
import Logout from "../components/Logout";
import axios from "axios";
import React, { useState, useEffect } from "react";

function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    axios
      .post(`http://localhost/php-react/register-login-php/get.php?id=${id}`)

      .then((response) => setUserData(response.data))
      .catch((error) => console.error(error));
    setloading(true);
    console.log(id);
  }, []);



///remembere to remove default 
  function edit(event) {
    event.preventDefault();
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const patientnumber = document.getElementById("patientnumber").value;
    const ailment = document.getElementById("ailment").value;
    const treatment = document.getElementById("treatment").value;
    const Doctor = document.getElementById("Doctor").value;
    const WARD = document.getElementById("WARD").value;
    const Appointmentsdue = document.getElementById("Appointmentsdue").value;
    console.log(firstname)
    console.log(lastname)
    console.log(patientnumber)
    console.log(ailment)
    console.log(treatment)
    console.log(Doctor)
    console.log(WARD)
    console.log(Appointmentsdue)

 
    axios
    .post(`http://localhost/php-react/register-login-php/edit.php?id=${id}&firstname=${firstname}&lastname=${lastname}&patientnumber=${patientnumber}&ailment=${ailment}&treatment=${treatment}&Doctor=${Doctor}&WARD=${WARD}&Appointmentsdue=${Appointmentsdue}`)

    .then((response) => setUserData(response.data))
    .catch((error) => console.error(error));
  setloading(true);
  navigate(-1)



  }

  return (
    <div className="details-body">
      <div className="profile-home-head">
        <div className="back-arrow" onClick={() => navigate(-1)}>
          <div className="img-container"></div>
        </div>

        <div className="profile-logo">
          <h2>the</h2>
          <h1>portal</h1>
        </div>

        <div className="logout-btnsP">
          <Logout></Logout>
        </div>
      </div>

      <div className="profile-card">
        <div className="patient_record_container">
          {loading
            ? userData.map((data) => (
                <>
                  <h1 key={data.id}>
                    Details for {data.first_name} {data.last_name}{" "}
                    {data.patientnum}
                  </h1>
                </>
              ))
            : null}

          <div>
            <form action="">
              <div className="form_first">
                {loading
                  ? userData.map((data) => (
                      <>
                        <label key={data.id} htmlFor="firstname">
                          firstname:
                        </label>
                        <input
                          id="firstname"
                          type="text"
                          key={data.id}
                          defaultValue={data.first_name}
                          name="firstname"
                        />

                        <label key={data.id} htmlFor="lastname">
                          lastname:
                        </label>
                        <input
                          id="lastname"
                          type="text"
                          key={data.id}
                          defaultValue={data.last_name}
                          name="lastname"
                        />

                        <label key={data.id} htmlFor="patientnumber">
                          patientnumber:
                        </label>
                        <input
                          id="patientnumber"
                          type="text"
                          key={data.id}
                          defaultValue={data.patientnum}
                          name="patientnumber"
                        />
                      </>
                    ))
                  : null}
              </div>

              <div className="form_second">
                {loading
                  ? userData.map((data) => (
                      <>
                        <label key={data.id} htmlFor="ailment">
                          ailment:
                        </label>
                        <input
                          id="ailment"
                          type="text"
                          key={data.id}
                          defaultValue={data.ailment}
                          name="ailment"
                        />

                        <label key={data.id} htmlFor="treatment">
                          treatment:
                        </label>
                        <input
                          id="treatment"
                          type="text"
                          key={data.id}
                          defaultValue={data.treatment}
                          name="treatment"
                        />
                      </>
                    ))
                  : null}
              </div>

              <div className="form_first">
                {loading
                  ? userData.map((data) => (
                      <>
                        <label key={data.id} htmlFor="Doctor">
                          Doctor:
                        </label>
                        <input
                          id="Doctor"
                          type="text"
                          key={data.id}
                          defaultValue={data.doctor}
                          name="Doctor"
                        />
                              {/* add in drop down menu for doctor choice*/}
                        <label key={data.id} htmlFor="WARD">
                          WARD:
                        </label>
                        <input
                          id="WARD"
                          type="text"
                          key={data.id}
                          defaultValue={data.ward}
                          name="WARD"
                        ></input>
                      </>
                    ))
                  : null}
              </div>

              <div className="form_second">
                {loading
                  ? userData.map((data) => (
                      <>
                        <label key={data.id} htmlFor="Appointmentsdue">
                          Appointments due:
                        </label>
                        <input
                          id="Appointmentsdue"
                          type="text"
                          key={data.id}
                          defaultValue={data.Appointments}
                          name="Appointmentsdue"
                        />
                      </>
                    ))
                  : null}
                <div className="admin-btns">
                  <button onClick={edit}>submit</button>
                  <button>make inactive</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
