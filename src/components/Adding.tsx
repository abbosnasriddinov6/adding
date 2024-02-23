import './Add.scss'
import { NavLink } from 'react-router-dom'
const Adding = () => {
    return (
        <>
            <div className='all'>
                <div className="container">
                    <div className='Register'>
                        <div className="card">
                            <h2>Add a student</h2>
                            <input type="text" placeholder='Frist Name...' />
                            <input type="text" placeholder='Last Name...' />
                            <input type="text" placeholder='Last Name...' />
                            <NavLink to='/' className='navlink'><button>Send</button></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Adding