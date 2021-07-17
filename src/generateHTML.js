function generateHTML(employees) {
    let employeeCardArray = [];
    employees.forEach((employee)=>{
        if (typeof(employee)==='Manager'){
            console.log('ok');
        }
    })
}

const html = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link rel="stylesheet" href="./reset.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">

</head>

<body>
    <header class="container-fluid">
        <h1>My Team</h1>
    </header>
    <main class="container-fluid row">
        <div class="card mx-auto" style="width: 18rem;">
            <div class="card-header">
                Jared
            </div>
            <div class="card-header">
                Manager
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:1</li>
                <li class="list-group-item">Email:jareg@gmail.com</li>
                <li class="list-group-item">Office: 3</li>
            </ul>
        </div>

    
    </main>

</body>

</html>`

module.exports = generateHTML;