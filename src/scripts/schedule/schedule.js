import createScheduleForm from "./schedule/scheduleForm"

createScheduleForm.scheduleFormBuilder();

// HN:
// Create eventhandlers to capture the values of userInput
// An example of this can be found on line 69 of: https://github.com/nss-day-cohort-29/fridgify/blob/implementing-edit-functionality/src/scripts/foodForm.js


// ---------------------------- BEGIN EVENT/CAL LISTENTERS/HANDLERS -------------------------------
// Create eventListener ("click") for save-cal-btn
// let calendarEvents = {
    let saveCalListener = document.getElementById("save-cal-btn").addEventListener("click", function(event) {
        let calFormNameInput = "calNameInput";
        let calFormDateInput = "calDateInput";
        let calFormLocationInput = "calLocationInput";
        console.log(calFormNameInput.value, calFormDateInput.value, calFormLocationInput.value);
    })
    // }
    // export default calendarEvents
    
    // Then the event should be displayed in the application in the Events component
    
    // ---------------------------- END EVENT/CAL LISTENTERS/HANDLERS -------------------------------
    