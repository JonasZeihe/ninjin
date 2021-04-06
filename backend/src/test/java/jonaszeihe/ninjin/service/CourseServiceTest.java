package jonaszeihe.ninjin.service;

import jonaszeihe.ninjin.db.CourseMongoDb;
import jonaszeihe.ninjin.model.Course;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

import static org.hamcrest.Matchers.containsInAnyOrder;
import static org.mockito.Mockito.*;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.junit.jupiter.api.Assertions.*;


class CourseServiceTest {

    private final CourseMongoDb courseMongoDb = mock(CourseMongoDb.class);
    private final CourseService courseService = new CourseService(courseMongoDb);

    @Test
    @DisplayName("Add a new course to the database")
    public void testAddCourse() {
        //GIVEN
        String newCourseName = "Yoga for beginners";
        String newCourseSize = "8";
        String newCourseDescription = "some description";
        when(courseMongoDb.existsById(newCourseName)).thenReturn(false);
        Course mockCourse = Course.builder()
                .courseName(newCourseName)
                .courseSize(newCourseSize)
                .courseDescription(newCourseDescription)
                .build();
        when(courseMongoDb.save(mockCourse))
                .thenReturn(mockCourse);
        //WHEN
        Course actual = courseService.addCourse(newCourseName, newCourseSize, newCourseDescription);

        //THEN
        Course expectedCourse = Course.builder().courseName(newCourseName).courseSize(newCourseSize).courseDescription(newCourseDescription).build();
        assertThat(actual, is(expectedCourse));
        verify(courseMongoDb).save(expectedCourse);
    }

    @Test
    @DisplayName("An already existing user cannot be added again")
    public void testAddExistingUser() {
        //GIVEN
        String existingCourseName = "Yoga for beginners";
        String existingCourseSize = "8";
        String existingCourseDescription = "some description";
        when(courseMongoDb.existsById(existingCourseName)).thenReturn(true);
        //WHEN
        assertThrows(ResponseStatusException.class, () -> courseService.addCourse(existingCourseName, existingCourseSize, existingCourseDescription));
        //THEN
        verify(courseMongoDb, never()).save(any());
    }
    @Test
    @DisplayName("List courses should return list from db")
    public void listCourses(){
        //GIVEN
        when(courseMongoDb.findAll()).thenReturn(List.of(
                new Course("Yoga1", "10", "some description"),
                new Course("Yoga2", "10", "some description")));
        //WHEN
        List<Course> courses = courseService.listCourses();
        //THEN
        assertThat(courses, containsInAnyOrder(
                new Course("Yoga1", "10", "some description"),
                new Course("Yoga2", "10", "some description")));
    }
    @Test
    @DisplayName("DeleteCourse deletes course from db ")
    public void deleteFromDb(){
        //WHEN
        courseService.deleteCourse("123");

        //THEN
        verify(courseMongoDb).deleteById("123");
    }
    @Test
    @DisplayName("GetCourse returns course by name from db ")
    public void getCourseByName(){
        //GIVEN
        String courseName = "Yoga";
    when(courseMongoDb.findById(courseName)).thenReturn(Optional.of(
            new Course("Yoga", "10", "some description")));
        //WHEN
        Optional<Course> course = courseService.getCourseByName(courseName);
        //THEN
        assertThat(course.get(), is(new Course(courseName, "10", "some description")));
    }


}