export class Vehicle {
	constructor(name, numberOfWheels) {
		this.name = name;
		this.numberOfWheels = numberOfWheels;
	}

	move() {
		console.log(this.name + ' is moving');
	}
	stop() {
		console.log(this.name + ' stopped');
	}
}

export class Ship extends Vehicle {
	constructor(name, numberOfWheels, maxSpeed) {
		super(name, numberOfWheels);
		this.maxSpeed = maxSpeed;
	}

	move() {
		console.log(this.name + ' lifting anchor up');
		super.move();
	}

	stop() {
		super.stop();
		console.log(this.name + ' lifting anchor down');
	}
}

const newShip = new Ship('Argo', 4, 168);
console.log(newShip.move());
console.log(newShip.stop());
console.log(newShip.numberOfWheels);
console.log(newShip.maxSpeed);
