import React from 'react'

const NewNote = (props) => {
  return(
    <form>
      <label> Title
        <input
          name={"title"}
          onChange={props.handleChange}
          value={props.title}
          type="text"
        />
      </label>
      <label> Note 
        <textarea
          name={"note"}
          onChange={props.handleChange}
          value={props.note}
          type="text"
        />

        <button type="submit" value="Submit" onClick={props.handleSubmit}>Submit</button>
      </label>
    </form>
  )
}

export default NewNote;
