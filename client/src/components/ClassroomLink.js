import React from 'react';
import { Link }from 'react-router-dom';

const ClassroomLink = (props) => (
  <div><Link to={`/classroom/${props.id}`}>{props.name}</Link></div>
)

export default ClassroomLink
