const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];

const foodSchedule = [
    { name: "Salad", isVegan: true },
    { name: "Salmon", isVegan: false },
    { name: "Tofu", isVegan: true },
    { name: "Burger", isVegan: false },
    { name: "Rice", isVegan: true },
    { name: "Pasta", isVegan: true }
];

const veganFood = [];

for (let i = 0; i < foodSchedule.length; i++) {
    if (foodSchedule[i].isVegan) {
        veganFood.push(foodSchedule[i].name)
    } else {
        veganFood.push(fruits[Math.floor(Math.random() * (fruits.length - 1))])
    }
};

console.log(veganFood);