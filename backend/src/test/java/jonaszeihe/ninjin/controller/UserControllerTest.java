package jonaszeihe.ninjin.controller;


import jonaszeihe.ninjin.db.UserMongoDb;
import jonaszeihe.ninjin.model.AddUserDto;
import jonaszeihe.ninjin.model.LoginDto;
import jonaszeihe.ninjin.model.User;
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
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class UserControllerTest {

    @LocalServerPort
    private int port;

    private String getUrl() {
        return "http://localhost:" + port + "api/user";
    }


    @Autowired
    private TestRestTemplate testRestTemplate;

    @Autowired
    private UserMongoDb userMongoDb;

    @Autowired
    private PasswordEncoder encoder;

    @Autowired
    private AppUserDb appUserDb;

    @BeforeEach
    public void setup() {
        userMongoDb.deleteAll();
    }

    private String loginToApp() {
        String password = encoder.encode("superSecretPassword");
        appUserDb.save(AppUser.builder().username("jonas").password(password).build());
        ResponseEntity<String> loginResponse = testRestTemplate.postForEntity("http://localhost:" + port + "auth/login", new LoginDto("jonas", "superSecretPassword"), String.class);
        return loginResponse.getBody();
    }

    @Test
    @DisplayName("Adding a user adds a user to the database")
    public void addNewUser() {
        //GIVEN
        String newUser = "Frank";
        String course = "Yoga";
        AddUserDto userDto = AddUserDto.builder().name(newUser).courseName(course).build();

        //WHEN
        String jwtToken = loginToApp();
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(jwtToken);
        HttpEntity<AddUserDto> entity = new HttpEntity<>(userDto, headers);
        ResponseEntity<User> response = testRestTemplate.exchange(getUrl(), HttpMethod.POST, entity, User.class);
        //THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), is(User.builder().name(newUser).courseName(course).build()));
        assertTrue(userMongoDb.existsByNameAndCourseName(newUser, course));
    }

    @Test
    @DisplayName("GET to /api/user should return a list of all users")
    public void getAllUsers() {
        //GIVEN
        userMongoDb.save(new User("Frank", "Yoga"));
        userMongoDb.save(new User("Jonas", "Yoga"));
        //WHEN
        String jwtToken = loginToApp();
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(jwtToken);
        HttpEntity <Void> entity = new HttpEntity<>(headers);
        ResponseEntity<User[]> response = testRestTemplate.exchange(
                getUrl(), HttpMethod.GET, entity, User[].class);

        //THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), arrayContainingInAnyOrder(
                new User("Frank", "Yoga"),
                new User("Jonas", "Yoga")));
    }

    @Test
    @DisplayName("DELETE to /api/user/<name> deletes the user in a specific course")
    public void deleteUser() {
        //GIVEN
        userMongoDb.save(new User("Frank", "Yoga"));
        userMongoDb.save(new User("Frank1", "Yoga"));
        userMongoDb.save(new User("Frank", "Yoga1"));
        //WHEN
        String jwtToken = loginToApp();
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(jwtToken);
        HttpEntity <Void> entity = new HttpEntity<>(headers);
        ResponseEntity<User> response = testRestTemplate.exchange(getUrl() + "/Yoga/Frank", HttpMethod.DELETE, entity, User.class);

        //THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(userMongoDb.existsByNameAndCourseName("Frank", "Yoga"), is(false));
        assertThat(userMongoDb.existsByNameAndCourseName("Frank1", "Yoga"), is(true));
        assertThat(userMongoDb.existsByNameAndCourseName("Frank", "Yoga1"), is(true));
    }

    @Test
    @DisplayName("ListUsersByCourse should return a list of Users with a specified courseName")
    public void listUsersByCourse() {
        //GIVEN
        userMongoDb.save(new User("Frank", "Yoga"));
        userMongoDb.save(new User("Frank1", "Yoga"));
        //WHEN
        String jwtToken = loginToApp();
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(jwtToken);
        HttpEntity <Void> entity = new HttpEntity<>(headers);
        ResponseEntity<User[]> response = testRestTemplate.exchange(
                getUrl() + "/Yoga", HttpMethod.GET, entity, User[].class);
        //THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), arrayContainingInAnyOrder(
                new User("Frank", "Yoga"),
                new User("Frank1", "Yoga")
        ));
    }
}