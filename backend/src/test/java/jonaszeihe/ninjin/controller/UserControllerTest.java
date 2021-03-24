package jonaszeihe.ninjin.controller;


import jonaszeihe.ninjin.db.UserMongoDb;
import jonaszeihe.ninjin.model.AddUserDto;
import jonaszeihe.ninjin.model.User;
import jonaszeihe.ninjin.security.AppUserDb;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.client.RestTemplate;

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

    @MockBean
    private RestTemplate restTemplate;

    @Autowired
    private TestRestTemplate testRestTemplate;

    @Autowired
    private UserMongoDb userMongoDb;

    @Autowired
    private AppUserDb appUserDb;

    @Autowired
    private PasswordEncoder encoder;

    @BeforeEach
    public void setup() {
        userMongoDb.deleteAll();
        appUserDb.deleteAll();
    }

    @Test
    @DisplayName("Adding a user adds a user to the database")
    public void addNewUser() {
        //GIVEN
        String newUser = "Frank";
        AddUserDto userDto = AddUserDto.builder().name(newUser).build();
        when(restTemplate.getForEntity(getUrl()))

        //WHEN
        HttpEntity<AddUserDto> entity = new HttpEntity<>(userDto);
        ResponseEntity<User> response = testRestTemplate.postForEntity(getUrl(), entity, User.class);
        //THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), is(User.builder().name(newUser).build()));
        assertTrue(userMongoDb.existsById(newUser));
    }

    @Test
    @DisplayName("GET to /api/user should return a list of all users")
    public void getAllUsers() {
        //GIVEN
        userMongoDb.save(new User("Frank"));
        userMongoDb.save(new User("Jonas"));
        //WHEN
        ResponseEntity<User[]> response = testRestTemplate.getForEntity(getUrl(), User[].class);

        //THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), arrayContainingInAnyOrder(
                new User("Frank"),
                new User("Jonas")));
    }

    @Test
    @DisplayName("DELETE to /api/user/<name> deletes the user")
    public void deleteUser() {
        //GIVEN
        userMongoDb.save(new User("Frank"));
        userMongoDb.save(new User("Frank1"));
        //WHEN
        testRestTemplate.delete(getUrl() + "/Frank");
        //THEN
        assertThat(userMongoDb.existsById("Frank"), is(false));
        assertThat(userMongoDb.existsById("Frank1"), is(true));
    }

}