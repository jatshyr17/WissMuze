import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './index.css'

import { BrowserRouter} from 'react-router-dom'

import PlayercontextProvider from './context/Playercontext.jsx'
import { Auth0Provider } from '@auth0/auth0-react';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <BrowserRouter>
    <PlayercontextProvider>
    <App/>
    
   
      
        
    </PlayercontextProvider>
    
    
     </BrowserRouter>


   

     
     

     
</React.StrictMode>
    
)
