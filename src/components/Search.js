import React, { useState } from 'react'
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer'

function Search({hideButton = false}) {
    const [{}, dispatch] = useStateValue();
    const navigate = useNavigate();
    const [input, setInput] = useState('');

    const search = e => {
        e.preventDefault();
        console.log(input);
        // do something with input...
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })
        navigate('/search');
    }

  return (
    <form className="search">
      <div className="search__input">
          <SearchIcon className="search__inputIcon" />
          <input value={input} onChange={e => setInput(e.target.value)} />
          <MicIcon className="search__inputIcon"/>
      </div>
      {!hideButton ?
        (<div className="search__buttons">
          <Button type="submit" variant="outlined" onClick={search}> Google Search</Button>
          <Button variant="outlined"> I'm feeling Lucky</Button>
        </div>
        ): (
        <div className="search__buttons">
          <Button className="search__buttonHidden" type="submit" variant="outlined" onClick={search}> Google Search</Button>
          <Button className="search__buttonHidden" variant="outlined"> I'm feeling Lucky</Button>
        </div>
        ) 
      }
    </form>
  )
}

export default Search
