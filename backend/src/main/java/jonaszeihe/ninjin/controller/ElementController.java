package jonaszeihe.ninjin.controller;


import jonaszeihe.ninjin.model.*;
import jonaszeihe.ninjin.service.ElementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/element")
public class ElementController {

    private final ElementService elementService;

    @Autowired
    public ElementController(ElementService elementService) {
        this.elementService = elementService;
    }

    @PostMapping
    public void addElements(@RequestBody AddElementDto dto) {
        this.elementService.addElements(dto.getCourseName(), dto.getElementImage(), dto.getElementContent(), dto.getCourseSize());
    }

    @GetMapping("{segmentName}/elements")
    public List<Element> listElementsBySegmentName(@PathVariable String segmentName) {
        return elementService.listElementsBySegmentName(segmentName);
    }

    @GetMapping("{elementName}")
    public Element getElementByElementName(@PathVariable String elementName) {
        return elementService.getElementByElementName(elementName)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Element not found"));
    }

    @PutMapping("/{elementName}")
    public Element updateElementContent(@PathVariable String elementName, @RequestBody UpdatedElementContentDto dto) {
        if (!elementName.equals(dto.getElementName())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        }
        return this.elementService.updateElementContent(dto.getElementName(), dto.getUpdatedElementContent());
    }

    @PutMapping("/{segmentName}/elements")
    public List<Element> updateElementGroupContent(@PathVariable String segmentName, @RequestBody UpdatedElementGroupContentDto dto) {
        if (!segmentName.contains(dto.getSegmentName())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        }
        return this.elementService.updateElementGroupContentBySegmentName(dto.getSegmentName(), dto.getUpdatedElementContent());
    }

    @PutMapping("/{elementName}/image")
    public Element updateElementImage(@PathVariable String elementName, @RequestBody UpdatedElementImageDto dto) {
        if (!elementName.equals(dto.getElementName())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        }
        return this.elementService.updateElementImage(dto.getElementName(), dto.getUpdatedElementImage());
    }

    @PutMapping("/{segmentName}/imageGroup")
    public List<Element> updateElementGroupImage(@PathVariable String segmentName, @RequestBody UpdatedElementGroupImageDto dto) {
        if (!segmentName.contains(dto.getSegmentName())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        }
        return this.elementService.updateElementGroupImageBySegmentName(dto.getSegmentName(), dto.getUpdatedElementImage());
    }

}

