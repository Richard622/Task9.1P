import faker from "faker"

const staffList2 = [
    {
        'key' : 3,
        'avatar' : faker.image.avatar(),
        'name' : faker.name.firstName(),
        'position' : faker.name.jobTitle()
    },
    {
        'key' : 4,
        'avatar' : faker.image.avatar(),
        'name' : faker.name.firstName(),
        'position' : faker.name.jobTitle()
    },
    {
        'key' : 5,
        'avatar' : faker.image.avatar(),
        'name' : faker.name.firstName(),
        'position' : faker.name.jobTitle()
    },

]

export default staffList2