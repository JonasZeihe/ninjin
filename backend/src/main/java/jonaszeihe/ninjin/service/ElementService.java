package jonaszeihe.ninjin.service;

import jonaszeihe.ninjin.db.ElementMongoDb;
import jonaszeihe.ninjin.model.Element;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class ElementService {
    private final ElementMongoDb elementMongoDb;


    public ElementService(ElementMongoDb elementMongoDb) {
        this.elementMongoDb = elementMongoDb;
    }

    public void addElements(String segmentName, String elementContent) {
        int size = 7;
        for (int count = 1; count <= size; count++) {
            String elementName = segmentName + " Element " + count;
            Element element = Element.builder().elementName(elementName).elementContent(elementContent).segmentName(segmentName).build();
            elementMongoDb.save(element);
        }
    }


    public List<Element> listElementsBySegmentName(String segmentName) {
        return elementMongoDb.findAllBySegmentName(segmentName);
    }

    public Element updateElementContent(String elementName, String updatedElementContent) {
        Element existingElement = elementMongoDb.findByElementName(elementName).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        Element updatedElement = existingElement.toBuilder().elementContent(updatedElementContent).build();

        return elementMongoDb.save(updatedElement);
    }


}