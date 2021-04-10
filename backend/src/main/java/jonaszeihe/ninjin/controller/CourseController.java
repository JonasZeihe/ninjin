package jonaszeihe.ninjin.controller;

import jonaszeihe.ninjin.model.*;
import jonaszeihe.ninjin.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

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
        return this.courseService.addCourse(dto.getCourseName(), dto.getCourseSize(), dto.getCourseImage(), dto.getCourseDescription());
    }

    @GetMapping("{courseName}")
    public Course getCourse(@PathVariable String courseName) {
        return courseService.getCourseByName(courseName)
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Course not found"));
    }

    @GetMapping
    public List<Course> listCourses() {
        return courseService.listCourses();
    }

    @DeleteMapping("{courseName}")
    public void deleteCourse(@PathVariable String courseName) {
        courseService.deleteCourse(courseName);
    }

    @PutMapping("/{courseName}")
    public void updateCourseDescription(@PathVariable String courseName, @RequestBody UpdatedCourseDescriptionDto dto) {
        if(!courseName.equals(dto.getCourseName())){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        }
        this.courseService.updateCourseDescription(dto.getCourseName(), dto.getUpdatedCourseDescription());
    }
    @PutMapping("/{courseName}/image")
    public void updateCourseImage(@PathVariable String courseName, @RequestBody UpdatedCourseImageDto dto) {
        if(!courseName.equals(dto.getCourseName())){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        }
        this.courseService.updateCourseImage(dto.getCourseName(), dto.getUpdatedCourseImage());
    }
}