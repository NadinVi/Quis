import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { quizzezActions } from '../../store/modules/quizzez';

export default function Search() {
  const dispatch = useDispatch();
  const handleChangeSearch = (event) => {
    // console.log(event.target.value);
    dispatch(quizzezActions.filterQuizzez({ search: event.target.value }));
  };

  return (
    <div>
      <div className='form'>
        <form className='search_form'>
          <button className='search_button'>
            <SearchIcon className='icon' />
          </button>
          <input
            type="text"
            placeholder="Search..."
            className="search_input"
            onChange={handleChangeSearch}
          />
        </form>
      </div>
    </div>
  );
}
