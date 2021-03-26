package jonaszeihe.ninjin.controller;


import jonaszeihe.ninjin.db.CourseMongoDb;
import jonaszeihe.ninjin.model.AddCourseDto;
import jonaszeihe.ninjin.model.Course;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.*;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.arrayContainingInAnyOrder;
import static org.hamcrest.Matchers.is;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class CourseControllerTest {

    @LocalServerPort
    private int port;

    private String getUrl() {
        return "http://localhost:" + port + "api/course";
    }

    @Autowired
    private TestRestTemplate testRestTemplate;

    @Autowired
    private CourseMongoDb courseMongoDb;

    @BeforeEach
    public void setup() {
        courseMongoDb.deleteAll();
    }

    @Test
    @DisplayName("Adding a course adds a course to the database")
    public void addNewCourse() {
        //GIVEN
        HttpHeaders headers = new HttpHeaders();
        String newCourseName = "Yoga for beginners";
        String newCourseDuration = "8";
        AddCourseDto courseDto = AddCourseDto.builder()
                .name(newCourseName)
                .duration(newCourseDuration)
                .build();

        //WHEN
        HttpEntity<AddCourseDto> entity = new HttpEntity<>(courseDto);
        ResponseEntity<Course> response = testRestTemplate.exchange(getUrl(), HttpMethod.POST, entity, Course.class);
        //THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), is(Course.builder()
                .name(newCourseName)
                .duration(newCourseDuration)
                .build()));
        assertTrue(courseMongoDb.existsById(newCourseName));
    }

    @Test
    @DisplayName("GET to /api/course should return a list of all courses")
    public void getAllCourses() {
        //GIVEN
        HttpHeaders headers = new HttpHeaders();
        courseMongoDb.save(new Course("Yoga1", "10"));
        courseMongoDb.save(new Course("Yoga2", "10"));
        //WHEN
        HttpEntity <Void> entity = new HttpEntity<>(headers);
        ResponseEntity<Course[]> response = testRestTemplate.exchange(getUrl(), HttpMethod.GET, entity, Course[].class);

        //THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), arrayContainingInAnyOrder(
                new Course("Yoga1", "10"),
                new Course("Yoga2", "10")));
    }

    @Test
    @DisplayName("DELETE to /api/course/<name> deletes the course")
    public void deleteCourse() {
        //GIVEN
        courseMongoDb.save(new Course("Yoga1", "10"));
        courseMongoDb.save(new Course("Yoga2", "10"));
        //WHEN
        HttpHeaders headers = new HttpHeaders();
        HttpEntity <Void> entity = new HttpEntity<>(headers);
        ResponseEntity<Course> response = testRestTemplate.exchange(getUrl() + "/Yoga1", HttpMethod.DELETE, entity, Course.class);
        //THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(courseMongoDb.existsById("Yoga1"), is(false));
        assertThat(courseMongoDb.existsById("Yoga2"), is(true));
    }

    @Test
    @DisplayName("GET to /api/course/<name> returns specified course")
    public void getCourseByName() {
        //GIVEN
        courseMongoDb.save(new Course("Yoga1", "10"));
        //WHEN
        HttpHeaders headers = new HttpHeaders();
        HttpEntity <Void> entity = new HttpEntity<>(headers);
        ResponseEntity<Course> response = testRestTemplate.exchange(getUrl() + "/Yoga1", HttpMethod.GET, entity, Course.class);
        //THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), is(new Course("Yoga1", "10")));
    }

}