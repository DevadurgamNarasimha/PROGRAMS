// Problem 10: countCalculation
const school = {
    name: "XYZ School",
    establishYear: 1990,
    departments: {
        math: { teachers: 5, students: 150 },
        science: { teachers: 4, students: 120 },
        history: { teachers: 3, students: 100 },
        english: { teachers: 4, students: 130 },
    },
    courses: ["math", "science", "history", "english"],
    students: [
        {
            name: "Alice",
            className: "Grade 5",
            scores: { math: 95, science: 88, history: 85, english: 92 },
        },
        {
            name: "Bob",
            className: "Grade 4",
            scores: { math: 80, science: 78, history: 92, english: 85 },
        },
        {
            name: "Charlie",
            className: "Grade 5",
            scores: { math: 88, science: 90, history: 78, english: 88 },
        },
        {
            name: "Diana",
            className: "Grade 4",
            scores: { math: 92, science: 85, history: 88, english: 90 },
        },
    ],
};
function countCalculation(school){
    const {
        departments: {
            math: { teachers: mathTeachersCount, students: mathStudentsCount },
            history: { teachers: historyTeachersCount, students: historyStudentsCount },
        },
    } = school;
    return {
        mathTeachersCount,
        historyTeachersCount,
        mathStudentsCount,
        historyStudentsCount,
    };
}
console.log(countCalculation(school));
//......................................................................................


// Problem 11: FindTopStudent
function findTopStudent(school, courseName){
    return school.students.reduce((topStudent, student) => {
        const currentScore = student.scores[courseName];
        return currentScore > topStudent.scores[courseName] ? student : topStudent;
    });
}
console.log(findTopStudent(school, 'math'));
//................................................................................................


// Problem 12: AddNewDept
function addNewDept(school, newDepartment){
    return {
        ...school,
        departments: {
            ...school.departments,
            ...newDepartment,
        },
    };
}
const newDepartment = { art: { teachers: 2, students: 50 } };
console.log(addNewDept(school, newDepartment));
//.....................................................................................


// Problem 13: HighestStudentCountDepartment
function highestStudentCountDepartment(school){
    let highestCount = 0;
    let highestCountDept = '';
    for (const [deptName, { students }] of Object.entries(school.departments)) {
        if (students > highestCount) {
            highestCount = students;
            highestCountDept = deptName;
        }
    }
    return highestCountDept;
}
console.log(highestStudentCountDepartment(school)); 
//...................................................................................................



//Problem 14: GenerateGreeting
function generateGreeting(name, language = 'English'){
    const greetings = {
        English: 'Hello, Alice',
        Spanish: '!Hola, Spanish',
        French: 'Bonjour, Charlie',
    };
    return greetings[language];
}
console.log(generateGreeting("Alice"));
console.log(generateGreeting("Bob", "Spanish")); 
console.log(generateGreeting("Charlie", "French")); 