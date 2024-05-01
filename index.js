
class Room {

    constructor({name, bookings, price, discount}) {
        this.name = name;
        this.bookings = [];
        this.price = price;
        this.discount = discount;
    };

    setBookings(...args) {
        args.forEach(arg => this.bookings.push(arg))
    }

    isOccupied(date) {
        let occupied = false;
        if(!date || date === '') {
            throw new Error('Error!! Missing Date!!');
        } else if(Number(date)) {
            throw new Error('Error!! Wrong date format!!');
        }
        for(let i = 0; i < this.bookings.length; i++) {
            let range = rangeDates(this.bookings[i].checkin, this.bookings[i].checkout)
            if(range.includes(date)) {
                occupied = true;
            }
        }
        return occupied;
        
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

function rangeDates(start, end) {
    let startDate = new Date(start);
    let endDate = new Date(end)
    let range = [];
    for(let day = startDate; day < endDate; day.setDate(day.getDate()+1)) {
        range.push(day.toISOString().slice(0, 10));
    }
    return range;
}

module.exports = { Room, Booking };


/* let rango = rangeDates('2024-04-15', '2024-05-01');
console.log(rango); */

/* const room = new Room({name: 'una room', price: 200, discount: 25});
const booking = new Booking({name: 'unName', email: 'unmail@mail.com', checkin: '2024-05-01', checkout: '2024-05-06', discount: 10})
const booking2 = new Booking({name: 'otroName', email: 'otromail@mail.com', checkin: '2024-04-15', checkout: '2024-05-01', discount: 10})
room.setBookings(booking, booking2);
console.log(room); */