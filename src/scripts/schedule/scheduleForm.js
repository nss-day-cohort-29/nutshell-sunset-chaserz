console.log("scheduleForm.js");
//-------------------------------------------------------------------------------------------------------------------------------------------------
// Data structure:

// "events": [
//     {
//     "id": 300,
//     "userId": 1,
//     "datetime": "Jan 25, 2019",
//     "location": "Vanderbilt Wondr'y",
//     "name": "Nashville Game Developers"
//     },
//-------------------------------------------------------------------------------------------------------------------------------------------------

// STEPS FOR CREATING THE SCHEDULE FORM:
//	1. CREATE A VARIABLE THAT CAPTURES THE CONTAINER YOU WANT TO APPEND YOUR ELEMENTS TO ON THE DOM
//	2. CREATE YOUR FORM ELEMENTS (<h3></h3>, <form></form>, etc.)
//	3. SET ELEMENT ATTRIBUTES AND TEXT CONTENT
//	4. CREATE ELEMENT FRAGMENT
//	5. APPEND FRAGMENT TO THE DOM (VIA VARIABLE CREATED IN STEP 1)

//-------------------------------------------------------------------------------------------------------------------------------------------------
const createScheduleForm = {
	scheduleFormBuilder() {

		// CREATE VARIABLE FOR DOM CONTAINER:
		let scheduleFormContainer = document.getElementById("form-display-container")	// JISIE DID THIS AT THE END OF HER FORM (LINE 64 OF foodForm.js) BUT I PREFER IT AT THE BEGINNING.

		let scheduleFormHeader = document.createElement("h3");		// CREATE FORM ELEMENT (IT WILL NOT BE VISIBLE ON THE DOM UNTIL APPENDED)
		$(scheduleFormHeader).text("Events Form")	// JQUERY EQUIVALENT TO: scheduleFormHeader.textContent = "Events Form"
		$(scheduleFormHeader).attr({"class": "sched-form-header"})		// SET ELEMENT (HEADER) ATTRIBUTES (I USED JQUERY)

		let scheduleFormHeaderFragment = document.createDocumentFragment()	// CREATE FORM FRAGMENT

		$(scheduleFormHeader).appendTo(scheduleFormHeaderFragment).appendTo(scheduleFormContainer)	// ATTACH ELEMENT (HEADER) TO FRAGMENT

		// CREATE FORM, WITH FIELDS FOR EVENT NAME, DATE, TIME, AND LOCATION
//-------------------------------------------------------------------------------------------------------------------------------------------------
// FEATURE: Use the same form but use different classes for different module components. Write a function to toggle element classes according to which component was selected from the navbar.
//-------------------------------------------------------------------------------------------------------------------------------------------------
		let scheduleFormSection = document.createElement("form")	// CREATE BASIC FORM ELEMENT
		$(scheduleFormSection).appendTo(scheduleFormContainer)	// APPEND <form> TO DOM

		let scheduleFormField = document.createElement("fieldset")
		$(scheduleFormField).text("Enter Event Details Here").appendTo(scheduleFormSection)	// APPEND <legend> to <form>


		// CREATE FORM FIELD ELEMENTS:
		let scheduleNameInputContainer = document.createElement("div")
		$(scheduleNameInputContainer).attr({"class": "sched-name-container"})

		let scheduleNameField = document.createElement("div")
		$(scheduleNameField).attr({"class":"sched-name-field"})

		let scheduleNameUserInput = document.createElement("input")
		$(scheduleNameUserInput).attr({"id": "sched-name-input", "type": "text", "placeholder": "Event Name"})
		
		let scheduleNameFieldFragment = document.createDocumentFragment()
		$(scheduleNameUserInput).appendTo(scheduleNameField).appendTo(scheduleNameInputContainer).appendTo(scheduleNameFieldFragment).appendTo(scheduleFormSection)
//-------------------------------------------------------------------------------------------------------------------------------------------------
// FEATURE: Use element.style.display to toggle between hiding or showing the edit and delete buttons.
	// Good resource for this: https://plainjs.com/javascript/effects/hide-or-show-an-element-42/
		
		// let scheduleNameEditButton = document.createElement("button")
		// $(scheduleNameEditButton).attr({"id": "sched-name-edit-btn"})
		// let scheduleNameEditButtonFragment = document.createDocumentFragment()
		// $(scheduleNameEditButton).appendTo(scheduleNameEditButtonFragment).appendTo(scheduleNameInputContainer)	// APPENDS EDIT BUTTON TO EVENT NAME FIELD

		// let scheduleNameDeleteButton = document.createElement("button")
		// $(scheduleNameDeleteButton).attr({"id": "sched-name-delete-btn", "type": "submit"})
		// let scheduleNameDeleteButtonFragment = document.createDocumentFragment()
		// $(scheduleNameDeleteButton).appendTo(scheduleNameDeleteButtonFragment).appendTo(scheduleNameField)	// APPENDS DELETE BUTTON TO EVENT NAME FIELD
//-------------------------------------------------------------------------------------------------------------------------------------------------
		let scheduleDateTimeContainer = document.createElement("div")
		$(scheduleNameInputContainer).attr({"class": "sched-datetime-container"})

		let scheduleDateTimeField = document.createElement("div")
		$(scheduleDateTimeField).attr({"class":"sched-datetime-field-container"})

		let scheduleDateTimeFieldFragment = document.createDocumentFragment()
		$(scheduleDateTimeField).appendTo(scheduleDateTimeFieldFragment).appendTo(scheduleDateTimeContainer).appendTo(scheduleFormSection)
//-------------------------------------------------------------------------------------------------------------------------------------------------
// FEATURE: Add calendar widget to this section that will automatically populate the date field
//-------------------------------------------------------------------------------------------------------------------------------------------------

		let scheduleDateTimeInput = document.createElement("input")
		$(scheduleDateTimeInput).attr({"class":"sched-datetime-input", "type":"text", "placeholder":"Date \& Time"})
		let scheduleDateTimeInputFragment = document.createDocumentFragment()
		$(scheduleDateTimeInput).appendTo(scheduleDateTimeInputFragment).appendTo(scheduleDateTimeContainer).appendTo(scheduleFormSection)
//-------------------------------------------------------------------------------------------------------------------------------------------------
// FEATURE: create edit and delete buttons with a "toggle class"

		// let scheduleDateTimeEditButton = document.createElement("button")
		// let scheduleDateTimeDeleteButton = document.createElement("button")
//-------------------------------------------------------------------------------------------------------------------------------------------------
		let scheduleLocationContainer = document.createElement("div")
		$(scheduleLocationContainer).attr({"class": "sched-location-container"})

		let scheduleLocationField = document.createElement("div")
		$(scheduleLocationField).attr({"class":"sched-location-field-container"})
		let scheduleLocationFieldFragment = document.createDocumentFragment()
		$(scheduleLocationField).appendTo(scheduleLocationFieldFragment).appendTo(scheduleLocationContainer).appendTo(scheduleFormSection)

		let scheduleLocationInput = document.createElement("input")
		$(scheduleLocationInput).attr({"class":"sched-location-input", "type":"text", "placeholder":"Location"})
		let scheduleLocationFragment = document.createDocumentFragment()
		$(scheduleLocationInput).appendTo(scheduleLocationFragment).appendTo(scheduleLocationContainer).appendTo(scheduleFormSection)

//-------------------------------------------------------------------------------------------------------------------------------------------------
// FEATURE: Create edit/delete buttons with a "toggle class"

		// let scheduleLocationEditButton = document.createElement("button")
		// let scheduleLocationDeleteButton = document.createElement("button")
//-------------------------------------------------------------------------------------------------------------------------------------------------

		// CREATE SUBMIT BUTTON
		let scheduleFormButton = document.createElement("button")	// Same as: <button></button>
		scheduleFormButton.textContent = "Submit"					// Same as: <button>Submit</button>
		// SET ATTRIBUTES FOR scheduleFormButton WITH JAVASCRIPT:
		// scheduleFormButton.setAttribute("id", "schedule-form-btn")	// Same as: <button id="schedule-form-btn"></button>
		// scheduleFormButton.setAttribute("type", "submit")		   // Same as: <button type="submit" id="schedule-form-btn"></button>
		// SET ATTRIBUTES FOR scheduleFormButton WITH JQUERY:
		$(scheduleFormButton).attr({"id": "schedule-form-btn", "type":"submit"})	// See comment on line 39, above; This does the same thing.
		
//-------------------------------------------------------------------------------------------------------------------------------------------------
// FEATURE: Add keypress event for submit button
//-------------------------------------------------------------------------------------------------------------------------------------------------

		// CREATE THE ELEMENT (BUTTON) FRAGMENT:
		let scheduleButtonFragment = document.createDocumentFragment()
		$(scheduleFormButton).appendTo(scheduleButtonFragment).appendTo(scheduleFormContainer);
	}
}

export default createScheduleForm