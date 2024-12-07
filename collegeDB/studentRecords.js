class StudentRecords {
  #students;
  #idCounter;

  constructor() {
    this.#students = new Map();
    this.#idCounter = 101;
  }

  addStudent({ name, course, year, marks }) {
    const studentId = this.#idCounter++;
    const GPA = this.#calGPA(marks);

    this.#students.set(studentId, {
      name,
      course,
      year,
      marks,
      GPA,
    });
    console.log(`Student added successfully! ID: ${studentId}`);
  }

  updateMarks = (studentId, subjectMarks) => {
    let student = this.#students.get(studentId);
    if (!student) {
      console.log("No student found");
      return;
    }

    student.marks = { ...subjectMarks };

    student.GPA = this.#calGPA(subjectMarks);

    console.log(`Marks updated successfully. Current GPA: ${student.GPA}`);
  };

  #calGPA(subjectMarks) {
    const total = Object.values(subjectMarks).reduce(
      (total, mark) => total + mark,
      0
    );
    const GPA = (total / (Object.keys(subjectMarks).length * 100)) * 10;
    return GPA.toFixed(2);
  }

  displayStudentDetails(studentId) {
    let student = this.#students.get(studentId);
    if (!student) {
      console.log("No student found");
      return;
    }
    console.log("\n-----------------------");
    console.log("Student details:");
    console.log(` Student Name: ${student.name}`);
    console.log(` Course: ${student.course}`);
    console.log(` Year: ${student.year}`);
    console.log(` Subject Marks:`);
    for (const [subject, mark] of Object.entries(student.marks)) {
      console.log(`   ${subject}: ${mark}`);
    }
    console.log(` GPA: ${student.GPA}`);

    console.log("\n-----------------------\n");
  }
}

const st = new StudentRecords();

let student1 = {
  name: "ssr",
  course: "BE CSE",
  year: 4,
  marks: { Maths: 78, Science: 88, English: 79, Physics: 92 },
};

let student2 = {
  name: "ssrN",
  course: "BE CSE",
  year: 4,
  marks: { Maths: 78, Science: 88, English: 79, Physics: 92 },
};

st.addStudent(student1);
st.addStudent(student2);
// const updateMarks = st.updateMarks.bind(st);
st.updateMarks(101, { Maths: 88, Science: 98, English: 77, Physics: 82 });
st.displayStudentDetails(101);
