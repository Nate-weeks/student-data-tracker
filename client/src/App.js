import React from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import HomepageContainer from './containers/HomepageContainer';
import ClassroomContainer from './containers/ClassroomContainer';
import CreateStudentContainer from './containers/CreateStudentContainer';

const App = () => (
    <Router>
      <div>
        <Route exact path='/' component={HomepageContainer} />
        <Route path={`/classroom/:classroom_id`} component={ClassroomContainer} />
        <Route path={`/classroom/:classroom_id/createstudent`} component={CreateStudentContainer} />
        </div>
    </Router>
    );

export default App;
