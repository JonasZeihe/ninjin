package jonaszeihe.ninjin.service;

import jonaszeihe.ninjin.db.UserMongoDb;
import jonaszeihe.ninjin.model.User;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class UserService {
    private final UserMongoDb userMongoDb;

    public UserService(UserMongoDb userMongoDb) {
        this.userMongoDb = userMongoDb;
    }

    public User addUser(String name) {

        if (userMongoDb.existsById(name)) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "User " + name + " is already in this course");
        }

        User user = User.builder().name(name).build();
        return userMongoDb.save(user);
    }
}
