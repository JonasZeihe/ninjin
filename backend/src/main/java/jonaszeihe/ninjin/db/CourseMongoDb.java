package jonaszeihe.ninjin.db;
import jonaszeihe.ninjin.model.Course;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseMongoDb extends PagingAndSortingRepository<Course, String> {
    List<Course> findAll();
}