class Student {
    constructor(id, SfirstName, SlastName, dateOfBirth, tuitionFees, courseId,  assignmentId, oralMark, totalMark ) {

        this.id = id;
        this.SfirstName = SfirstName;
        this.SlastName = SlastName;
        this.dateOfBirth = dateOfBirth;
        this.tuitionFees = tuitionFees;
        this.courseId = courseId;
        this.assignmentId = assignmentId;
        this.oralMark = oralMark;
        this.totalMark = totalMark;
    };
};

module.exports = Student;