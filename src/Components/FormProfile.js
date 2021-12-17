import * as React from 'react';
import Modal from "react-modal";
import { useState } from "react";
import ModalWindow from "./ModalWindow";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from './Style'
import "./form.css";

export default function FormProfile() {
  const classes = useStyles();
  
  const [formData, setFormData] = useState([])

  const data ={
    fullname:"",
    idnumber:"",
    birthdate:"",
    email:"",
    gender:"",
    religion:"",
    photo:"",
  }

  
  const [{ fullname, idnumber, birthdate, email, gender, religion, photo}, setData] = useState(data);
  
  const changeHandler = (event) => {
    setData(formData => ({...formData, [event.target.name]: event.target.value}))
  };

  const avatarchangeHandler = (event) => {
    let src = URL.createObjectURL(event.target.files[0])
        setData(formData => ({...formData, [event.target.name]: src}))
  }

  const submitHandler = (event) => {
    event.preventDefault();
    setFormData([...formData, 
        {"key":formData.length + 1, 
        "fullname":fullname, 
        "idnumber":idnumber, 
        "birthdate":birthdate, 
        "email":email, 
        "gender":gender, 
        "religion":religion,
        "photo":photo, 
    }])
    setData({
      fullname: "",
      birthdate: "",
      idnumber: "",
      email: "",
      gender: "",
      religion: "",
      photo:""
    })
    console.log(formData)
  }  
  const handleReset = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
    setData({
      fullname: [],
      idnumber: [],
      birthdate: [],
      email: [],
      gender: [],
      religion: [],
      photo:[]
    });
  };

  const resetHandler = (event) =>{
    event.preventDefault();
    setFormData([])
    setData({
      fullname: "",
      idnumber: "",
      birthdate: "",
      email: "",
      gender: "",
      religion: "",
      photo:""
    })
    
  }
  
  const [modalIsOpen,setModalIsOpen] = useState(false);

  const setModalIsOpenToTrue =()=>{
      setModalIsOpen(true)
  }

  const setModalIsOpenToFalse =()=>{
      setModalIsOpen(false)
  }
  const modalstyle={
    content:{
    position: 'absolute',
    width: '55%',
    inset: '40px',
    background: '#F0AA89',
    overflow: 'auto',
    outline: 'none',
    padding: '10px',
    marginLeft: '20%'
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              ID Card Form
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Please fill in this form to create your ID Card
            </Typography>
            <div className={classes.heroButtons}>
            </div>
          </Container>
        </div>
        <Container className={classes.Form} maxWidth="sm">
        <div className="form-wrapper">
            <form className="form-field" action="#" onSubmit={submitHandler}>
                <div className="form-field-box">
                    <div className="form-group">
                    <label className="form-data-label"><b>Name</b>
                    <input type="text" className="form-data-input" name="fullname" id="fullname"
                    placeholder="Enter your fullname"
                    onChange={changeHandler}/>
                    </label>  
                    </div>
                </div>

                <div className="form-field-box">
                    <div className="form-group">
                        <label className="form-data-label"><b>Date of Birth</b>
                        <input type="date" className="form-data-input" name="birthdate" id="birthdate" onChange={changeHandler}/>
                        </label> 
                    </div>
                </div>

                <div className="form-field-box">
                    <div className="form-group-box">
                        <div className="form-group">
                            <label className="form-data-label"><b>ID Number</b>
                            <input className="form-data-input" name="idnumber" id="idnumber"
                            placeholder="Enter your ID number" 
                            onChange={changeHandler}/>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="form-field-box">
                    <div className="form-group-box">
                        <div className="form-group">
                            <label className="form-data-label"><b>Gender</b></label>
                            <div className="form-group-radio">
                            <label>
                                <input type="radio" name="gender" id="gender" value="Male" className="form-radio-button" onChange={changeHandler}/>
                                <span className="form-data-label__radio">Male</span>
                            </label>
                            </div>
                            <div className="form-group-radio">
                            <label>
                                <input type="radio" name="gender" id="gender" value="Female" className="form-radio-button" onChange={changeHandler}/>
                                <span className="form-data-label__radio">Female</span>
                            </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-field-box">
                    <div className="form-group-box">
                        <div className="form-group">
                            <label className="form-data-label"><b>Religion</b></label>
                            <div className="form-select__group">
                            <select name="religion" id="religion" className="form-select" onChange={changeHandler}>
                            <option value="Default">Choose your religion</option>
                            <option value="Islam">Islam</option>
                            <option value="Kristen">Kristen</option>
                            <option value="Katolik">Katolik</option>
                            <option value="Hindu">Hindu</option>
                            <option value="Buddha">Buddha</option>
                            </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-field-box">
                    <div className="form-group-box">
                        <div className="form-group">
                            <label className="form-data-label"><b>Email</b>
                            <input type="email" className="form-data-input" name="email" id="email"
                            placeholder="Enter your email"
                            onChange={changeHandler}/>
                            </label> 
                        </div>  
                    </div>
                </div>

                <div className="form-field-box">
                    <div className="form-group-box">
                        <div className="form-group">
                            <label className="form-data-label"><b>Upload your photo</b></label>
                            <input type="file" className="form-data-input picture-form" name="photo" 
                            id="userphoto" alt='foto'
                            onChange={avatarchangeHandler}/>
                        </div>
                    </div>
                </div>
                 
            </form>
        </div>
        </Container>

        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <div className="form-field-button">
          <button className="Submitbutton" type="submit" onClick={submitHandler}>  
           Submit
          </button>
          <button className="Previewbutton" type="button" onClick={setModalIsOpenToTrue}>
            Preview
          </button>
          <Modal isOpen={modalIsOpen} style={modalstyle} onRequestClose={()=> setModalIsOpen(false)}>
            <button onClick={setModalIsOpenToFalse} 
            style={{background: "#4d4d4d", border: "none", width: '20px', height:'20px', color: "#ffff", marginTop:"10px", marginLeft:"10px"}}>x</button>
            <div className="form-field-button">
              <button className="Resetbutton" type="button" onClick={resetHandler}>
               Reset
              </button>
           </div>
            <ModalWindow data={formData} fullname={fullname} idnumber={idnumber} birthdate={birthdate} email={email} gender={gender} religion={religion} photo={photo}/>
            </Modal>
          <button className="Clearbutton" type="clear" onClick={handleReset}>Clear Form</button>
          
        </div>

          </Container>
        </div>
      </main>
    </React.Fragment>
  );
}
