import '../styles/Navigation.scss';
import Menu from "./Menu.js";



function Navigation({ user,
    handleLogoutClick,
    setShowPostForm,
    showPostForm
}) {
    return (
        <div className="navigation">

            <div>
                <Menu user={user}
                    handleLogoutClick={handleLogoutClick}
                    setShowPostForm={setShowPostForm}
                    showPostForm={showPostForm}
                />
            </div>
        </div>
    )
}

export default Navigation;