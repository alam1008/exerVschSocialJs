var queenOfEngland = {
    name: "Elizabeth",
    age: 94,
    pets: [
        {
            petName: "Dash",
            gender: "male",
            age: 23,
            breed: "Thoroughbred"
        },
        {
            petName: "Susan",
            gender: "female",
            age: 14,
            breed: "Pembroke Welsh Corgi"
        },
        {
            petName: "Monty",
            gender: "male",
            age: 13,
            breed: "Pembroke Welsh Corgi"
        }
    ],
    royalFamily: [
        {
            name: "Philip",
            age: 99,
            title: "Duke of Edinburgh",
            favoriteFood: [
                {
                    foodName: "Salmon Coulibiac",
                    calories: 900
                },
                {
                    foodName: "Mushroom a la Creme",
                    calories: 220
                }
            ],
            royalName: function(){
                return this.name + "," + this.title
            }
        },
        {   
            name: "Charles",
            age: 72,
            title: "Prince of Wales",
            favoriteFood: [
                {
                    foodName: "Wild Mushroom Risotto",
                    calories: 367
                }
            ],
            royalName: function(){
                return this.name + "," + this.title
            }
        },
        {
            name: "William",
            age: 38,
            title: "Duke of Cambridge",
            favoriteFood: [
                {
                    foodName: "Chocolate Biscuit Cake",
                    calories: 3776
                }
            ],
            royalName: function(){
                return this.name + "," + this.title
            }
        }
    ]
}
