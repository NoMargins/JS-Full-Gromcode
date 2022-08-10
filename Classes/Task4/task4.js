// task: create class Order to display & store order's data

// 1. create class Oder (id, price, dateCreated, isConfirmed, city, type)
// 2. create field id = toString(with use of Math.random())
// 3. create field isComfirmed = false
// 4. create Order.checkPrice() and if sum of order > 1000 return true, if else - false
// 5. create confirmOrder() => if isConfirmed === false => true
// 														dateCreated = new Date()
// 6. create isValidTypeType() => if type = Buy or Sell return true.
// 														if else return false

'use strict';

/**
 * @field {string} id
 * @field {number} price
 * @field {date} dateCreated
 * @field {boolean} isConfirmed
 * @field {date} dateConfirmed
 * @field {string} city
 * @field {string} type
 */
// task: create class Order to display & store order's data

// 1. create class Oder (id, price, dateCreated, isConfirmed, city, type)
// 2. create field id = toString(with use of Math.random())
// 3. create field isComfirmed = false
// 4. create Order.checkPrice() and if sum of order > 1000 return true, if else - false
// 5. create confirmOrder() => if isConfirmed === false => true
// 														dateCreated = new Date()
// 6. create isValidTypeType() => if type = Buy or Sell return true.
// 														if else return false

'use strict';

/**
 * @field {string} id
 * @field {number} price
 * @field {date} dateCreated
 * @field {boolean} isConfirmed
 * @field {date} dateConfirmed
 * @field {string} city
 * @field {string} type
 */
export class Order {
	constructor(price, city, type) {
		this.price = price;
		this.city = city;
		this.type = type;
		this.id = (Math.random() * 1e10).toFixed(0);
		this.isConfirmed = false;
		this.dateCreated = new Date();
		this.dateConfirmed = null;
	}
	checkPrice() {
		if (this.price > 1000) {
			return true;
		} else {
			return false;
		}
	}
	confirmOrder() {
		if (this.isConfirmed === false) {
			this.isConfirmed = true;
			this.dateConfirmed = new Date(Date.now());
		}
	}
	isValidType() {
		if (this.type === 'Buy' || this.type === 'Sell') {
			return true;
		} else {
			return false;
		}
	}
}

const order1 = new Order(4345, 'NY', 'iPod', 'Sell', 954);
console.log(order1);
console.log(order1.checkPrice());
console.log(order1.confirmOrder());
console.log(order1.isValidType());
