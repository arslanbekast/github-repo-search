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
          size="small"
          color="primary"
          error={!!error}
          helperText={error}
          className={s.textField}
          value={query}
          onChange={onChangeHandler}
          onKeyUp={handleKeyPress}
        />
        <Button variant="contained" color="primary" className={s.button} onClick={handleSearch}>
          Искать
        </Button>
      </div>
    </>
  )
}
