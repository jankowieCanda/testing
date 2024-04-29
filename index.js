
class Room {

    constructor({name, bookings, price, discount}) {
        this.name = name;
        this.bookings = [];
        this.price = price;
        this.discount = discount;
    };

    isOccupied(date) {

    };
    
    percentageOccupancy(startDate, endDate) {

    };

    static totalOccupancyPercentage(rooms, startDate, endDate) {

    };

    static availableRooms(rooms, startDate, endDate) {

    };
};

class Booking {

    constructor({name, email, checkin, checkout, discount, room}) {
        this.name = name;
        this.email = email;
        this.checkin = checkin;
        this.checkout = checkout;
        this.discount = discount;
        this.room = room;
    };
    
    getFee() {

    };

};

module.exports = { Room, Booking };
