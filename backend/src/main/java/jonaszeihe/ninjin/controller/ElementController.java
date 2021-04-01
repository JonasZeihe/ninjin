package jonaszeihe.ninjin.controller;


import jonaszeihe.ninjin.model.*;
import jonaszeihe.ninjin.service.ElementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

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
        this.elementService.addElements(dto.getSegmentName(), dto.getElementContent());
    }

    @GetMapping("{segmentName}")
    public List<Element> listElementsBySegmentName(@PathVariable String segmentName) {
        return elementService.listElementsBySegmentName(segmentName);
    }

    @PutMapping("/{elementName}")
    public Element updateElementContent(@PathVariable String elementName, @RequestBody UpdatedElementContentDto dto) {
        if(!elementName.equals(dto.getElementName())){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        }
        return this.elementService.updateElementContent(dto.getElementName(), dto.getUpdatedElementContent());
    }

}

