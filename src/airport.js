function Airport(capacity = 20) {
    this.planes = [];
    this.capacity = capacity;

    this.land = function(plane) {
        if (this.isStormy() === true) { throw 'Too stormy to land'; }
        if (this.planes.length === this.capacity) { throw 'Airport is full'; }
        this.planes.push(plane);
    }

    this.takeOff = function(plane) {
        var index = this.planes.indexOf(plane);
        this.planes.splice(index, 1);
        if (this.isStormy() === true) { throw 'Too stormy to take off'; }
        return 'Plane has successfully taken off';
    }

    this.isStormy = function() {
        var chanceOfStorm = 0.2;
        return Math.random() <= chanceOfStorm;
    }
};
