const map = new Map();

map.set('Matheus', 'Administrador');
map.set('Maria', 'Usuário');
map.set('Antonia', 'Usuário');

function getAdmin(map) {
    let listaAdmin = [];
    for ([key, value] of map) {
        if(value === 'Administrador') {
            listaAdmin.push(key);
        }
    }

    return listaAdmin;
}

console.log(getAdmin(map));