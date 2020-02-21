import React from 'react'
import User from './User'

const App = () => {
  const users = [
    {
      id: 1,
      name: "田之上",
      skill: "昼寝",
    }, 
    {
      id: 2,
      name: "村人",
      skill: "虫取り"
    }
  ]

  return (
    users.map(user => <User user={user} key={user.id} />)
  )
}

export default App