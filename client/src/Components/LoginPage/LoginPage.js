import React, { useState } from 'react';
import { connect } from 'react-redux';
// import logo from '../resources/logo.png';
import UsernameInput from './components/Usernameinput';
import SubmitButton from './components/SubmitButton';
import { useHistory } from 'react-router-dom';
import { registerNewUser } from '../../utils/wssConnection/wssConnection';
import { setUsername } from '../../store/actions/dashboardActions';
// import { setUsername } from '../../Redux/Group/actions/dashboardActions';
import './LoginPage.css';

const LoginPage = ({ saveUsername }) => {
  const [username, setUsername] = useState('');

  const history = useHistory();

  const handleSubmitButtonPressed = () => {
    registerNewUser(username);
    saveUsername(username);
    history.push('/dashboard');
  };

  return (
    <div className='login-page_container background_main_color'>
      <div className='login-page_login_box background_secondary_color'>
        <div className='login-page_logo_container'>
          <img className='login-page_logo_image' src="https://image.shutterstock.com/image-vector/video-camera-icons-movie-sign-260nw-1213282954.jpg" alt='VideoTalker' />
        </div>
        <div className='login-page_title_container'>
          <h2>VIDEO CHAT</h2>
        </div>
        <UsernameInput username={username} setUsername={setUsername} />
        <SubmitButton handleSubmitButtonPressed={handleSubmitButtonPressed} />
      </div>
    </div>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    saveUsername: username => dispatch(setUsername(username))
  };
};

export default connect(null, mapActionsToProps)(LoginPage);
