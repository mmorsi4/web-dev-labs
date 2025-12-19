

async function getCourse(){
    const response = await fetch("http://localhost:3000/courses/", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    console.log(await response.json()) 
}

const data =
    {
    "title": "courseADDED",
    "description": "course desc ASDFDGDF",
    "instructorName": "new hamada helal",
    "price": 30045343,
    "category": "Design 2",
    "noenrolled": 2002
    }

async function addCourse(){
    const response = await fetch("http://localhost:3000/courses/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    console.log(response)   
}

async function deleteCourse(){
    const response = await fetch("http://localhost:3000/courses/692b0a77fa7d01d375bb1421", {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    console.log(response)   
}

async function updateCourse(){
    const response = await fetch("http://localhost:3000/courses/692b072f02ce8f974912a230", {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({"title": "UPDATED TITLE"}),
    });
    console.log(response)   
}

// getCourse()
//addCourse()
// deleteCourse()
updateCourse()