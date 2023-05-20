const { Link } = require("react-router-dom")

const AdditionalInfo = () => {
    return (
        <ul>
            <li>
                <Link to="/movies/:movieId/cast">Cast</Link>
            </li>
            <li>
                <Link to="/movies/:movieId/reviews">Reviews</Link>
            </li>
        </ul>

    )
};

export default AdditionalInfo;