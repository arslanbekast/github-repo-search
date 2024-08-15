import { Button, TextField } from '@mui/material'
import s from './SearchBar.module.scss'
import { useSearch } from '@/features/search/hooks/useSearch'

export const SearchBar = () => {
  const { query, error, onChangeHandler, handleSearch, handleKeyPress } = useSearch()

  return (
    <>
      <div className={s.searchBar}>
        <TextField
          placeholder="Поисковый запрос"
          variant="outlined"
          color="primary"
          error={!!error}
          helperText={error}
          className={s.textField}
          value={query}
          onChange={onChangeHandler}
          onKeyUp={handleKeyPress}
          sx={{
            '& .MuiOutlinedInput-input': {
              backgroundColor: '#f2f2f2',
              padding: '9px 16px',
            },
            '& .Mui-error': {
              fontWeight: 700,
            },
          }}
        />
        <Button variant="contained" color="primary" className={s.button} onClick={handleSearch}>
          Искать
        </Button>
      </div>
    </>
  )
}
