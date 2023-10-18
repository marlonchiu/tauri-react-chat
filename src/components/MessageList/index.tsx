import { IMessage } from '@/types'
import cls from 'classnames'
import { useState } from 'react'
import style from './index.module.css'

export default function MessageList() {
  const [list, setList] = useState<IMessage[]>([])

  if (!list.length) {
    return (
      <div className={cls(style.messageList, '-mt-24 items-center justify-center')}>
        <span className={style.logo} />
        <span className="text-2xl font-bold text-gray-300">欢迎使用 Chat Ta</span>
      </div>
    )
  }

  return (
    <div className={style.messageList}>
      {list.map((msg) => (
        <p key={msg.id} {...msg} />
      ))}
    </div>
  )
}
