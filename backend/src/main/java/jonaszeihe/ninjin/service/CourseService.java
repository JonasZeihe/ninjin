package jonaszeihe.ninjin.service;

import jonaszeihe.ninjin.db.CourseMongoDb;
import jonaszeihe.ninjin.model.Course;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class CourseService {
    private final CourseMongoDb courseMongoDb;


    public CourseService(CourseMongoDb courseMongoDb) {
        this.courseMongoDb = courseMongoDb;
    }

    public Course addCourse(String name, String duration) {

        if (courseMongoDb.existsById(name)) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Course " + name + " already exists");
        }

        Course course = Course.builder().name(name).duration(duration).build();
        return courseMongoDb.save(course);
    }

    public Optional<Course> getCourseByName(String courseName) {
        return courseMongoDb.findById(courseName);
    }

    public List<Course> listCourses() {
        return courseMongoDb.findAll();
    }

    public void deleteCourse(String name) {
        courseMongoDb.deleteById(name);

    }
}