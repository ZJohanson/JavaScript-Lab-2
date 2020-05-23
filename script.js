let submissions = [{
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
    // Your solution definitely works. Here's a way
    // of creating the object and its properties
    // that looks a little more tidy:
    let obj = {
        name: newName,
        score: newScore,
        date: newDate
    };

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
    // The `submissions` variable is an array of objects.
    // Inside of `findIndex`, we're looping through those objects
    // one at a time. So the name "obj" is arbitrary, but it
    // might help to show what's actually going on. Make sure
    // to compare against the value of the name property, instead
    // of the whole object:
    array.splice(array.findIndex(obj => obj.name === name), 1);
}

function editSubmission(array, index, score) {
    let objToEdit = array[index];
    objToEdit.score = score;
    if (score >= 60) {
        objToEdit.passed = true
    } else {
        objToEdit.passed = false
    }
}
// editSubmission(submissions, 3, 12);
// console.log(submissions);

function findSubmissionByName(array, name) {
    return array.find(obj => obj.name === name)
}
    

function findLowestScore(array) {
    let num = array[0].score;
    array.map(obj => num > obj.score ? num = obj.score : num)
    return num
}

function findAverageScore(array) {
    let average = 0;
    for (let obj of array) {
        average += obj.score;
    }
    return average / array.length
}
// console.log(findAverageScore(submissions));
function filterPassing(array) {
    return array.filter(obj => obj.passed === true)
}
// console.log(filterPassing(submissions));

function filter90AndAbove(array) {
    return array.filter(obj => obj.score >= 90)
}
// console.log(filter90AndAbove(submissions));
