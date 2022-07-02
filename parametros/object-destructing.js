const user = {
    id : 42,
    displayName : 'jdoe',
    fullName : {
        firstName : 'Matheus',
        lastName : 'Gabriel'
    }
};

function userId({id}) {
    return id;
}

function getFullName({fullName : {firstName : first, lastName : last}}) {
    return `${first} ${last}`;
}

console.log(userId(user));
console.log(getFullName(user));