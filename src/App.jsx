import React,{useState, useEffect} from 'react'

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(result => {
      setUsers(result)
      console.log(result)
    })
  }, [])
  return (
    <div>
      <ul>
      {users.map((user) => (
        <li>{user.id} {user.name}</li>
      ))}
      </ul>
    </div>
  )
}

export default App
