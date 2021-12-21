
import s from 'components/container/container.module.css'

import Profile from 'components/Profile/Profile'
import Statistics from 'components/Statistics/Statistics'
import FriendList from 'components/FriendList/FriendList'
import TransactionHistory from 'components/TransactionHistory/TransactionHistory'

import user from 'components/Profile/user.json'
import data from 'components/Statistics/data.json'
import friends from '../FriendList/friends.json'
import transactions from '../TransactionHistory/transactions.json'


function App() {
  return <div >
    <ul className={s.container}>
      <li>
        <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      </li>
      <li>
        <Statistics stats={data} title="upload stats" />
      </li>
      <li>
        <FriendList friends={friends} />
      </li>
      <li>
        <TransactionHistory transactions={transactions}/>
      </li>
    </ul>
  </div>
  
}

export default App;
