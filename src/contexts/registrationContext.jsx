/**
 * As we can see currently in the step form we have state for each form,
 * and the challenge is to keep sync thoses states with the data coming from the localStorage
 * here a solution could be to add an useEffect which in result we have to add in each step.
 * but it's not the best way to do it.
 * 
 * Instead we can derived form state with context using Reducer
 */


import { createContext, useState, useEffect } from 'react';

export const RegistrationDataContext = createContext({
    userData: {},
});

export const RegistrationUpdateContext = createContext({
    setUserData: () => {},
    submitRegistration: () => {}
});

export function RegistrationContextProvider({ children }) {

    const [userData, setUserData] = useState({});

    useEffect(() => {
      setTimeout(() => {
        console.log('setting user data');
        setUserData(prevState => ({...prevState, firstName: 'John', lastName: 'Doe'}));
      }, 1000)
    }, [])

    console.log(userData.firstName)
    

    return  (
        <RegistrationDataContext.Provider value={{userData}}>
            <RegistrationUpdateContext.Provider value={{setUserData}}>
                {children}
            </RegistrationUpdateContext.Provider>
        </RegistrationDataContext.Provider>
    )
}
