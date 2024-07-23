const users = [{ id: 1, name: 'Abel' }, { id: 2, name: 'Julia' }, { id: 3, name: 'Pedro' }, { id: 4, name: 'Amanda' }];

const usersName = users.map((user) => {
    if (user.name.charAt(0) === "A") return "Anacleto";
    return user.name;
});

console.log(usersName);