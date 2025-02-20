import BackNavigation from "../components/multi-step-form/BackNavigation";
import useUserRegistrationForm from "../hooks/useUserRegistrationForm";

function Step3() {

  const { handleFormSubmit } = useUserRegistrationForm(3);

  return (
    <>
      <h2>Step 3</h2>
      <BackNavigation pageNumber={3} />
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="city">City</label>
          <input type="text" id="city" name="city" placeholder="City" />
        </div>

        <div>
          <label htmlFor="state">State</label>
          <input type="text" id="state" name="state" placeholder="State" />
        </div>

        <div>
          <label htmlFor="phone">Phone</label>
          <input type="text" id="phone" name="phone" placeholder="Phone" minLength="10" />
        </div>

        <div>
          <button type="submit">Next</button>
        </div>
      </form>
    </>
  );
}

export default Step3;
