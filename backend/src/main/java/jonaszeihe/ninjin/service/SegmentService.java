package jonaszeihe.ninjin.service;

import jonaszeihe.ninjin.db.SegmentMongoDb;
import jonaszeihe.ninjin.model.Segment;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SegmentService {
    private final SegmentMongoDb segmentMongoDb;


    public SegmentService(SegmentMongoDb segmentMongoDb) {
        this.segmentMongoDb = segmentMongoDb;
    }

    public void addSegments(String courseName, String input, String courseSize) {
        int size;
        try {
            size = Integer.parseInt(courseSize);
        } catch (NumberFormatException e) {
            size = 1;
        }
        for (int count = 1; count <= size; count++) {
            String segmentName = courseName + " " + count;
            Segment segment = Segment.builder().segmentName(segmentName).input(input).courseName(courseName).build();
            segmentMongoDb.save(segment);
        }
    }

    public List<Segment> listSegmentsByCourseName(String courseName) {
        return segmentMongoDb.findAllByCourseName(courseName);
    }


}

