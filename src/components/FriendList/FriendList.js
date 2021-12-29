
import FriendListItem from 'components/FriendListItem/FriendListItem';
import s from 'components/FriendList/FriendList.module.css';
import PropTypes from 'prop-types';
function FriendList({ friends }) {
  
  return (
    <ul className={s.friendList}>
    {
      friends.map(({ avatar, name, isOnline, id }) => {
        
        return <FriendListItem
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          keyId={id}
          key={id}
        />
      })
    }
    </ul>
  );
};
PropTypes.FriendList = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default FriendList;