import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useUserRegistrationForm from "../hooks/useUserRegistrationForm";
import { RegistrationDataContext } from "../contexts/registrationContext";
import BackNavigation from "../components/multi-step-form/BackNavigation";
function Step2() {

  const { handleFormSubmit } = useUserRegistrationForm(2);
  const { userData } = useContext(RegistrationDataContext);
  const [email, setEmail] = useState(userData.email || "");
  const [password, setPassword] = useState(userData.password || "");
  const [confirmPassword, setConfirmPassword] = useState(
    userData.confirmPassword || ""
  );
  const [gender, setGender] = useState(userData.gender || "");

  return (
    <>
      <h2>Step 2</h2>
      <BackNavigation pageNumber={2} />
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="gender">Gender</label>
          <select id="gender" name="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <button type="submit">Next</button>
        </div>
      </form>
    </>
  );
}

export default Step2;
