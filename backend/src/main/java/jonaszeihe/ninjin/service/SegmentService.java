package jonaszeihe.ninjin.service;

import jonaszeihe.ninjin.db.SegmentMongoDb;
import jonaszeihe.ninjin.model.Segment;
import jonaszeihe.ninjin.model.UpdatedSegmentContentDto;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Objects;

@Service
public class SegmentService {
    private final SegmentMongoDb segmentMongoDb;


    public SegmentService(SegmentMongoDb segmentMongoDb) {
        this.segmentMongoDb = segmentMongoDb;
    }

    public void addSegments(String courseName, String segmentContent, String courseSize) {
        int size;
        try {
            size = Integer.parseInt(courseSize);
        } catch (NumberFormatException e) {
            size = 1;
        }
        {
            if (size > 42) {
                throw new IllegalArgumentException();
            } else {
                for (int count = 1; count <= size; count++) {
                    String segmentName = courseName + " " + count;
                    Segment segment = Segment.builder().segmentName(segmentName).segmentContent(segmentContent).courseName(courseName).build();
                    segmentMongoDb.save(segment);
                }
            }
        }
    }

    public List<Segment> listSegmentsByCourseName(String courseName) {
        return segmentMongoDb.findAllByCourseName(courseName);
    }

    public Segment updateSegmentContent(String segmentName, String updatedSegmentContent) {
       Segment existingSegment = segmentMongoDb.findById(segmentName).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        Segment updatedSegment = existingSegment.toBuilder().segmentContent(updatedSegmentContent).build();

        return segmentMongoDb.save(updatedSegment);
    }


}

/*
Segment segment = segmentMongoDb.existsBySegmentName(segmentName).orElseThrow(()-> new ResponseStatusException(HttpStatus.NOT_FOUND));
*/