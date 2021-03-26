package jonaszeihe.ninjin.db;
import jonaszeihe.ninjin.model.Course;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CourseMongoDb extends PagingAndSortingRepository<Course, String> {
    List<Course> findAll();
}