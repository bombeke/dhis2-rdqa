export class Assessment {
    id?: string;
    name: string;
    shortName: string;
    programType: string = "WITHOUT_REGISTRATION";
    organisationUnits: [{id: string }]
    //categoryCombo: {id: string}
    public constructor(name: string, shortName: string, organisationUnits: [{id: string }]){
        this.name = name;
        this.shortName = shortName;
        this.organisationUnits = organisationUnits;
        //this.categoryCombo = categoryCombo;
    }
}

export class DatastoreAssessment {
    id: string;
    name: string;
    date: string;
    facilities: string[];
    public constructor(id: string, name: string, date: string, facilities: string[]){
        this.id = id;
        this.name = name;
        this.date = date;
        this.facilities = facilities;
    }
}

export class ProgramStage {
    id?: string;
    name: string;
    program: {id: string};
    programStageDataElements: [any]
    public constructor(name: string, program: {id: string}, programStageDataElements: [any]){
        this.name = name;
        this.program = program;
        this.programStageDataElements = programStageDataElements;
    }
}

export class DataElement {
    id?: string;
    name: string;
    shortName: string;
    code: string;
    valueType: any;
    aggregationType: string = "NONE";
    domainType: string = "TRACKER"

    public constructor(name: string, shortName: string, code: string, valueType: any){
        this.name = name;
        this.shortName = shortName;
        this.code = code;
        this.valueType = valueType;
    }
}

export interface DataElementValue {
    dataElement: string;
    value: any;
}

export class ProgramEvent {
    program: string;
    orgUnit: string;
    eventDate: string;
    dataValues: DataElementValue[];
    status: string;
    public constructor(program:string, orgUnit:string, eventDate:string, status: string, dataValues: DataElementValue[]){
        this.program = program;
        this.orgUnit = orgUnit;
        this.eventDate = eventDate;
        this.status = status;
        this.dataValues = dataValues;
    }
}