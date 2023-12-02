//classes , constructor, methods

class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }
    getUserInfo(){
        console.log(`Username: ${this.username} EMAIL: ${this.email}`)
    }

    static getPass(){  //static keyword wont allow the method to access from outside this class
        console.log(`password: Hard`);
    }

}

User.getPass()

const user1 = new User("okhra", "okhra@gmail.com", "111")

user1.getUserInfo()

class Teacher extends User{
    constructor(username,email, id, course){
        super(username, email)
        this.id = id;
        this.course = course;
    }
    getTeacher(){
        console.log(`username:${this.username} id:${this.id} course: ${this.course}`)
    }
}

const teacher1 = new Teacher("ram", "ram@gmail.com", "777", "JavaScript")

teacher1.getUserInfo()
teacher1.getTeacher()


