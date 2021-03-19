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
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.hamcrest.MatcherAssert.assertThat;
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
        String newCourseName = "Yoga for beginners";
        String newCourseDuration = "8";
        AddCourseDto courseDto = AddCourseDto.builder()
                .name(newCourseName)
                .duration(newCourseDuration)
                .build();

        //WHEN
        HttpEntity<AddCourseDto> entity = new HttpEntity<>(courseDto);
        ResponseEntity<Course> response = testRestTemplate.postForEntity(getUrl(), entity, Course.class);
        //THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), is(Course.builder()
                .name(newCourseName)
                .duration(newCourseDuration)
                .build()));
        assertTrue(courseMongoDb.existsById(newCourseName));
    }

}