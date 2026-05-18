import './CreatorProfile.css'
import { useNavigate } from "react-router-dom";

const CreatorProfile = ({id, name, url, description, imageURL}) => {

    const navigate = useNavigate()

    return (
        <article className="creator-card">

            {
                imageURL && (
                    <img
                        className="creator-image"
                        src={imageURL}
                        alt={name}
                    />
                )
            }

            <div className="creator-content">

                <h2>{name}</h2>

                <p>{description}</p>

                <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                >
                    Visit Channel
                </a>

                <div className="creator-buttons">

                    <button
                        className="view-btn"
                        onClick={() => navigate(`/view/${id}`)}
                    >
                        View
                    </button>

                    <button
                        className="edit-btn"
                        onClick={(e) => {
                            e.stopPropagation()
                            navigate(`/edit/${id}`)}}
                    >
                        Edit
                    </button>

                </div>

            </div>

        </article>
    )
}

export default CreatorProfile;