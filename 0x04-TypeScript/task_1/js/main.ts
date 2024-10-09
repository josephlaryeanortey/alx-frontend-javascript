/* eslint-disable @typescript-eslint/no-explicit-any */

// 1. Define the Teacher interface
interface Teacher {
  firstName: string;
  lastName: string;
  readonly fullTimeEmployee: boolean; // Read-only
  yearsOfExperience?: number; // Optional
  readonly location: string; // Read-only
  [key: string]: any; // Allow additional properties
}

// 2. Define the Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number; // Required attribute
}

// 3. Define the PrintTeacherFunction interface
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

// 4. Define the constructor interface for StudentClass
interface StudentClassConstructor {
  firstName: string;
  lastName: string;
}

// 5. Define the StudentClassInterface
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// 6. Create the StudentClass implementing StudentClassInterface
class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor({ firstName, lastName }: StudentClassConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage for the Teacher interface
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false, // Additional property
};

// Example usage for the Directors interface
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

// Implementation of the printTeacher function
const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  const initial = firstName.charAt(0).toUpperCase();
  return `${initial}. ${lastName}`;
};

// Example usage of printTeacher
const fullName = printTeacher("John", "Doe");

// Create a StudentClass instance
const student = new StudentClass({ firstName: 'John', lastName: 'Doe' });

// Output to the console
console.log(teacher3); // Should print teacher3 object
console.log(director1); // Should print director1 object
console.log(fullName); // Should print "J. Doe"
console.log(student.workOnHomework()); // Should print "Currently working"
console.log(student.displayName()); // Should print "John"
