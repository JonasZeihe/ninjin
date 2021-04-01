package jonaszeihe.ninjin.service;

import jonaszeihe.ninjin.db.SegmentMongoDb;
import jonaszeihe.ninjin.model.Segment;
import jonaszeihe.ninjin.model.User;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.hamcrest.Matchers.containsInAnyOrder;
import static org.mockito.Mockito.*;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

class SegmentServiceTest {

    private final SegmentMongoDb segmentMongoDb = mock(SegmentMongoDb.class);
    private final SegmentService segmentService = new SegmentService(segmentMongoDb);

    @Test
    @DisplayName("Add new segments to the database")
    public void testAddSegments() {
        //GIVEN
        String newCourseName = "Yoga for beginners";
        String newSegmentContent = "some content";
        String newSegmentSize = "3";

        //WHEN
        segmentService.addSegments(newCourseName, newSegmentContent, newSegmentSize);
        //THEN
        verify(segmentMongoDb).save(Segment.builder()
                .segmentName("Yoga for beginners 1")
                .segmentContent("some content")
                .courseName(newCourseName)
                .build());
        verify(segmentMongoDb).save(Segment.builder()
                .segmentName("Yoga for beginners 2")
                .segmentContent("some content")
                .courseName(newCourseName)
                .build());
        verify(segmentMongoDb).save(Segment.builder()
                .segmentName("Yoga for beginners 3")
                .segmentContent("some content")
                .courseName(newCourseName)
                .build());
    }

    @Test
    @DisplayName("ListSegmentsByCourseName should return a list of Segments containing the courseName")
    public void testListSegmentsByCourseName() {
        //GIVEN
        String courseName = "yoga for beginners";
        when(segmentMongoDb.findAllByCourseName(courseName)).thenReturn(List.of(
                new Segment("yoga for beginners 1", "some content", "yoga for beginners"),
                new Segment("yoga for beginners 2", "some content", "yoga for beginners"),
                new Segment("yoga for beginners 3", "some content", "yoga for beginners")));
        //WHEN
        List<Segment> segments = segmentService.listSegmentsByCourseName(courseName);
        //THEN
        assertThat(segments, is(List.of(
                Segment.builder().segmentName("yoga for beginners 1").segmentContent("some content").courseName("yoga for beginners").build(),
                Segment.builder().segmentName("yoga for beginners 2").segmentContent("some content").courseName("yoga for beginners").build(),
                Segment.builder().segmentName("yoga for beginners 3").segmentContent("some content").courseName("yoga for beginners").build()
        )));

    }
    //Test adding a course with a size higher than 42 should throw exception
    //Test adding a course with a size lower than 1 should throw exception
}

