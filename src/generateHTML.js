function generateHTML(employees) {
    let employeeCardHtml = '';
    employees.forEach((employee) => {
        if (employee.officeNumber) {
            employeeCardHtml = employeeCardHtml.concat(`<div class="card mx-auto" style="width: 18rem;">
            <div class="card-header">
                <h3>${employee.getName()}<h3>
            </div>
            <div class="card-header">
                ${employee.getRole()}
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${employee.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                <li class="list-group-item">Office: ${employee.getOfficeNumber()}</li>
            </ul>
        </div>`);
        } else if (employee.github) {
            employeeCardHtml = employeeCardHtml.concat(`<div class="card mx-auto" style="width: 18rem;">
            <div class="card-header">
                <h3>${employee.getName()}<h3>
            </div>
            <div class="card-header">
            ${employee.getRole()}
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${employee.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                <li class="list-group-item">Github: <a href='https://github.com/${employee.getGithub()}'>${employee.getGithub()}</a></li>
            </ul>
        </div>`);
        } else {
            employeeCardHtml = employeeCardHtml.concat(`<div class="card mx-auto" style="width: 18rem;">
            <div class="card-header">
            <h3>${employee.getName()}<h3>
            </div>
            <div class="card-header">
            ${employee.getRole()}
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${employee.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
            <li class="list-group-item">School: ${employee.getSchool()}</li>
            </ul>
        </div>`)
        }
    })

    return `<!DOCTYPE html>
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
            ${employeeCardHtml}    
        </main>
    
    </body>
    
    </html>`
}

module.exports = generateHTML;