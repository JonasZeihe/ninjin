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
@Document(collection = "courses")
public class Course {
    @Id
    private String courseName;
    private String courseSize;
    private String courseImage;
    private String courseDescription;
}
