package jonaszeihe.ninjin.service;

import jonaszeihe.ninjin.db.SegmentMongoDb;
import jonaszeihe.ninjin.model.Segment;
import jonaszeihe.ninjin.model.UpdatedSegmentContentDto;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class SegmentService {
    private final SegmentMongoDb segmentMongoDb;


    public SegmentService(SegmentMongoDb segmentMongoDb) {
        this.segmentMongoDb = segmentMongoDb;
    }

    public void addSegments(String courseName, String segmentImage, String segmentContent, String courseSize) {
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
                    Segment segment = Segment.builder().segmentName(segmentName).segmentImage(segmentImage).segmentContent(segmentContent).courseName(courseName).build();
                    segmentMongoDb.save(segment);
                }
            }
        }
    }

    public List<Segment> listSegmentsByCourseName(String courseName) {
        return segmentMongoDb.findAllByCourseName(courseName);
    }

    public Optional<Segment> getSegmentBySegmentName(String segmentName) {
        return segmentMongoDb.findById(segmentName);
    }

    public void updateSegmentContent(String segmentName, String updatedSegmentContent) {
        Segment existingSegment = segmentMongoDb.findById(segmentName).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        Segment updatedSegment = existingSegment.toBuilder().segmentContent(updatedSegmentContent).build();

        segmentMongoDb.save(updatedSegment);
    }
    public void updateSegmentImage(String segmentName, String updatedSegmentImage) {
        Segment existingSegment = segmentMongoDb.findById(segmentName).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        Segment updatedSegment = existingSegment.toBuilder().segmentImage(updatedSegmentImage).build();

        segmentMongoDb.save(updatedSegment);
    }
}

