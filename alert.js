'use strict'

const students = [
    { firstName: 'Роман', lastName: 'Меркулов', age: 19, grades: [3, 4, 5, 5, 4], course: 2, gender: 'male' },
    { firstName: 'Владимир', lastName: 'Казанцев', age: 21, grades: [4, 4, 5, 5, 5], course: 4, gender: 'male' },
    { firstName: 'Варвара', lastName: 'Крылова', age: 20, grades: [2, 3, 5, 4, 4], course: 3, gender: 'female' },
    { firstName: 'Александр', lastName: 'Тихонов', age: 23, grades: [1, 2, 3, 2, 2], course: 5, gender: 'male' },
    { firstName: 'Анна', lastName: 'Серебрякова', age: 17, grades: [3, 4, 5, 3, 4], course: 1, gender: 'female' },
    { firstName: 'Никита', lastName: 'Зайцев', age: 20, grades: [1, 1, 2, 2, 4], course: 3, gender: 'male' },
    { firstName: 'Тимур', lastName: 'Трофимов', age: 24, grades: [1, 2, 4, 3, 2], course: 5, gender: 'male' },
    { firstName: 'София', lastName: 'Громова', age: 18, grades: [5, 5, 5, 5, 4], course: 1, gender: 'female' },
    { firstName: 'Марк', lastName: 'Греков', age: 17, grades: [4, 4, 5, 5, 4], course: 1, gender: 'male' },
    { firstName: 'Артемий', lastName: 'Кулагин', age: 22, grades: [3, 2, 2, 1, 2], course: 4, gender: 'male' }
];

function isReadyToArmy({grades, gender}) {
    const averageGrade = grades.reduce((a, b) => a + b)/grades.length;
    return (averageGrade < 3) && (gender === 'male');
}

const result = students.map(student => {
    if (isReadyToArmy(student)) {
        const studentReadyToArmy = {...student};
        studentReadyToArmy.isReadyToArmy = true;
        delete studentReadyToArmy.grades;
        delete studentReadyToArmy.course;
        return studentReadyToArmy;
    }
    return student;
})

const finalStudents = result.filter(student => student.isReadyToArmy);
console.log (finalStudents);

// const getStudentsGrades = students.map(student => student.grades); //достаю оценки

// function getSumGrades() {
//     for (let i = 0; i<students.length; i++) {
//     console.log(getStudentsGrades[i].reduce((sum, current) => sum + current, 0)); //считаю сумму оценок каждого студента
//     }
// };

// function getAverageGrades() {
// students.forEach( student => {
//     console.log(((student.grades.reduce((sum, current) => sum + current)))/5);
// })
// };

// getAverageGrades();

// const resultGrades = students.filter(student => (((student.grades.reduce((sum, current) => sum + current)))/5) < 3 && student.gender === 'male');
// console.log (resultGrades);

// function isReadyToArmy(student) {
//     const averageGrade = student.grades.reduce((a, b) => a + b)/student.grades.length;
//     return (averageGrade < 3) && (student.gender === 'male');
// }


// const result = students.map(student => {
//     if (isReadyToArmy(student)) {
//         student.isReadyToArmy = true;
//         delete student.grades;
//         delete student.course;
//     }
//     return student;
// })

// const arrProfiles = [
//     {name: 'Darth Vader', age: 41, isEmpire: true, interests: ['fight', 'power']},
//     {name: 'Princess Leia', age: 60, isEmpire: false, interests: ['politics', 'peace']},
//     {name: 'R2-D2', age: 10, isEmpire: false, interests: ['electronics', 'friends']}
// ];

// console.log(arrProfiles);


// const data = [
//     { sex: 'male', age: 28 },
//     { sex: 'female', age: 34 },
//     { sex: 'male', age: 27 },
//     { sex: 'female', age: 32 },
//     { sex: 'male', age: 27 },
//     { sex: 'male', age: 43 }
// ];

// const getMaleUsers = data.filter(user => user.sex === 'male'); // сортируем тех, кто male
// const getMaleAges = getMaleUsers.map(male => male.age); // достаем возраст
// const sumAges = getMaleAges.reduce((sum, current) => sum + current, 0); // сумма всех возрастов

// const averageAge = Math.round(sumAges/getMaleAges.length);

// alert (averageAge); // 31


