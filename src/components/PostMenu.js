import '../styles/postMenu.scss';
import { ReactComponent as Share } from '../images/share.svg';
import { ReactComponent as Comments } from '../images/comment.svg';
// import { ReactComponent as Notifications } from '../images/notifications.svg';
import { ReactComponent as Bookmark } from '../images/bookmark.svg';
import { BsHeartFill } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";




function PostMenu() {
    return (
        <div className="cardMenu">
            <div className="interactions">
                <BsHeart className="icon" />
                <BsHeartFill className="icon" />
                <Comments className="icon" />
                <Share className="icon" />
            </div>
            <Bookmark className="icon" />
        </div>
    )
}

export default PostMenu;