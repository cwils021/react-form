# Additional Tests

## Renders

1. Renders SuccessfulPost on valid submission only
2. Renders Errors (if any) after submit button
3. Error message disapears after fixing
4. Renders Technical Requirement Question when Fullstack Engineer is selected

## State

1. When rendered, Form Component state is equal to Provider context
2. Test that strings with only whitespace are not accepted as valid company names
3. Passing Customer Success and Landscaping as values, test errors exist and are company name only
4. Passing Product Manager, a valid string for company name, and Software development as values, test errors exisit and is only that the technical requirement field is required
5. Passing a valid submission, show and validated are then set to true

## Event Handlers

1. Simulate selection of company name field and input a valid string, then simulate a click outside of the company name field. Expect values.role to equal the string passed
2. Pass a valid submission to app and simulate submit form button click, expect state.values to equal values passed and app renders successful
3. Test that handleClose function reloads page when fired

## Schema

1. Automated test that JSON Schema is valid
