
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
        let range;
        if(!date || date === '') {
            throw new Error('Error!! Missing Date!!');
        } else if(Number.isInteger(date)) {
            throw new Error('Error!! Wrong date format!!');
        }
        for(let i = 0; i < this.bookings.length; i++) {
            range = rangeDates(this.bookings[i].checkin, this.bookings[i].checkout);
            if(range.includes(date)) {
                occupied = true;
            }
        }
        
        return occupied;
        
    };
    
    percentageOccupancy(startDate, endDate) {
        let occupied = 0; 
        let rangeToSearch = rangeDatesEndIncluded(startDate, endDate);
        let percentage; 
        let bookingRange = [];

        if((!startDate || startDate === '') || (!endDate || endDate === '')) {
            throw new Error('Error!! Missing Date!!');
        } else if(Number.isInteger(startDate) || Number.isInteger(endDate)) {
            throw new Error('Error!! Wrong date format!!');
        }

        this.bookings.map((book) => {
            bookingRange.push(rangeDates(book.checkin, book.checkout));
        });

        bookingRange.flat().map((date, i) => {
            if(rangeToSearch.includes(date)) {
                occupied++;
            }
        })

        return percentage = ((occupied / rangeToSearch.length) * 100);

    };

    static totalOccupancyPercentage(rooms, startDate, endDate) {
        let percentage;
        let count = 0;

        if(!rooms.length) {
            throw new Error('ERROR!! NO hay habitaciones registradas!!')
        } else if((!startDate || startDate === '') || (!endDate || endDate === '')) {
            throw new Error('Error!! Missing Date!!');
        } else if(Number.isInteger(startDate) || Number.isInteger(endDate)) {
            throw new Error('Error!! Wrong date format!!');
        }

        rooms.map((room) => {
            count += room.percentageOccupancy(startDate, endDate);
        })
        
        return percentage = count / rooms.length; 
    };

    static availableRooms(rooms, startDate, endDate) {
        if(!rooms.length) {
            throw new Error('ERROR!! NO hay habitaciones registradas!!')
        }

        let availables = rooms.filter((room) => room.percentageOccupancy(startDate, endDate) === 0);
        return availables;
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

function rangeDatesEndIncluded(start, end) {
    let startDate = new Date(start);
    let endDate = new Date(end)
    let range = [];
    for(let day = startDate; day <= endDate; day.setDate(day.getDate()+1)) {
        range.push(day.toISOString().slice(0, 10));
    }
    return range;
}

module.exports = { Room, Booking };


/* let rango1 = rangeDates('2024-04-15', '2024-05-01');
console.log('rango sin final incluido: ' + rango1)
let rango2 = rangeDatesEndIncluded('2024-04-15', '2024-05-01');
console.log('rango final incluido: ' + rango2); */

/* const room = new Room({name: 'una room', price: 200, discount: 25});
const booking = new Booking({name: 'unName', email: 'unmail@mail.com', checkin: '2024-05-01', checkout: '2024-05-06', discount: 10, room: room})
const booking2 = new Booking({name: 'otroName', email: 'otromail@mail.com', checkin: '2024-04-15', checkout: '2024-05-01', discount: 10, room: room})
room.setBookings(booking, booking2);
const room2 = new Room({name: 'otra room', price: 200, discount: 25});
const booking3 = new Booking({name: 'unName', email: 'unmail@mail.com', checkin: '2024-05-01', checkout: '2024-05-06', discount: 10, room: room2})
const booking4 = new Booking({name: 'otroName', email: 'otromail@mail.com', checkin: '2024-04-15', checkout: '2024-05-01', discount: 10, room: room2})
room2.setBookings(booking3, booking4);

const rooms = [room, room2];
console.log(Room.availableRooms(rooms, '2025-04-15', '2025-05-05')); */
