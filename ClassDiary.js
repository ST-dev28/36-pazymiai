class ClassDiary {
    constructor(className) {
        this.className = className;
        this.studentsList = [];
        this.lessonsList = [];
        this.marksList = [];
    }
    intro() {
        console.log(`This is "${this.className}" class. `);
    }
    addStudent(studentName) {
        this.studentsList.push({
            name: studentName,
        });
        //console.log(this.studentsList);
    }
    printStudentsList() {
        console.log(`Class "${this.className}" has those students on the list:`);
        for (let i = 0; i < this.studentsList.length; i++) {
            const student = this.studentsList[i];
            console.log(`${i + 1}. ${student.name}`);
        }
        console.log('---------------------');
    }

    schedule() {

    }
}

module.exports = ClassDiary;