package jonaszeihe.ninjin.controller;

import jonaszeihe.ninjin.db.SegmentMongoDb;
import jonaszeihe.ninjin.model.*;
import jonaszeihe.ninjin.security.AppUser;
import jonaszeihe.ninjin.security.AppUserDb;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.*;
import org.springframework.security.crypto.password.PasswordEncoder;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class SegmentControllerTest {

    @LocalServerPort
    private int port;

    private String getUrl() {
        return "http://localhost:" + port + "api/segment";
    }

    @Autowired
    private TestRestTemplate testRestTemplate;

    @Autowired
    private SegmentMongoDb segmentMongoDb;

    @Autowired
    private PasswordEncoder encoder;

    @Autowired
    private AppUserDb appUserDb;

    @BeforeEach
    public void setup() {
        segmentMongoDb.deleteAll();
    }

    private String loginToApp() {
        String password = encoder.encode("superSecretPassword");
        appUserDb.save(AppUser.builder().username("jonas").password(password).build());
        ResponseEntity<String> loginResponse = testRestTemplate.postForEntity("http://localhost:" + port + "auth/login", new LoginDto("jonas", "superSecretPassword"), String.class);
        return loginResponse.getBody();
    }

    @Test
    @DisplayName("POST to /api/segment creates Segments to the database")
    public void addNewCourseSegments() {
        //GIVEN
        String newCourseName = "Yoga for beginners";
        String newSegmentImage = "some base64String";
        String newSegmentContent = "some content";
        String courseSize = "3";
        AddSegmentDto request = AddSegmentDto.builder()
                .courseName(newCourseName)
                .segmentImage(newSegmentImage)
                .segmentContent(newSegmentContent)
                .courseSize(courseSize)
                .build();
        //WHEN
        String jwtToken = loginToApp();
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(jwtToken);
        HttpEntity<AddSegmentDto> entity = new HttpEntity<>(request, headers);
        ResponseEntity<String> response = testRestTemplate.postForEntity(getUrl(),entity, String.class);
        //THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertTrue(segmentMongoDb.existsBySegmentName("Yoga for beginners 1"));
        assertTrue(segmentMongoDb.existsBySegmentName("Yoga for beginners 2"));
        assertTrue(segmentMongoDb.existsBySegmentName("Yoga for beginners 3"));
    }
    @Test
    @DisplayName("GET to api/segment/{courseName} should return a list of segments of the courseName")
    public void getSegmentsByCourseName() {
        //GIVEN
        segmentMongoDb.save(new Segment("yoga 1","some base64String", "some content", "yoga"));
        segmentMongoDb.save(new Segment("yoga 2","some base64String", "some content", "yoga"));
        segmentMongoDb.save(new Segment("yoga 3","some base64String", "some content", "yoga"));
        segmentMongoDb.save(new Segment("some segment 1","some base64String", "some content", "some course"));
        segmentMongoDb.save(new Segment("some segment 2","some base64String", "some content", "some course"));
        //WHEN
        String jwtToken = loginToApp();
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(jwtToken);
        HttpEntity <Void> entity = new HttpEntity<>(headers);
        ResponseEntity<Segment[]> response = testRestTemplate.exchange(
                getUrl() + "/yoga/segments", HttpMethod.GET, entity, Segment[].class);

        //THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), arrayContainingInAnyOrder(
                new Segment("yoga 1","some base64String", "some content", "yoga"),
                new Segment("yoga 2","some base64String", "some content", "yoga"),
                new Segment("yoga 3","some base64String", "some content", "yoga")));
    }
    //Test adding a course with a size higher than 42 should throw exception
    //Test adding a course with a size lower than 1 should throw exception
    //Test get single course


}

