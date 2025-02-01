// 1

let user = {
    name: 'Flavia',
    surName: 'Garbetta',
    topicsBootcamp: [
        { name : "Node.js", date : new Date("2025-03-01") },
        { name : "JavaScript", date : new Date("2025-03-01") },
        { name : "Modelado de datos y SQL", date : new Date("2025-03-01") },
        { name : "React", date : new Date("2025-03-01") },
        { name : "Web101", date : new Date("2025-03-01") },
        { name : "P101", date : new Date("2025-03-01") },
        { name : "IS101", date : new Date("2025-03-01") },
        { name : "HTML, CSS 3", date : new Date("2025-03-01") },
        { name : "Desarrollo Frontend", date : new Date("2025-03-01") },
        { name : "Desarrollo Backend", date : new Date("2025-03-01") },
    ],
    activeJobSearch: true,
};

const showReactDate = (user) => {
    for (const item of user.topicsBootcamp) {
        if (item.name === 'React') {
            let dataReact = item.date;
            return dataReact.toLocaleDateString()
        }
    };
};

console.log(showReactDate(user)); 
