package jonaszeihe.ninjin.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder(toBuilder = true)
@Document(collection = "elements")
public class Element {
    @Id
    private String elementName;
    private String elementImage;
    private String elementContent;
    private String segmentName;
}

