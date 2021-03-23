package jonaszeihe.ninjin.controller;

import jonaszeihe.ninjin.model.AddCourseDto;
import jonaszeihe.ninjin.model.Course;
import jonaszeihe.ninjin.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/course")
public class CourseController {

    private final CourseService courseService;

    @Autowired
    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }

    @PostMapping
    public Course addCourse(@RequestBody AddCourseDto dto) {
        return this.courseService.addCourse(dto.getName(), dto.getDuration());
    }

    @GetMapping
    public List<Course> listCourses() {
        return courseService.listCourses();
    }

    @DeleteMapping("{name}")
    public void deleteCourse(@PathVariable String name) {
        courseService.deleteCourse(name);
    }
}