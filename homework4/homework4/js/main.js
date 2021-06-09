function creatNewUser() {
    let NewUser = {};
    NewUser.firstName = prompt("Enter firstName", "");
    NewUser.lastName = prompt("Enter lastname", "");
    function getLogin() {
        return NewUser.firstName.substr(0, 1).toLowerCase() + NewUser.lastName.toLowerCase();
    };
    console.log(getLogin());
}
creatNewUser();