/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />
import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './context/UserContext'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
)
