import { Assessment, ProgramStage } from "./models";

const authHeader = `Basic ${btoa('admin:@D1str1ct_M3')}`;


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