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