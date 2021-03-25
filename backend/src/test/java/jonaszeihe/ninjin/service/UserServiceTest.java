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
        String newUser = "Frank";
        String courseName = "Yoga";
        when(userMongoDb.existsById(newUser)).thenReturn(false);
        User mockUser = User.builder().name(newUser).courseName(courseName).build();
        when(userMongoDb.save(mockUser))
                .thenReturn(mockUser);
        //WHEN
        User actual = userService.addUser(newUser, courseName);

        //THEN
        User expectedUser = User.builder().name(newUser).courseName(courseName).build();
        assertThat(actual, is(expectedUser));
        verify(userMongoDb).save(expectedUser);
    }

    @Test
    @DisplayName("An already existing user cannot be added again to the same course")
    public void testAddExistingUser() {
        //GIVEN
        String existingUser = "Frank";
        String existingCourse = "Yoga";
        when(userMongoDb.existsByNameAndCourseName(existingUser, existingCourse)).thenReturn(true);
        //WHEN
        assertThrows(ResponseStatusException.class, () -> userService.addUser(existingUser, existingCourse));
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
        userService.deleteUser("123");

        //THEN
        verify(userMongoDb).deleteByName("123");
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
                User.builder().name("Frank").courseName("yoga").build(),
                User.builder().name("Jonas").courseName("yoga").build()
        )));
    }
}
