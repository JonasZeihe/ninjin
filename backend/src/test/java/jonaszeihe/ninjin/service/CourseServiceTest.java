package jonaszeihe.ninjin.service;

import jonaszeihe.ninjin.db.CourseMongoDb;
import jonaszeihe.ninjin.model.Course;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.web.server.ResponseStatusException;

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
        when(courseMongoDb.existsById(newCourseName)).thenReturn(false);
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
        when(courseMongoDb.existsById(existingCourseName)).thenReturn(true);
        //WHEN
        assertThrows(ResponseStatusException.class, () -> courseService.addCourse(existingCourseName, existingCourseDuration));
        //THEN
        verify(courseMongoDb, never()).save(any());
    }
}