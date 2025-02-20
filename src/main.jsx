import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import router from './routes'
import { RegistrationContextProvider } from './contexts/registrationContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RegistrationContextProvider>
    <RouterProvider router={router}></RouterProvider>
    </RegistrationContextProvider>
  </StrictMode>,
)
