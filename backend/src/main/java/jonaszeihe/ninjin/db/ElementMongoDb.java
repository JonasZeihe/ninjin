package jonaszeihe.ninjin.db;

import jonaszeihe.ninjin.model.Element;
import jonaszeihe.ninjin.model.Segment;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ElementMongoDb extends PagingAndSortingRepository<Element, String> {
    List<Element> findAll();
    List<Element> findAllBySegmentName(String segmentName);
    boolean existsByElementName(String elementName);
    Optional<Element> findByElementName(String elementName);
}
