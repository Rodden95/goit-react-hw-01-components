import s from 'components/FriendListItem/FriendListItem.module.css';
import PropTypes from 'prop-types';
function FriendListItem({ avatar, name, isOnline, keyId }) {
 
  return (
    <li className={s.item} key={keyId}>
      {
        isOnline
          ?
          <span className={s.online}></span>
          :
          <span className={s.offline}></span>
      }
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
    
  
};

PropTypes.FriendListItem = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};
export default FriendListItem;