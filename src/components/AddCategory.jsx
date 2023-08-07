import { FormControl, TextField } from "@mui/material"
import { useState } from "react"

export const AddCategory = ( {onNewVal} ) => {

  const [inputVal, setInputVal] = useState('')

  const handleInputChange = (e) => {
    //console.log(e.target.value)
    setInputVal(e.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(inputVal.trim().length <= 1) return;
    //handleAddCat(categories => [inputVal, ...categories])
    onNewVal(inputVal.trim())
    setInputVal('')
  }


  return (
      <form onSubmit={handleSubmit} className="form-style">
        <TextField
          style={{width: "100vh"}}
          type="text"
          placeholder="Buscar Gifs"
          value={inputVal}
          onChange={handleInputChange}
        />
      </form>
  )
}
