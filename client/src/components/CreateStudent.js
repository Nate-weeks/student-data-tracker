import React from 'react';

const CreateStudent = (props) => {
  return(
    <div>
      <label>Name
        <input
          name={"name"}
          value={props.name}
          onChange={props.handleChange}
          type="text"
        />

        <button type="submit" value="Submit" onClick={props.handleSubmit}>Submit</button>
      </label>
    </div>
  )
}

export default CreateStudent;
