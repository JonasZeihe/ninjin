package jonaszeihe.ninjin.controller;

import jonaszeihe.ninjin.model.AddUserDto;
import jonaszeihe.ninjin.model.User;
import jonaszeihe.ninjin.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/user")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public User addUser(@RequestBody AddUserDto dto) {
        return this.userService.addUser(dto.getName(), dto.getCourseName());
    }

    @GetMapping("{courseName}")
    public List<User> listUsersByCourse(@PathVariable String courseName) {
        return userService.listUsersByCourse(courseName);
    }

    @GetMapping
    public List<User> listUsers() {
        return userService.listUsers();
    }

    @DeleteMapping("{name}")
    public void deleteUser(@PathVariable String name) {
        userService.deleteUser(name);
    }

}
