import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getReviewsById } from "services/app";
import css from './Reviews.module.css';

const Reviews = () => {
    const {movieId} = useParams();
    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        async function getReviews() {
            try {
                const reviews = await getReviewsById(movieId);
                setReviews(reviews);
            } catch (error) {
                console.log('Error!')
            };
        };
        getReviews();
    }, [movieId]);

    if (!reviews) {
        return null;
    };

    return reviews.length > 0
        ? (
            <ul className={css.List}>
                {reviews.map(({ id, author, content }) => (
                    <li
                        className={css.Item}
                        key={id}>
                        <h3 className={css.AuthorName}>Author: {author}</h3>
                        <p>{content}</p>
                    </li>
                ))}
            </ul>
        )
        : (<p>
            We don't have any reviews for this movie.
        </p>);
};

export default Reviews;