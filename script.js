var submissions = [{
    name: 'jane',
    score: 95,
    date: '2020-01-24',
    passed: true
},
{
    name: 'joe',
    score: 77,
    date: '2018-05-14',
    passed: true
},
{
    name: 'jack',
    score: 59,
    date: '2019-07-05',
    passed: false
},
{
    name: 'jill',
    score: 88,
    date: '2020-04-22',
    passed: true
}
]

function addSubmission(array, newName, newScore, newDate) {
    let obj = {};

    obj.name = newName;
    obj.score = newScore;
    obj.date = newDate;

    if (newScore >= 60) {
        obj.passed = true
    } else {
        obj.passed = false
    }

    array.push(obj)
}

function deleteSubmissionByIndex(array, index) {
    array.splice(index, 1)
}
function deleteSubmissionByName(array, name) {
    array.splice(array.findIndex(arr => arr === name), 1);
}

function editSubmission(array, index, score) {
    let arrToEdit = array[index];
    arrToEdit.score = score;
    if (score >= 60) {
        arrToEdit.passed = true
    } else {
        arrToEdit.passed = false
    }
}

function findSubmissionByName(array, name) {
    return array.find(arr => arr.name === name)
}
    

function findLowestScore(array) {
    let num = array[0].score;
    array.map(arr => num > arr.score ? num = arr.score : num)
    return num
}

function findAverageScore(array) {
    let average = 0;
    for (let arr of array) {
        average += arr.score;
    }
    return average / array.length
}
function filterPassing(array) {
    return array.filter(arr => arr.passed === true)
}

function filter90AndAbove(array) {
    return array.filter(arr => arr.score >= 90)
}
