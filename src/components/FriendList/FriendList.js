
import FriendListItem from 'components/FriendListItem/FriendListItem'
import s from 'components/FriendList/FriendList.module.css'
import PropTypes from 'prop-types'
function FriendList({ friends }) {
  console.log(friends);
  return <ul className={s.friendList} key={friends}>
    
   
   {
      friends.map(({ avatar, name, isOnline, id }) => {
        
        return <FriendListItem
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          keyId={id}
        />
      })
    }
         </ul>
}
PropTypes.FriendList = {
  friends: PropTypes.object,
}
export default FriendList;