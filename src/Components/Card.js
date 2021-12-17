import React from "react";
import "./card.css";

function Card(props) {
  

  return (
      <div className="card">
        <div className="card__left">
          <div className="card__left-img-box">
          <img src={props.userPhoto} className="card__left-img" alt='foto'/>
          </div>
        </div>

        <div className="card__right">
          <div className="card__right-id-box">
            <h1 className="card__right-id">
              <span className="card__right-id-name" id="previewName">{props.userFullname}</span>
            </h1>
          </div>

          <div className="card__right-id-box">
              <p className="card__right-id" id="previewNumber">{props.userIdnumber}</p><hr />
          </div>

          <div className="card__right-detail-box">
            <div className="card__right-detail">
              <div className="card__right-detail-group">
                 <p className="card__right-detail-label">Date of Birth</p>
                 <p className="card__right-detail-data" id="previewBirthdate">{props.userBirthdate}</p>
              </div>
            </div>
          </div> 
          <div class="card__right-detail-box">
            <div class="card__right-detail">
              <div class="card__right-detail-group">
                <p class="card__right-detail-label">Gender</p>
                <p class="card__right-detail-data" id="previewGender">{props.userGender}</p>
              </div>
            </div>
          </div>
          
          <div className="card__right-detail-box">
            <div className="card__right-detail">
              <div className="card__right-detail-group">
                <p className="card__right-detail-label">Email</p>
                <p className="card__right-detail-data" id="previewEmail">
                  {props.userEmail}
                </p>
            </div>
          </div>

          <div className="card__right-detail-box">
             <div className="card__right-detail-group">
                 <p className="card__right-detail-label">Religion</p>
                 <p className="card__right-detail-data" id="previewReligion">{props.userReligion}</p>
              </div>
          </div>
        </div> 
       </div>     
      </div>
  );
}

export default Card;