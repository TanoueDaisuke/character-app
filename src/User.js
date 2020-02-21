import React, { useState } from 'react'

const User = (props) => {
  const [score, setScore] = useState(0)

  return (
    <div>
      <h1>名前：{props.user.name}</h1>
      <p>特技：{props.user.skill}</p>
      <p>いいね！: {score}</p>
      <button type="button" onClick={() => setScore(score+1)}>いいねボタン</button>
    </div>
  )
}

export default User