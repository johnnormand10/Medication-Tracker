Database [ ]
    [ ] users
        [ ] id SERIAL KEY
        [ ] username
        [ ] password
        [ ] firstName
        [ ] lastName
        [ ] authLevel
    [ ] child
        [ ] id SERIAL KEY
        [ ] firstName
        [ ] parentId
    [ ] childMedicationJoiner
        [ ] id SERIAL KEY 
        [ ] childId
        [ ] medicationId
        [ ] comments
        [ ] dosage
        [ ] howOften
    [ ] medication
        [ ] id SERIAL KEY
        [ ] name

Components [ ]
    [ ] Login
    [ ] Register
    [ ] Invite
    [ ] Parent Child Input
    [ ] Manage Child
    [ ] Parent Table View
    [ ] Parent Table Edit
    [ ] Helper View