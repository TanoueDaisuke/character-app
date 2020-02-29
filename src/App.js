import React from 'react'
import User from './User'

const App = () => {
  const users = [
    {
      id: 1,
      name: "カービィ",
      skill: "吸い込み",
    }, 
    {
      id: 2,
      name: "マリオ",
      skill: "ファイアーボール"
    },
    {
      id: 3,
      name: "ソニック",
      skill: "ダッシュ"
    }
  ]

  return (
    users.map(user => <User user={user} key={user.id} />)
  )
}

export default App