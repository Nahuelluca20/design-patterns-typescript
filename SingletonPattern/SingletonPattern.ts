// Singleton Pattern

class Database {
  private static intance: Database;

  private constructor() {}

  public static getIntance(): Database {
    if (!Database.intance) {
      Database.intance = new Database();
    }

    return Database.intance;
  }

  public query(query: string): void {
    console.log(`Executing query ${query}`);
  }
}

const db = Database.getIntance()

db.query("Manage database")