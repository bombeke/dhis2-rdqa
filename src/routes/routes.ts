import Home from "./Home.svelte";
import Dashboard from "./Dashboard.svelte";
import NotFound from "./NotFound.svelte";
import Setup from "./setup/Setup.svelte";
import Assessments from "./assessments/Assessments.svelte";
import CreateAssessment from "./assessments/CreateAssessment.svelte";


export const routes = {
    "/": Home,
    "/dashboard": Dashboard,
    "/setup": Setup,
    "/assessments/assessments": Assessments,
    "/assessments/create": CreateAssessment,
    "*": NotFound
};