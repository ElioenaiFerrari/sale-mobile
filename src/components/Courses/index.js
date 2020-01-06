import React, {useState} from 'react';

import {Container, CourseList} from './styles';

import courses from './courses';

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState();

  return (
    <Container>
      <CourseList
        itemStyle={{}}
        selectedValue={selectedCourse}
        onValueChange={item => setSelectedCourse(item)}>
        {courses.map(course => (
          <CourseList.Item label={course} value={course} />
        ))}
      </CourseList>
    </Container>
  );
}
