var employeePromise = d3.csv("csv/employee.csv")

var setBanner = function(message)
{
    d3.select("#banner")
    .text(message);
}





var  drawTable = function(employees)
{
    var rows = d3.select("#employeeTable, tbody")
    .selectAll("tr")
    .data(employees)
    .enter()
    .append("tr")
    
    rows.append("td")
    .text(function(employee)
          {
        return employee.firstName
    })
    
    rows.append("td")
    .text(function(employee)
          {
        return employee.lastName
    })
    
     rows.append("td")
    .text(function(employee)
          {
        return employee.title
    })
    
     rows.append("td")
    .text(function(employee)
          {
        return employee.email
    })
}
var successFCN = function(employees)
{
    console.log("employees",employees);
    setBanner("Here is Employee Data");
   drawTable(employees);
    
}

var failFCN = function(error)
{
    console.log("error",error);
    setBanner("Data are missing");
    
}



employeePromise.then(successFCN,failFCN)