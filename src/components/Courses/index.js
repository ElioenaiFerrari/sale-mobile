import React, {useState, useEffect} from 'react';

import {Container, CourseList} from './styles';

import courses from './courses';
import {useSelector, useDispatch} from 'react-redux';
import {addCourse} from '../../actions/users';

export default function Courses() {
  const dispatch = useDispatch();
  /**
   * Course on change store
   */
  const course = useSelector(state => state.users.course);

  return (
    <Container>
      <CourseList
        selectedValue={course}
        onValueChange={course => {
          dispatch(addCourse(course));
        }}>
        {courses.map(course => (
          <CourseList.Item label={course} value={course} />
        ))}
      </CourseList>
    </Container>
  );
}
