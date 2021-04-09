package jonaszeihe.ninjin.service;

import jonaszeihe.ninjin.db.UserMongoDb;
import jonaszeihe.ninjin.model.User;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

import static org.hamcrest.Matchers.containsInAnyOrder;
import static org.mockito.Mockito.*;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.junit.jupiter.api.Assertions.*;


class UserServiceTest {

    private final UserMongoDb userMongoDb = mock(UserMongoDb.class);
    private final UserService userService = new UserService(userMongoDb);

    @Test
    @DisplayName("Add a new user to the database")
    public void testAddUser() {
        //GIVEN
        String newUserName = "Frank";
        String newCourseName = "Yoga";
        when(userMongoDb.existsById(newUserName)).thenReturn(false);
        User mockUser = User.builder().userName(newUserName).courseName(newCourseName).build();
        when(userMongoDb.save(mockUser))
                .thenReturn(mockUser);
        //WHEN
        User actual = userService.addUser(newUserName, newCourseName);

        //THEN
        User expectedUser = User.builder().userName(newUserName).courseName(newCourseName).build();
        assertThat(actual, is(expectedUser));
        verify(userMongoDb).save(expectedUser);
    }

    @Test
    @DisplayName("An already existing user cannot be added again to the same course")
    public void testAddExistingUser() {
        //GIVEN
        String existingUserName = "Frank";
        String existingCourseName = "Yoga";
        when(userMongoDb.existsByUserNameAndCourseName(existingUserName, existingCourseName)).thenReturn(true);
        //WHEN
        assertThrows(ResponseStatusException.class, () -> userService.addUser(existingUserName, existingCourseName));
        //THEN
        verify(userMongoDb, never()).save(any());
    }

    @Test
    @DisplayName("List users should return list from db")
    public void listUsers() {
        //GIVEN
        when(userMongoDb.findAll()).thenReturn(List.of(
                new User("Frank", "Yoga"),
                new User("Jonas", "Yoga")));
        //WHEN
        List<User> users = userService.listUsers();
        //THEN
        assertThat(users, containsInAnyOrder(
                new User("Frank", "Yoga"),
                new User("Jonas", "Yoga")));
    }

    @Test
    @DisplayName("DeleteUser deletes user from db ")
    public void deleteFromDb() {
        //WHEN
        userService.deleteByCourseNameAndUserName("yoga", "frank");

        //THEN
        verify(userMongoDb).removeByCourseNameAndUserName("yoga", "frank");
    }

    @Test
    @DisplayName("listUsersByCourse should only return users with a specified courseName")
    public void listUsersByCourse() {
        //GIVEN

        when(userMongoDb.findAllByCourseName("yoga")).thenReturn(List.of(
                new User("Frank", "yoga"),
                new User("Jonas", "yoga")));
        //WHEN
        List<User> users = userService.listUsersByCourse("yoga");
        //THEN
        assertThat(users, is(List.of(
                User.builder().userName("Frank").courseName("yoga").build(),
                User.builder().userName("Jonas").courseName("yoga").build()
        )));
    }
}
