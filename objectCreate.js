let captain = {
    name : 'Pentam Focasa',
    age : 20,
    speed : '29wpm'
}

let player = Object.create(captain);

console.log(player);
console.log(player.age);
console.log(player.speed);