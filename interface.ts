interface Player {
    name: string,
    age: number,
    club: string,
    salary: number,
    wife?: string,
    previousClub?: string[]
}
const messy: Player = {
    name: 'messy gassy',
    age: 34,
    club: 'Abahony',
    salary: 45654564,
    wife: 'hodol kutkut'
}
const hannan: Player = {
    name: 'A. hannan',
    age: 17,
    club: 'Kolabagan Choor',
    salary: 635355,
}

interface Employee {
    name: string,
    age: number,
    designation: string,
    salary: number
}

interface Developer extends Employee {
    language: string,
    codeEditor: string,
    typeSpeed: number
}

const mostan: Developer = {
    name: 'mostan',
    age: 54,
    designation: 'Web Developer',
    salary: 564554,
    language: 'TypeScript',
    codeEditor: 'vs code',
    typeSpeed: 65
}