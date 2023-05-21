import { useState } from "react";
import PropTypes from 'prop-types';
import css from './MovieBar.module.css';
import Find from '../../icons/find.png';

const MovieBar = ({onFormSubmit}) => {
    const [value, setValue] = useState('');

    const onChange = (e) => {
        setValue(e.target.value);
    };

    const onSubmit = e => {
        e.preventDefault();

        onFormSubmit(value);
        setValue('');
    };

    return (
        <form
            className={css.Form}
            onSubmit={onSubmit}>
            <input
                className={css.Input}
                onChange={onChange}
                value={value}
                placeholder="Search film..."
                type="text" />
            <button
                className={css.Button}
                type="submit">
                <img
                    className={css.Icon}
                    width={30}
                    src={Find}
                    alt="Find" />
                Search</button>
        </form>
    );
};

export default MovieBar;

MovieBar.propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
};
