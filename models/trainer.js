class Trainer {
    constructor(id, firstName, lastName, subject, hoursWeek, hourlyWage, contractLength, phone, email, address) {

        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.subject = subject;
        this.hoursWeek = hoursWeek;
        this.hourlyWage = hourlyWage;
        this.contractLength = contractLength;
        this.phone = phone;
        this.email = email;
        this.address = address;
    };
};

module.exports = Trainer;

