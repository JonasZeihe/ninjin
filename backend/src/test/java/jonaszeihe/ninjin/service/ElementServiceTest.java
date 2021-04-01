package jonaszeihe.ninjin.service;

import jonaszeihe.ninjin.db.ElementMongoDb;
import jonaszeihe.ninjin.model.Element;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.mockito.Mockito.*;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

class ElementServiceTest {

    private final ElementMongoDb elementMongoDb = mock(ElementMongoDb.class);
    private final ElementService elementService = new ElementService(elementMongoDb);

    @Test
    @DisplayName("Add new elements to the database")
    public void testAddElements() {
        //GIVEN
        String newSegmentName = "Yoga for beginners 1";
        String newElementContent = "some content";

        //WHEN
        elementService.addElements(newSegmentName, newElementContent);
        //THEN
        verify(elementMongoDb).save(Element.builder()
                .elementName("Yoga for beginners 1 Element 1")
                .elementContent("some content")
                .segmentName("Yoga for beginners 1")
                .build());
        verify(elementMongoDb).save(Element.builder()
                .elementName("Yoga for beginners 1 Element 2")
                .elementContent("some content")
                .segmentName("Yoga for beginners 1")
                .build());
        verify(elementMongoDb).save(Element.builder()
                .elementName("Yoga for beginners 1 Element 3")
                .elementContent("some content")
                .segmentName("Yoga for beginners 1")
                .build());
        verify(elementMongoDb).save(Element.builder()
                .elementName("Yoga for beginners 1 Element 4")
                .elementContent("some content")
                .segmentName("Yoga for beginners 1")
                .build());
        verify(elementMongoDb).save(Element.builder()
                .elementName("Yoga for beginners 1 Element 5")
                .elementContent("some content")
                .segmentName("Yoga for beginners 1")
                .build());
        verify(elementMongoDb).save(Element.builder()
                .elementName("Yoga for beginners 1 Element 6")
                .elementContent("some content")
                .segmentName("Yoga for beginners 1")
                .build());
        verify(elementMongoDb).save(Element.builder()
                .elementName("Yoga for beginners 1 Element 7")
                .elementContent("some content")
                .segmentName("Yoga for beginners 1")
                .build());
    }

    @Test
    @DisplayName("ListSegmentsByCourseName should return a list of Segments containing the courseName")
    public void testListSegmentsByCourseName() {
        //GIVEN
        String segmentName = "yoga for beginners 1";
        when(elementMongoDb.findAllBySegmentName(segmentName)).thenReturn(List.of(
                new Element("yoga for beginners 1 Element 1", "some content", "yoga for beginners 1"),
                new Element("yoga for beginners 1 Element 2", "some content", "yoga for beginners 1"),
                new Element("yoga for beginners 1 Element 3", "some content", "yoga for beginners 1")));

                //WHEN
        List<Element> elements = elementService.listElementsBySegmentName(segmentName);
        //THEN
        assertThat(elements, is(List.of(
                Element.builder().elementName("yoga for beginners 1 Element 1").elementContent("some content").segmentName("yoga for beginners 1").build(),
                Element.builder().elementName("yoga for beginners 1 Element 2").elementContent("some content").segmentName("yoga for beginners 1").build(),
                Element.builder().elementName("yoga for beginners 1 Element 3").elementContent("some content").segmentName("yoga for beginners 1").build()
        )));

    }
}