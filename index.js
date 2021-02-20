//Coffee Menu Order App
/*
This app takes user input for a name for the coffee order.
User then sees a menu of choices: add to order, view order, delete items in order.
Add to order gives user additional options to choose coffee drinks to add to their order.
Adding to the order pushes the the order array.
User can view their order and remove one item from their order at a time.
*/
class Customer {
    constructor(name) {
        this.name = name;
    }
}

class Menu {
    constructor() {
        this.order = [];
        this.customer = null;
        this.selectedOrder = null;
    }
    startOrder() {
        let selection = this.showMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createNewOrder();
                    break;
                case '2':
                    this.addToOrder();
                    break;
                case '3':
                    this.viewOrder();
                    break;
                case '4':
                    this.deleteFromOrder();
                    break;
            }
            selection = this.showMenuOptions();
        }
        alert ('Ok! Byeee!');
    }
    showMenuOptions() {
        return prompt (`
        Welcome to our Coffee Shop.
        What would you like to do?
        --------------------------
        0) Whoa. I thought this was a burger joint. bye!
        1) Create New Order
        2) Add to Order
        3) View My Order
        4) Delete Items From Order
        `);
    }
    createNewOrder() {
        let name = prompt('Can I get a name for this order?:');
        this.customer = new Customer(name);
    }
    showCoffeeMenu() {
        return prompt(`
        0) back
        1) drip coffee
        2) iced coffee 
        3) blended coffee
        `);
    }
    addToOrder() {
        let selection = this.showCoffeeMenu();
        while (selection != 0) {
            switch (selection) {
                case '1':
                this.order.push('drip coffee');
                break;
            case '2':
                this.order.push('iced coffee');
                break;
            case '3': 
                this.order.push('blended coffee');
                break;
            }
            selection = this.showCoffeeMenu();
        } 
    }
    viewOrder() {
        let orderString = '';
        for (let i = 0; i < this.order.length; i++) {
            orderString += `${i}) ${this.customer.name}: ${this.order[i]} \n`;
        }
        alert(orderString);
    }
    deleteFromOrder() {
        let itemToDelete = prompt(`
        Enter the index of the item you wish to delete:`);
        this.order.splice(itemToDelete, 1);
    }   
}
let menu = new Menu();
menu.startOrder();