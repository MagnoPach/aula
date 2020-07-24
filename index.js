// Criar um programa que calcula a média 
// das grades entre os students e envia 
// mensagem do calculo da média.
// Se a média for maior que 5, parabenizar a class

/*const student01 = {
    name: "Magno",
    grade: 9.8
}

const student02 = {
    name: "Lucas",
    grade: 10
}

const student03 = {
    name: "Vitor",
    grade: 2
}



const average = (student01.grade + student02.grade + student03.grade) / 3


if (average > 5) {
    console.log(`A average foi de ${average}. Parabéns`)
}  else {
    console.log(`A average é menor que 5`)
}*/


/*==================================================================================
VETORES OU ARRAYS*/
/*
const students = [
    {
        name: "Magno",
        grade: 9.8
    },
    {
        name: "Lucas",
        grade: 10
    },
    {
        name: "Vitor",
        grade: 2
    }
]


const average = (students[0].grade + students[1].grade + students[2].grade) / 3

const namesDestudents = ["Magno", "Lucas", "Vitor"]

console.log(students[0])

if (average > 5) {
    console.log(`A average foi de ${average}. Parabéns`)
}  else {
    console.log(`A average é menor que 5`)
}
*/
/*
const classA = [
    {
        name: "Magno",
        grade: 1.8
    },
    {
        name: "Lucas",
        grade: 10
    },
    {
        name: "Vitor",
        grade: 2
    }
]

const classB = [
    {
        name: "Gabriel",
        grade: 10
    },
    {
        name: "Douglas",
        grade: 10
    },
    {
        name: "Daniel",
        grade: 5
    }
]

function calculateAverage(students) {
    return (students[0].grade + students[1].grade + students[2].grade) / 3

}

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)


function sendMessage(average, class) {
        if (average > 5) {
        console.log(`A average da class ${class} foi de ${average}. Parabéns`)
    }  else {
        console.log(`A average da class ${class} é menor que 5`)
    }
}

sendMessage(average1, 'classA')
sendMessage(average2, 'classB')
*/

 // ESTRUTURA DE REPETIÇÃO

/*
const classA = [
    {
        name: "Magno",
        grade: 1.8
    },
    {
        name: "Lucas",
        grade: 10
    },
    {
        name: "Vitor",
        grade: 2
    }
]

const classB = [
    {
        name: "Gabriel",
        grade: 10
    },
    {
        name: "Douglas",
        grade: 10
    },
    {
        name: "Daniel",
        grade: 5
    },
    {
        name: "Leo",
        grade: 3
    }
]

function calculateAverage(students) {
    let sum = 0
    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade
    }

    const average = sum / students.length
    return average
}

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)


function sendMessage(average, class) {
        if (average > 5) {
        console.log(`A average da class ${class} foi de ${average}. Parabéns`)
    }  else {
        console.log(`A average da class ${class} é menor que 5`)
    }
}

sendMessage(average1, 'classA')
sendMessage(average2, 'classB')
*/

// marcar student como flunked se a grade for menor que 5
// e, também, enviar uma mensagem


const classA = [
    {
        name: "Magno",
        grade: 1.8
    },
    {
        name: "Lucas",
        grade: 10
    },
    {
        name: "Vitor",
        grade: 2
    },
]

const classB = [
    {
        name: "Gabriel",
        grade: 10
    },
    {
        name: "Douglas",
        grade: 10
    },
    {
        name: "Daniel",
        grade: 5
    },
    {
        name: "Leo",
        grade: 3
    },
]

function calculateAverage(students) {
    let sum = 0

    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade
    }

    const average = sum / students.length

    return average
}

function sendMessage(average, turma) {
    if (average > 5) {
        console.log(`${turma} average: ${average}. Congrats`)
    } else {
        console.log(`${turma} average: ${average}.  Is not good`)
    }
}

function markAsFlunked(student) {
    student.flunked = false

    if (student.grade < 5) {
        student.flunked = true
    }
}

function sendflunkedMessage(student) {
    if (student.flunked) {
        console.log(`${student.name} flunked!`)
    }
}

function studentFlunked(students) {
    for (let student of students) {
        markAsFlunked(student)
        sendflunkedMessage(student)
    }
}

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

sendMessage(average1, 'class A')
sendMessage(average2, 'class B')

studentFlunked(classA)
studentFlunked(classB)













