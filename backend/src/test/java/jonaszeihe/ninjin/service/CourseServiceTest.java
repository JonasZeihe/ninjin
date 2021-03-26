package jonaszeihe.ninjin.service;

import jonaszeihe.ninjin.db.CourseMongoDb;
import jonaszeihe.ninjin.model.Course;
import jonaszeihe.ninjin.model.User;
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
        String newCourseDuration = "8";
        when(courseMongoDb.existsByName(newCourseName)).thenReturn(false);
        Course mockCourse = Course.builder()
                .name(newCourseName)
                .duration(newCourseDuration)
                .build();
        when(courseMongoDb.save(mockCourse))
                .thenReturn(mockCourse);
        //WHEN
        Course actual = courseService.addCourse(newCourseName, newCourseDuration);

        //THEN
        Course expectedCourse = Course.builder().name(newCourseName).duration(newCourseDuration).build();
        assertThat(actual, is(expectedCourse));
        verify(courseMongoDb).save(expectedCourse);
    }

    @Test
    @DisplayName("An already existing user cannot be added again")
    public void testAddExistingUser() {
        //GIVEN
        String existingCourseName = "Yoga for beginners";
        String existingCourseDuration = "8";
        when(courseMongoDb.existsByName(existingCourseName)).thenReturn(true);
        //WHEN
        assertThrows(ResponseStatusException.class, () -> courseService.addCourse(existingCourseName, existingCourseDuration));
        //THEN
        verify(courseMongoDb, never()).save(any());
    }
    @Test
    @DisplayName("List courses should return list from db")
    public void listCourses(){
        //GIVEN
        when(courseMongoDb.findAll()).thenReturn(List.of(
                new Course("Yoga1", "10"),
                new Course("Yoga2", "10")));
        //WHEN
        List<Course> courses = courseService.listCourses();
        //THEN
        assertThat(courses, containsInAnyOrder(
                new Course("Yoga1", "10"),
                new Course("Yoga2", "10")));
    }
    @Test
    @DisplayName("DeleteCourse deletes course from db ")
    public void deleteFromDb(){
        //WHEN
        courseService.deleteCourse("123");

        //THEN
        verify(courseMongoDb).deleteByName("123");
    }
    @Test
    @DisplayName("GetCourse returns course by name from db ")
    public void getCourseByName(){
        //GIVEN
        String courseName = "Yoga";
    when(courseMongoDb.findCourseByName(courseName)).thenReturn(Optional.of(
            new Course("Yoga", "10")));
        //WHEN
        Optional<Course> course = courseService.getCourseByName(courseName);
        //THEN
        assertThat(course.get(), is(new Course(courseName, "10")));
    }


}