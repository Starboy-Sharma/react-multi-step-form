import {  useContext, useState } from "react";
import {  RegistrationDataContext } from "../contexts/registrationContext";
import useUserRegistrationForm from "../hooks/useUserRegistrationForm";


function Step1() {

  const { userData } = useContext(RegistrationDataContext);
  const [firstName, setFirstName] = useState(userData.firstName || '');
  const [lastName, setLastName] = useState(userData.lastName || '');
  const { handleFormSubmit } = useUserRegistrationForm(1);

  console.log('rendering...')

  return (
    <>
      <h2>Step 1</h2>

      <form name="step-1" onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="firstName">Name</label>
          <input type="text" id="firstName" name="firstName" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}  />
        </div>
        <div>
          <button type="submit">Next</button>
        </div>
      </form>
    </>
  );
}

export default Step1;
