package jonaszeihe.ninjin.service;

import jonaszeihe.ninjin.db.ElementMongoDb;
import jonaszeihe.ninjin.model.Element;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ElementService {
    private final ElementMongoDb elementMongoDb;


    public ElementService(ElementMongoDb elementMongoDb) {
        this.elementMongoDb = elementMongoDb;
    }

    public void addElements(String courseName, String elementContent, String courseSize) {
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
                    int elementSize = 7;
                    for (int elementCount = 1; elementCount <= elementSize; elementCount++) {
                        String elementName = segmentName + " " + "Element" + " " + elementCount;
                        Element element = Element.builder().elementName(elementName).elementContent(elementContent).segmentName(segmentName).build();
                        elementMongoDb.save(element);
                    }
                }
            }
        }
    }

    public List<Element> listElementsBySegmentName(String segmentName) {
        return elementMongoDb.findAllBySegmentName(segmentName);
    }

    public Optional<Element> getElementByElementName (String elementName) {
        return elementMongoDb.findById(elementName);
    }

    public Element updateElementContent(String elementName, String updatedElementContent) {
        Element existingElement = elementMongoDb.findById(elementName).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        Element updatedElement = existingElement.toBuilder().elementContent(updatedElementContent).build();

        return elementMongoDb.save(updatedElement);
    }

    public void updateElementGroupContentBySegmentName(String segmentName, String updatedElementContent) {
        List<Element> existingElementGroup = elementMongoDb.findAllBySegmentName(segmentName);
        existingElementGroup.forEach(element -> element.setElementContent(updatedElementContent));

        elementMongoDb.saveAll(existingElementGroup);
    }


}