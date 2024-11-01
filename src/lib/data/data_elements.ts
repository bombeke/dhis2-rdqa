import { DataElement } from "../core/models";

export const data_elements: Array<DataElement> = [
    new DataElement("Assessment Name","AssessName","assess_name", "TEXT"),
    new DataElement("Facility Name","FacilityName","facility_name","TEXT"),
    new DataElement("Assessment Description","AssessDesc","assess_des","LONG_TEXT"),
    new DataElement("Created On","CreateOn","created_on","DATE"),
    new DataElement("Assessed By","Assess By","assess_by","TEXT")
]