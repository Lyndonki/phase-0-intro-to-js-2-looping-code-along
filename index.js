
function writeCards(name) {
    const cards = []
    let i = 0;
    while (i < name.length) {
        cards.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`);
        i++;
    }
    return cards;
}
function countDown(number) {
    let i = 0
    while (number >= 0) {
        console.log(number);
        number--;
    }
}
countDown(10);