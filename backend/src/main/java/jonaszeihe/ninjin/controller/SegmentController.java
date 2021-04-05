package jonaszeihe.ninjin.controller;

import jonaszeihe.ninjin.model.AddSegmentDto;
import jonaszeihe.ninjin.model.Segment;
import jonaszeihe.ninjin.model.UpdatedSegmentContentDto;
import jonaszeihe.ninjin.service.SegmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;


@RestController
@RequestMapping("api/segment")
public class SegmentController {

    private final SegmentService segmentService;

    @Autowired
    public SegmentController(SegmentService segmentService) {
        this.segmentService = segmentService;
    }

    @PostMapping
    public void addSegments(@RequestBody AddSegmentDto dto) {
        this.segmentService.addSegments(dto.getCourseName(), dto.getSegmentContent(), dto.getCourseSize());
    }

    @GetMapping("{courseName}")
    public List<Segment> listSegmentsByCourseName(@PathVariable String courseName) {
        return segmentService.listSegmentsByCourseName(courseName);
    }

    @PutMapping("/{segmentName}")
    public Segment updateSegmentContent(@PathVariable String segmentName, @RequestBody UpdatedSegmentContentDto dto) {
        if(!segmentName.equals(dto.getSegmentName())){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        }
        return this.segmentService.updateSegmentContent(dto.getSegmentName(), dto.getUpdatedSegmentContent());
    }

}