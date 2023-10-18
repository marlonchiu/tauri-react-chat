import MessageList from '@/components/MessageList'
import UserInput from '@/components/UserInput'
import style from './index.module.css'

function Chat() {
  return (
    <div className={style.chat}>
      <MessageList />
      <UserInput />
    </div>
  )
}

export default Chat
