// 5

function obtenerUsuario(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if ( id === 1) {
                resolve({ id: 1, nombre: 'John Dore' });
            }
        }, 2000); 
    });
}

const usuario =  obtenerUsuario(1)
    .then(result => {
        console.log(result);
    })
