
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
        } else if(Number(date)) {
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
        } else if(Number(startDate) || Number(endDate)) {
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
        } else if(Number(startDate) || Number(endDate)) {
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


