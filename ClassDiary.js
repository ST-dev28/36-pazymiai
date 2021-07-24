class ClassDiary {
    constructor(schoolName, lessonStart) {
        this.name = schoolName;
        this.lessonStart = lessonStart;
        this.lesson = 45;
        this.lessonBreakList = [];
    }
    intro() {
        console.log(`This is "${this.name}" school and it's schooling schedule. `);
    }
    addBreak(duration) {

    }
    lessonsCount() {

        //console.log(`There are ${} lessons per day.\n Each lesson is ${} minutes long.`);
    }
    schedule() {

    }
}

module.exports = ClassDiary;