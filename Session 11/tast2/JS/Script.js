var users = [];
function addUser() {
    var name = prompt("Enter user name");
    var id = Number(prompt("Enter user ID"));
    var balance = Number(prompt("Enter user balance"));
    var user = { name: name, id: id, balance: balance };
    users.push(user);
    console.log("User added successfully");
}

addUser();
addUser();
addUser();
console.table(users);

function editUserBalanceById() {
    var id = Number(prompt("Enter user ID"));
    var newBalance = Number(prompt("Enter new balance"));
    var user = users.find(function (user) {
        return user.id === id;
    });
    if (user) { user.balance = newBalance;
        console.log("Balance updated successfully");
    } else {
        console.log("User not found");
    }
}

function transferBalance() {
    var fromID = Number(prompt("Enter sender ID"));
    var toID = Number(prompt("Enter receiver ID"));
    var balance = Number(prompt("Enter amount to transfer"));
    var sender = users.find(function (user) {
        return user.id === fromID;
    });
    var receiver = users.find(function (user) {
        return user.id === toID;
    });
    if (!sender) {
        console.log("Sender not found");
    }
    else if (!receiver) {
        console.log("Receiver not found");
    }
    else if (sender.balance < balance) {
        console.log("Not enough balance");
    }
    else {
        sender.balance = sender.balance - balance;
        receiver.balance = receiver.balance + balance;
        console.log("Transfer successful");
    }
}

function deleteUserById() {
    var id = Number(prompt("Enter user ID"));
    var index = users.findIndex(function (user) {
        return user.id === id;
    });
    if (index !== -1) { users.splice(index, 1);
        console.log("User deleted successfully");
    } else {
        console.log("User not found");
    }
}

editUserBalanceById();
transferBalance();
deleteUserById();
console.table(users);