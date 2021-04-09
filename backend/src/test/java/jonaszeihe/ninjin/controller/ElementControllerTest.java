package jonaszeihe.ninjin.controller;

import jonaszeihe.ninjin.db.ElementMongoDb;
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
import static org.hamcrest.Matchers.arrayContainingInAnyOrder;
import static org.hamcrest.Matchers.is;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class ElementControllerTest {

    @LocalServerPort
    private int port;

    private String getUrl() {
        return "http://localhost:" + port + "api/element";
    }

    @Autowired
    private TestRestTemplate testRestTemplate;

    @Autowired
    private ElementMongoDb elementMongoDb;

    @Autowired
    private PasswordEncoder encoder;

    @Autowired
    private AppUserDb appUserDb;

    @BeforeEach
    public void setup() {
        elementMongoDb.deleteAll();
    }

    private String loginToApp() {
        String password = encoder.encode("superSecretPassword");
        appUserDb.save(AppUser.builder().username("jonas").password(password).build());
        ResponseEntity<String> loginResponse = testRestTemplate.postForEntity("http://localhost:" + port + "auth/login", new LoginDto("jonas", "superSecretPassword"), String.class);
        return loginResponse.getBody();
    }

    @Test
    @DisplayName("POST to /api/element creates Elements to the database")
    public void addNewCourseSegments() {
        //GIVEN
        String newCourseName ="Yoga for beginners";
        String newCourseSize = "2";
        String newElementContent = "some content";
        AddElementDto request = AddElementDto.builder()
                .courseName(newCourseName)
                .courseSize(newCourseSize)
                .elementContent(newElementContent)
                .build();
        //WHEN
        String jwtToken = loginToApp();
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(jwtToken);
        HttpEntity<AddElementDto> entity = new HttpEntity<>(request, headers);
        ResponseEntity<String> response = testRestTemplate.postForEntity(getUrl(),entity, String.class);
        //THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertTrue(elementMongoDb.existsByElementName("Yoga for beginners 1 Element 1"));
        assertTrue(elementMongoDb.existsByElementName("Yoga for beginners 1 Element 2"));
        assertTrue(elementMongoDb.existsByElementName("Yoga for beginners 1 Element 3"));
        assertTrue(elementMongoDb.existsByElementName("Yoga for beginners 1 Element 4"));
        assertTrue(elementMongoDb.existsByElementName("Yoga for beginners 1 Element 5"));
        assertTrue(elementMongoDb.existsByElementName("Yoga for beginners 1 Element 6"));
        assertTrue(elementMongoDb.existsByElementName("Yoga for beginners 1 Element 7"));
        assertTrue(elementMongoDb.existsByElementName("Yoga for beginners 2 Element 1"));
        assertTrue(elementMongoDb.existsByElementName("Yoga for beginners 2 Element 2"));
        assertTrue(elementMongoDb.existsByElementName("Yoga for beginners 2 Element 3"));
        assertTrue(elementMongoDb.existsByElementName("Yoga for beginners 2 Element 4"));
        assertTrue(elementMongoDb.existsByElementName("Yoga for beginners 2 Element 5"));
        assertTrue(elementMongoDb.existsByElementName("Yoga for beginners 2 Element 6"));
        assertTrue(elementMongoDb.existsByElementName("Yoga for beginners 2 Element 7"));

    }
    @Test
    @DisplayName("GET to api/element/{segmentName} should return a list of elements of the segmentName")
    public void getElementsBySegmentName() {
        //GIVEN
        elementMongoDb.save(new Element("yoga 1 Element 1", "some content", "yoga 1"));
        elementMongoDb.save(new Element("yoga 1 Element 2", "some content", "yoga 1"));
        elementMongoDb.save(new Element("yoga 1 Element 3", "some content", "yoga 1"));
        elementMongoDb.save(new Element("yoga 1 Element 4", "some content", "yoga 1"));
        elementMongoDb.save(new Element("yoga 2 Element 1", "some content", "yoga 2"));
        elementMongoDb.save(new Element("yoga 2 Element 2", "some content", "yoga 2"));

        //WHEN
        String jwtToken = loginToApp();
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(jwtToken);
        HttpEntity <Void> entity = new HttpEntity<>(headers);
        ResponseEntity<Element[]> response = testRestTemplate.exchange(
                getUrl() + "/yoga 1/elements", HttpMethod.GET, entity, Element[].class);

        //THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), arrayContainingInAnyOrder(
                new Element("yoga 1 Element 1", "some content", "yoga 1"),
                new Element("yoga 1 Element 2", "some content", "yoga 1"),
                new Element("yoga 1 Element 3", "some content", "yoga 1"),
                new Element("yoga 1 Element 4", "some content", "yoga 1")));
    }
    //Test adding a course with a size higher than 42 should throw exception
    //Test adding a course with a size lower than 1 should throw exception


}