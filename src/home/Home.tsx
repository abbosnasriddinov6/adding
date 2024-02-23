import { NavLink } from 'react-router-dom'
import './Home.scss'
const Home = () => {
  return (
    <div className='Whole'>
      <div className="container">
        <div className="whole">
          <div className="searchandadd">
            <input type="text" placeholder='Search . . .' />
            <NavLink to='add'><button>Add</button></NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home