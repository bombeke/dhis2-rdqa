import { Assessment, DatastoreAssessment, ProgramStage, ProgramEvent } from "./models";
import { Config } from "./Settings";

const authHeader = Config.authHeader;
const baseUrl = Config.baseUrl;
// const authHeader = `Basic ${btoa('admin:@D1str1ct_M3')}`;
// const baseUrl = 'http://207.244.250.35:8095';


//Uses the datastore to store assessments meant for the Mobile APP
export async function saveAssessment(assessment: DatastoreAssessment){
    const endpoint = `${baseUrl}/api/dataStore/rdqa/assessments`;
    try {
        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": authHeader
            },
            body: JSON.stringify(assessment),
        });

        if (response.ok) {
            console.log(`The assessment has been created::`);
        } else {
            const error = await response.json();
            console.error("Error creating namespace:", error.message);
        }
    } catch (error) {
        console.error("Error creating namespace:", error);
    }
}

//Uses the program endpoint to store data for the app
export async function saveProgramEvent(programEvent:ProgramEvent) {
  const endpoint = `${baseUrl}/api/39/tracker`;
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authHeader
      },
      body: JSON.stringify(programEvent),
    });

    if (!response.ok) {
      throw new Error(`Error creating event: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Event created:", data);
    return data;

  } catch (error) {
    console.error("Error creating event:", error);
  }
}
export async function createProgram() {
    const assessment = new Assessment("Assessment Visit", "AssessmentVisit", [{id:'r9yNKBzB27W'}])
    const endpoint = 'http://207.244.250.35:8095/api/programs';
    try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': authHeader
          },
          body: JSON.stringify(assessment)
        });
  
        if (response.ok) {
          console.log(`Data element created: ${assessment.name}`);
        } else {
          const errorData = await response.json();
          console.error(`Failed to create ${assessment.name}:`, errorData);
        }
      } catch (error) {
        console.error(`Error creating data element ${assessment.name}:`, error);
      }
}

export async function createProgramStage(programStage:ProgramStage) {
    const endpoint = 'http://207.244.250.35:8095/api/programStages';
    try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': authHeader
          },
          body: JSON.stringify(programStage)
        });
  
        if (response.ok) {
          console.log(`Data element created: ${programStage.name}`);
        } else {
          const errorData = await response.json();
          console.error(`Failed to create ${programStage.name}:`, errorData);
        }
      } catch (error) {
        console.error(`Error creating data element ${programStage.name}:`, error);
      }
}