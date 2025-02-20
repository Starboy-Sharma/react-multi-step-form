import BackNavigation from "../components/multi-step-form/BackNavigation";

function Confirmation() {
  return (
    <>
      <h2 style={{ marginTop: "4rem" }}>Confirmation</h2>
      <BackNavigation pageNumber={4} />
      <form>
        <div>
          <p className="terms-and-conditions">
            <input type="checkbox" id="t&c" name="t&c" />
            <label htmlFor="t&c">
              {' '}
              I&apos;ve read and accept the{' '}
              <a
                href="https://example.com/terms-and-conditions"
                target="_blank"
                rel="noopener noreferrer"
              >
                terms and conditions
              </a>{' '}
            </label>
          </p>
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default Confirmation;
