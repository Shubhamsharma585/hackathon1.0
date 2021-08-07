import React from 'react';
// import userAvatar from '../../../resources/userAvatar.png';
import { callToOtherUser } from '../../../../utils/webRTC/webRTCHandler';
import { callStates } from '../../../../store/actions/callActions';
// import { callStates } from '../../../../Redux/Group/actions/callActions';

const ActiveUsersListItem = (props) => {
  const { activeUser, callState } = props;

  const handleListItemPressed = () => {
    if (callState === callStates.CALL_AVAILABLE) {
      callToOtherUser(activeUser);
    }
  };

  return (
    <div className='active_user_list_item' onClick={handleListItemPressed}>
      <div className='active_user_list_image_container'>
        <img className='active_user_list_image' src="https://image.shutterstock.com/image-vector/video-camera-icons-movie-sign-260nw-1213282954.jpg" alt='userimage' />
      </div>
      <span className='active_user_list_text'>{activeUser.username}</span>
    </div>
  );
};

export default ActiveUsersListItem;
