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
    [ ] Parent Table Edit
        [π] Edit button on normal table view --> links to different view
        [π] delete button renders
        [ ] delete button confirmation
        [π] data fields become input fields
        [π] save button links back to normal table view
    [π] Helper View
        [ ] Dropdown with all children names
            OR
        [π] table renders all children connected to family
        --
        --
    [π] LOGOUT BUTTON WORKS ON ALL PAGES
        [π] brings the user to the login page  
        --
    [ ] STYLING
        [ ] change styling of all pages 
        --
    [ ] SELECT TABLE VIEW STRETCH