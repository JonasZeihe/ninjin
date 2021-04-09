package jonaszeihe.ninjin.service;

import jonaszeihe.ninjin.db.UserMongoDb;
import jonaszeihe.ninjin.model.User;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class UserService {
    private final UserMongoDb userMongoDb;

    public UserService(UserMongoDb userMongoDb) {
        this.userMongoDb = userMongoDb;
    }

    public User addUser(String userName, String courseName) {
        if (userMongoDb.existsByUserNameAndCourseName(userName, courseName)) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "User " + userName + " is already in this course");
        }

        User user = User.builder().userName(userName).courseName(courseName).build();
        return userMongoDb.save(user);
    }

    public List<User> listUsers() {
        return userMongoDb.findAll();
    }

    public List<User> listUsersByCourse(String courseName) {
        return userMongoDb.findAllByCourseName(courseName);
    }

    public void deleteByCourseNameAndUserName(String courseName, String userName) {
        userMongoDb.removeByCourseNameAndUserName(courseName, userName);
    }
}
