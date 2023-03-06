import "../styles/menu.scss";
import { ReactComponent as Home } from '../images/home.svg';
import { ReactComponent as Explore } from '../images/explore.svg';
import { ReactComponent as Post } from '../images/post.svg';
import image from "../images/profile.jpg";
import ProfileIcon from './ProfileIcon';
import { NavLink } from 'react-router-dom'
import { GrLogout } from 'react-icons/gr';


function Menu({ user, handleLogoutClick, setShowPostForm, showPostForm }) {
    return (
        <div>
            <NavLink exact to="/">
                <h4 style={{ marginLeft: '20px' }} className="foodgram">FOODGRAM</h4>
            </NavLink>
            <div>
                <div className="menu">
                    <NavLink exact to="/">
                        <Home className="icon" />
                    </NavLink>
                    {(showPostForm === false)
                        ?
                        <Post onClick={() => setShowPostForm(true)} className="icon" />
                        :
                        <Post onClick={() => setShowPostForm(false)} className="icon" />

                    }

                    <NavLink exact to="/profile">
                        <ProfileIcon user={user} iconSize="small" image={image} />
                    </NavLink>
                    <NavLink exact to="/explore">
                        <Explore style={{ marginLeft: "15px" }} className="icon" />
                    </NavLink>
                    <GrLogout onClick={handleLogoutClick} className="icon"></GrLogout>
                </div>
            </div>
        </div>
    )
}

export default Menu;