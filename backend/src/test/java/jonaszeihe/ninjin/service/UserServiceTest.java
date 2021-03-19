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
        when(userMongoDb.existsById(newUser)).thenReturn(false);
        User mockUser = User.builder().name(newUser).build();
        when(userMongoDb.save(mockUser))
                .thenReturn(mockUser);
        //WHEN
        User actual = userService.addUser(newUser);

        //THEN
        User expectedUser = User.builder().name(newUser).build();
        assertThat(actual, is(expectedUser));
        verify(userMongoDb).save(expectedUser);
    }

    @Test
    @DisplayName("An already existing user cannot be added again")
    public void testAddExistingUser() {
        //GIVEN
        String existingUser = "Frank";
        when(userMongoDb.existsById(existingUser)).thenReturn(true);
        //WHEN
        assertThrows(ResponseStatusException.class, () -> userService.addUser(existingUser));
        //THEN
        verify(userMongoDb, never()).save(any());
    }

    @Test
    @DisplayName("List users should return list from db")
    public void listUsers(){
        //GIVEN
        when(userMongoDb.findAll()).thenReturn(List.of(
                new User("Frank"),
                new User("Jonas")));
        //WHEN
        List<User> users = userService.listUsers();
        //THEN
        assertThat(users, containsInAnyOrder(
                new User("Frank"),
                new User("Jonas")));
    }

    @Test
    @DisplayName("DeleteUser deletes user from db ")
    public void deleteFromDb(){
        //WHEN
        userService.deleteUser("123");

        //THEN
        verify(userMongoDb).deleteById("123");
    }


}