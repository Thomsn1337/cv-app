const exampleData = {
    general: {
        firstName: "John",
        lastName: "Smith",
        about: "I use vim, btw. While also using Arch, btw.",
        title: "Software Developer",
        phone: "+39 123 456 7890",
        email: "john.smith@fakemail.com",
        dateOfBirth: "2001-04-23",
        location: "Italy",
    },
    education: [
        {
            name: "Local Engineering School",
            subject: "Electronics",
            startYear: "2015",
            endYear: "2020",
        },
    ],
    experience: [
        {
            name: "The Corporate",
            position: "Junior Electrical Engineer",
            activities: [
                "Planning electrical circuits",
                "Developing prototypes for new products",
                "Documenting designs, prototype tests and programs",
            ],
            startYear: "2020",
            endYear: "2022",
        },
        {
            name: "The Startup",
            position: "Junior Frontend Developer",
            activities: [
                "Developing UI components",
                "Applying styles",
                "Writing unit tests",
                "Documenting the development process",
            ],
            startYear: "2022",
            endYear: "2024",
        },
    ],
    skills: [
        {
            name: "HTML",
            rating: 4,
        },
        {
            name: "CSS",
            rating: 4,
        },
        {
            name: "JavaScript",
            rating: 4,
        },
        {
            name: "React",
            rating: 3,
        },
    ],
    languages: [
        {
            name: "German",
            rating: 5,
        },
        {
            name: "Italian",
            rating: 3,
        },
        {
            name: "English",
            rating: 4,
        },
    ],
};

export default exampleData;
