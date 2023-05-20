const { Link } = require("react-router-dom")

const AdditionalInfo = () => {
    return (
        <ul>
            <p>Additional information</p>
            <li>
                <Link to="cast">Cast</Link>
            </li>
            <li>
                <Link to="reviews">Reviews</Link>
            </li>
        </ul>

    )
};

export default AdditionalInfo;