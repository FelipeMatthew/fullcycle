// Anemic class - only getter and setters
class Course {
  private name;
  private category
  private description


  public connection() {
    // Conection to db
  }

  public createCategory() {
    // Create category
  }

  public createCourse() {
    // Create course
  }

  public sendToMQ() {
    // Envia msg para o rabbitmq
  }
}

// * CLASSE FAZENDO MAIS DE UMA COISA - COMUNICANDO COM SISTEMAS FAZENDO MAIS DO QUE O OBJETIVO PRINCIPAL DELA, DEIXANDO ASSIM UMA CLASSE RUIM DE MANUTENÇÃO

// Maneira certa
// Classe para criar funcionario
class Employee {
  constructor(public name: string, public salary: number) {}
}

// Classe para calcular salário
class SalaryCalculator {
  calculate(employee: Employee): number {
    return employee.salary
  }
}

// Classe para salvar no bd
class EmployeeRespository {
  save(employee: Employee) : void {
    console.log(`Saving ${employee.name} to the database`)
  }
}

// usando essas classes 
const employeeOne = new Employee("Felipe", 5000)
const calculateSalary = new SalaryCalculator()
const saveOnDB = new EmployeeRespository()

console.log(`Salary: ${calculateSalary.calculate}`)
saveOnDB.save(employeeOne)