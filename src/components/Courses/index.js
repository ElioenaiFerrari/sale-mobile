import React, {useState, useEffect} from 'react';
/**
 * Courses is a Picker/Select that contain all courses of UCV
 *
 * Redux
 * Tools
 * Actions users
 */
import {useSelector, useDispatch} from 'react-redux';
import {addCourse} from '../../actions/users';
/**
 * Styles
 */
import {Container, CourseList} from './styles';
/**
 * Array of all courses contain
 */
import courses from './courses';

export default function Courses() {
  const dispatch = useDispatch();
  /**
   * Course on change store
   */
  const course = useSelector(state => state.users.course);
  const users = useSelector(state => state.users);

  useEffect(() => console.log(users), [users]);

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
