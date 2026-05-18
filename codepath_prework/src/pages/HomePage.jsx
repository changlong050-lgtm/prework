import './HomePage.css'
import Foto from '../assets/Homepage.jpg'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div
            className='homepage'
            style={{
                backgroundImage: `url(${Foto})`
            }}
        >
            <div className="button-group">

                <Link to="/viewAll">
                    <button className="start-btn">
                        View All Creators
                    </button>
                </Link>

                <Link to="/add">
                    <button className="start-btn">
                        Add a Creator
                    </button>
                </Link>

            </div>

        </div>
    )
}

export default HomePage