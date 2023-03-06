import { FcLike } from "react-icons/fc";
import { FcDislike } from 'react-icons/fc'
import '../styles/postcard.scss'


function Likes({ like }) {



    return (
        <span className="like-container">
            {like.like.includes("true") ? <FcLike /> : null}
            {like.like.includes("false") ? <FcDislike /> : null}
        </span>
    )
}

export default Likes;