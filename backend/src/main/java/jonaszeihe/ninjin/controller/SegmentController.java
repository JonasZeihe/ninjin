/*
package jonaszeihe.ninjin.controller;

import jonaszeihe.ninjin.model.AddSegmentDto;
import jonaszeihe.ninjin.model.Segment;
import jonaszeihe.ninjin.service.SegmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/segment")
public class SegmentController {

    private final SegmentService segmentService;

    @Autowired
    public SegmentController(SegmentService segmentService) {this.segmentService = segmentService;}

    @PostMapping
    public List<Segment> addSegments(@RequestBody int courseSize, AddSegmentDto dto) {
         while (courseSize > 0) {
            this.segmentService.addSegment(dto.getName());
            courseSize ++;
        }
    }
}
*/
