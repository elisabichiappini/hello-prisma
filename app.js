const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

prisma.pizza.create({
    data: {
        name: 'Margherita',
        price: 14,
        available: true
    }
})
.then(newPizza => {
    console.log('Nuova pizza creata:', newPizza);
})
.catch(error => console.log(error))
.finally(() => prisma.$disconnect());
