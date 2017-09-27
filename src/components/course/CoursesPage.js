import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class CoursesPage extends React.Component {

  // (1) constructor initializes the state and call the bind function
  constructor(props, context) {
    super(props, context);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

  // (2) child functions which are call by render
  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }

  // (3) render functions
  render() {
    //debugger;
    const {courses} = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <input
          type="submit"
          value="Add Course"
          className="btn btn-primary"
          onClick={this.redirectToAddCoursePage}
        />
        <CourseList courses={courses}/>
      </div>
    );
  }
}

// (4) prop types
CoursesPage.propTypes = {
  //dispatch: PropTypes.func.isRequired, as we are using map dispatch to props, this is not required
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired

};

//(5) Redux connect and related functions
function mapStateToProps(state, ownProps) {
  //debugger;
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //bindActionCreators -  binds the action and dispatch
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
