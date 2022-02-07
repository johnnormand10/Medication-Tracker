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
    [π] family
        [π] id
    [π] childMedicationJoiner
        [π] id SERIAL KEY 
        [π] childId
        [π] medicationId
        [π] comments
        [π] dosage
        [π] howOften
    [π] medication
        [π] id SERIAL KEY
        [π] name

Components [ ]
    [~] About
    [π] Login [ ] different styling
    [π] Register
    [ ] Invite
    [ ] Parent Child Input
    [ ] Manage Child
    [ ] Parent Table View
    [ ] Parent Table Edit
    [ ] Helper View