package jonaszeihe.ninjin.db;
import jonaszeihe.ninjin.model.User;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserMongoDb extends PagingAndSortingRepository<User, String> {
    List<User> findAll();
    List<User> findAllByCourseName(String courseName);
    boolean existsByNameAndCourseName(String name, String courseName);
    void deleteByName(String name);
    void removeByCourseNameAndName(String courseName, String name);
}