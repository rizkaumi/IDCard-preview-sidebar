import React from 'react';
import Card from './Card';
import './Modal.css'



function ModalWindow(props){
    console.log(props.data)
    
    return (
    <div>
        {props.data.map(user => (
            <div className="card-data" key={user.key}>
                    <Card 
                    //key={data.length} 
                    userFullname={user.fullname} 
                    userIdnumber={user.idnumber} 
                    userBirthdate={user.birthdate} 
                    userEmail={user.email} 
                    userGender={user.gender} 
                    userReligion={user.religion} 
                    userPhoto={user.photo}/>
                </div>
            ))
        }
    </div> 
                    
        
    )
}

export default ModalWindow;