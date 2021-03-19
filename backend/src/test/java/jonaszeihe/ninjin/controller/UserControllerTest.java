package jonaszeihe.ninjin.controller;


import jonaszeihe.ninjin.db.UserMongoDb;
import jonaszeihe.ninjin.model.AddUserDto;
import jonaszeihe.ninjin.model.User;
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

    @BeforeEach
    public void setup() {
        userMongoDb.deleteAll();
    }

    @Test
    @DisplayName("Adding a user adds a user to the database")
    public void addNewUser() {
        //GIVEN
        String newUser = "Frank";
        AddUserDto userDto = AddUserDto.builder().name(newUser).build();

        //WHEN
        HttpEntity<AddUserDto> entity = new HttpEntity<>(userDto);
        ResponseEntity<User> response = testRestTemplate.postForEntity(getUrl(), entity, User.class);
        //THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), is(User.builder().name(newUser).build()));
        assertTrue(userMongoDb.existsById(newUser));
    }

}