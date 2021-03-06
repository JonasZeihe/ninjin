package jonaszeihe.ninjin.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AddSegmentDto {
    private String courseName;
    private String segmentImage;
    private String segmentContent;
    private String courseSize;
}
