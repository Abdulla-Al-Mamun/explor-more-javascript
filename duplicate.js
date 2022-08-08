
function removeDuplicate(names) {
    const unique = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];

        if (unique.includes(name) === false) {
            unique.push(name);
        }
    }
    return unique;
}


const names = ["mamun", "rony", "siam", "niloy", "ovi", "mahamud", "mamun", "rony", "siam", "niloy", "ovi", "mahamud"];

const uniquoName = removeDuplicate(names);
console.log(uniquoName);


