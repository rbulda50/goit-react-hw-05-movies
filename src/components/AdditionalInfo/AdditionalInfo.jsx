import css from './AdditionalInfo.module.css';
import handCursor from '../../icons/hand-cursor.png';
import { Link } from 'react-router-dom';

const AdditionalInfo = () => {
    return (
        <ul className={css.List}>
            <p className={css.Title}>Additional information</p>
            <li className={css.Item}>
                <img
                    width={25}
                    src={handCursor}
                    alt="Hand cursor" />
                <Link
                    className={css.Link}
                    to="cast">Cast</Link>
            </li>
            <li className={css.Item}>
                <img
                    width={25}
                    src={handCursor}
                    alt="Hand cursor" />
                <Link
                    className={css.Link}
                    to="reviews">Reviews</Link>
            </li>
        </ul>
    );
};

export default AdditionalInfo;