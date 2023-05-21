import { useState } from "react";

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
        <form onSubmit={onSubmit}>
            <input
                onChange={onChange}
                value={value}
                placeholder="Search film..."
                type="text" />
            <button type="submit">Search</button>
        </form>
    );
};

export default MovieBar;