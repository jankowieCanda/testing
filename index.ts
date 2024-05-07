interface RoomProperties {
    name: string,
    bookings: Array<Booking>,
    price: number,
    discount: number
}

class Room {
    name: string;
    bookings: Array<Booking>;
    price: number;
    discount: number;

    constructor({name, bookings, price, discount}: RoomProperties) {
        this.name = name;
        this.bookings = [];
        this.price = price;
        this.discount = discount;
    };

    setBookings(...args: Array<Booking>): void {
        args.forEach(arg => this.bookings.push(arg))
    }

    isOccupied(date: string): boolean {
        let occupied: boolean = false;
        let range: Array<string>;
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
    
    percentageOccupancy(startDate: string, endDate: string): number {
        let occupied: number = 0; 
        let rangeToSearch: Array<string> = rangeDatesEndIncluded(startDate, endDate);
        let percentage: number; 
        let bookingRange: Array<Array<string>> = [];

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

    static totalOccupancyPercentage(rooms: Array<Room>, startDate: string, endDate: string): number {
        let count: number = 0;

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
        
        return count / rooms.length; 
    };

    static availableRooms(rooms: Array<Room>, startDate: string, endDate: string): Array<Room> {
        if(!rooms.length) {
            throw new Error('ERROR!! NO hay habitaciones registradas!!')
        }

        return rooms.filter((room) => room.percentageOccupancy(startDate, endDate) === 0);
    };
};

interface BookingProperties {
    name: string,
    email: string,
    checkin: string,
    checkout: string,
    discount: number,
    room: Room
}

class Booking {
    name: string;
    email: string;
    checkin: string;
    checkout: string;
    discount: number;
    room: Room;

    constructor({name, email, checkin, checkout, discount, room}: BookingProperties) {
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

function rangeDates(start: string, end: string): Array<string> {
    let startDate: Date = new Date(start);
    let endDate: Date = new Date(end)
    let range: Array<string> = [];
    for(let day: Date = startDate; day < endDate; day.setDate(day.getDate()+1)) {
        range.push(day.toISOString().slice(0, 10));
    }
    return range;
}

function rangeDatesEndIncluded(start: string, end: string): Array<string> {
    let startDate = new Date(start);
    let endDate = new Date(end)
    let range: Array<string> = [];
    for(let day = startDate; day <= endDate; day.setDate(day.getDate()+1)) {
        range.push(day.toISOString().slice(0, 10));
    }
    return range;
}

export { Room, Booking };


