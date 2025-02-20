import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='container'>
      <h1>Home</h1>
      <button> <Link to="/registration/step-1">START REGISTRATION</Link> </button>
    </div>
  )
}

export default Home