import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import css from './Filter.module.css'

export const Filter = () => {
    
    const dispatch = useDispatch();

    const handleFilter = e => {
        dispatch(changeFilter(e.currentTarget.value));
    }

    return (
        <div className={css.container}>
        <label className={css.label}>Search
            <input className={css.input} type="text" onChange={handleFilter}/>
            </label>
        </div>
    )
}
