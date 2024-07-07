import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react'
import './index.css'
import { BrowserRouter} from 'react-router-dom'
import PlayercontextProvider from './context/Playercontext.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-uwmuldkxvnl4yyfg.us.auth0.com'
      clientId='VfQGeuzqosDKlOzCTQj0XOmDHURUKXP2'
      authorizationParams={{
        redirect_uri: window.location.origin
      }}>
    <BrowserRouter>
    <PlayercontextProvider>
    <App/>
    
   
      
        
    </PlayercontextProvider>
    
    
     </BrowserRouter>

   

     </Auth0Provider>
     
    </React.StrictMode>
    
)
