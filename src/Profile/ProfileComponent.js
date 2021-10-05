import React from  'react';
import PropTypes from 'prop-types';

const Profile=props=>{
return( <div>
<h2>{props.fullName}</h2>
<p>{props.bio}</p>
<span className="bg-secondary p-1 px-4 rounded text-white" >{props.profession}</span>
<img src="./Mohamed Zouari.jpeg" alt="im"></img>
<button className="btn btn-primary px-4 ms-3"onClick={()=> props.funct(props.profession)} >Alert</button>

</div>);}

Profile.defaultProps = {
    fullName: 'Mohamed Zouari',
    profession:'Student'
  };

  Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string.isRequired,
    
  };



export default Profile;