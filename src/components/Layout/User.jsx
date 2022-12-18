import { useParams } from "react-router-dom"

const User = () => {
    
  const { slug } = useParams()

  return <h1>One user id {slug}</h1>
}

export default User
