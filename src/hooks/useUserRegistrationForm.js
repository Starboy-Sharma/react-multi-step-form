import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { RegistrationUpdateContext } from "../contexts/registrationContext";

const steps = {
    1: 'step-1',
    2: 'step-2',
    3: 'step-3',
    4: 'confirmation',
}

function useUserRegistrationForm(currentStep) {
    const navigate = useNavigate();
    const { setUserData } = useContext(RegistrationUpdateContext);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        setUserData((prevData) => ({ ...prevData, ...data }));
        navigate(`/registration/${steps[currentStep + 1]}`);
    }

    return { handleFormSubmit };
}

export default useUserRegistrationForm