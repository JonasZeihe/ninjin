package jonaszeihe.ninjin.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UpdatedSegmentContentDto {
    private String segmentName;
    private String updatedSegmentContent;
}