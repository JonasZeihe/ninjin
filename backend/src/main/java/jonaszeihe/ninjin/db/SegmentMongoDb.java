package jonaszeihe.ninjin.db;

import jonaszeihe.ninjin.model.Segment;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SegmentMongoDb extends PagingAndSortingRepository<Segment, String> {
    List<Segment> findAll();
}
