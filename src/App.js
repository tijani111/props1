import React from 'react';
import './App.css';
import Profile from './Profile/ProfileComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const alertF = (profession) => alert(`Hi! I am a ${profession}`);
  return (
    <div className="App">
<Profile fullName="Mohamed Tijani Zouari" 
            bio="It won’t always be easy, but always try to do what’s right" 
            profession="Student" 
            funct={alertF}  >
            </Profile>
    </div>
  );
}

export default App;
