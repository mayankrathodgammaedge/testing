export class DataGenerator {
    static getRandomName(): string {
      const names = ['John', 'Alice', 'Robert', 'Emma', 'David', 'Olivia'];
      const surnames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones'];
      return `${this.getRandomFromArray(names)} ${this.getRandomFromArray(surnames)}`;
    }
  
    static getRandomEmail(): string {
      const domains = ['example.com', 'testmail.com', 'mydomain.org'];
      const name = Math.random().toString(36).substring(2, 10);
      return `${name}@${this.getRandomFromArray(domains)}`;
    }
  
    static getRandomPhone(): string {
      return '9' + Math.floor(100000000 + Math.random() * 900000000).toString();
    }
  
    static getRandomAddress(): string {
      const streets = ['Main St', 'Maple Ave', 'Oak Lane', '2nd Street'];
      const city = ['New York', 'Los Angeles', 'Chicago', 'Houston'];
      return `${Math.floor(Math.random() * 999)} ${this.getRandomFromArray(streets)}, ${this.getRandomFromArray(city)}`;
    }
  
    private static getRandomFromArray(arr: string[]): string {
      return arr[Math.floor(Math.random() * arr.length)];
    }
  }
  