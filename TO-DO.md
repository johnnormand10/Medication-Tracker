KEY:
    [π] === complete
    [~] === possibly complete need to go back and look at it again


Database [π]
    [π] users
        [π] id SERIAL KEY
        [π] username
        [π] password
        [π] firstName
        [π] lastName
        [π] authLevel
    [π] child
        [π] id SERIAL KEY
        [π] firstName
        [π] parentId
    [π] childMedicationJoiner
        [π] id SERIAL KEY 
        [π] childId
        [π] medication
        [π] comments
        [π] dosage
        [π] howOften


Components [ ]
    [~] About
    [~] UserPage
    [π] Login 
    [π] Register
        [π] username button
        [π] first name input
        [π] last name input
        [π] password input 
        [π] submit button
        [π] family name input
    [π] Invite
        [π] username input
        [π] first name input
        [π] last name input
        [π] password input
        [π] helper checkbox
    [π] Parent Child Input
        [π] Child name input 
        [π] Medication input 
        [π] Comments input 
        [π] Dosage input 
        [π] How often input 
    [π] Parent Child Medication Table
        [π] Dropdown with child names
        [π] Headers and rows
        [π] input data from database using GET
        [ ] Can see separate data table if name in dropdown menu is clicked on
    [ ] Parent Table Edit
        [ ] Edit button on normal table view --> links to different view
        [ ] delete button renders
        [ ] delete button confirmation
        [ ] data fields become input fields
        [ ] save button links back to normal table view
    [ ] Helper View
        [ ] Dropdown with all children names
            OR
        [ ] table renders all children connected to family

    [ ] LOGOUT BUTTON WORKS ON ALL PAGES
        [ ] brings the user to the login page 

    [ ] STYLING
        [ ] change styling of all pages 