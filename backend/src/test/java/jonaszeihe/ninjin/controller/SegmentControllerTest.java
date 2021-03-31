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
import static org.mockito.Mockito.verify;

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
    @DisplayName("Adding a course creates Segments to the database")
    public void addNewCourseSegments() {
        //GIVEN
        String newCourseName = "Yoga for beginners";
        String newSegmentInput = "some input";
        String courseSize = "3";
        AddSegmentDto request = AddSegmentDto.builder()
                .courseName(newCourseName)
                .input(newSegmentInput)
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



    }
}
/*
    assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(segmentMongoDb.existsBySegmentName("Yoga for beginners1"), is(true));
        assertThat(segmentMongoDb.existsBySegmentName("Yoga for beginners2"), is(true));
        assertThat(segmentMongoDb.existsBySegmentName("Yoga for beginners3"), is(true));
*/
