const { Room, Booking } = require('./index');

describe('Room - Checking isOccupied method', () => {

  test('Date parameter missing', () => {

    const room = new Room({name: 'room1', price: 200, discount: 25});

    const booking = new Booking({name: 'name1', email: 'mail@mail.com', checkin: '2024-05-01', checkout: '2024-05-06', discount: 10, room: 'room1'});    
    const booking2 = new Booking({name: 'name2', email: 'mail@mail.com', checkin: '2024-03-04', checkout: '2024-03-10', discount: 10, room: 'room1'});
    const booking3 = new Booking({name: 'name3', email: 'mail@mail.com', checkin: '2024-03-10', checkout: '2024-03-11', discount: 10, room: 'room1'});
    const booking4 = new Booking({name: 'name4', email: 'mail@mail.com', checkin: '2024-05-07', checkout: '2024-06-07', discount: 10, room: 'room1'});
    const booking5 = new Booking({name: 'name1', email: 'mail@mail.com', checkin: '2024-04-30', checkout: '2024-05-06', discount: 10, room: 'room1'});

    room.setBookings(booking, booking2, booking3, booking4, booking5);
    
    expect(() => {room.isOccupied()}).toThrow(new Error('Error!! Missing Date!!'));
  });
  
  test('Wrong date format', () => {

    const room = new Room({name: 'room1', price: 200, discount: 25});

    const booking = new Booking({name: 'name1', email: 'mail@mail.com', checkin: '2024-05-01', checkout: '2024-05-06', discount: 10, room: 'room1'});    
    const booking2 = new Booking({name: 'name2', email: 'mail@mail.com', checkin: '2024-03-04', checkout: '2024-03-10', discount: 10, room: 'room1'});
    const booking3 = new Booking({name: 'name3', email: 'mail@mail.com', checkin: '2024-03-10', checkout: '2024-03-11', discount: 10, room: 'room1'});
    const booking4 = new Booking({name: 'name4', email: 'mail@mail.com', checkin: '2024-05-07', checkout: '2024-06-07', discount: 10, room: 'room1'});
    const booking5 = new Booking({name: 'name1', email: 'mail@mail.com', checkin: '2024-04-30', checkout: '2024-05-06', discount: 10, room: 'room1'});

    room.setBookings(booking, booking2, booking3, booking4, booking5);
    
    expect(() => {room.isOccupied(20240501)}).toThrow(new Error('Error!! Wrong date format!!'));
  });

  test('room is occupied, first booking first day', () => {

      const room = new Room({name: 'room1', price: 200, discount: 25});

      const booking = new Booking({name: 'name1', email: 'mail@mail.com', checkin: '2024-05-01', checkout: '2024-05-06', discount: 10, room: 'room1'});    
      const booking2 = new Booking({name: 'name2', email: 'mail@mail.com', checkin: '2024-03-04', checkout: '2024-03-10', discount: 10, room: 'room1'});
      const booking3 = new Booking({name: 'name3', email: 'mail@mail.com', checkin: '2024-03-10', checkout: '2024-03-11', discount: 10, room: 'room1'});
      const booking4 = new Booking({name: 'name4', email: 'mail@mail.com', checkin: '2024-05-07', checkout: '2024-06-07', discount: 10, room: 'room1'});
      const booking5 = new Booking({name: 'name1', email: 'mail@mail.com', checkin: '2024-04-30', checkout: '2024-05-06', discount: 10, room: 'room1'});

      room.setBookings(booking, booking2, booking3, booking4, booking5);
      
      expect(room.isOccupied('2024-05-01')).toBeTruthy();
  });

  test('room is occupied, last booking first day', () => {

    const room = new Room({name: 'room1', price: 200, discount: 25});

    const booking = new Booking({name: 'name1', email: 'mail@mail.com', checkin: '2024-05-01', checkout: '2024-05-06', discount: 10, room: 'room1'});    
    const booking2 = new Booking({name: 'name2', email: 'mail@mail.com', checkin: '2024-03-04', checkout: '2024-03-10', discount: 10, room: 'room1'});
    const booking3 = new Booking({name: 'name3', email: 'mail@mail.com', checkin: '2024-03-10', checkout: '2024-03-11', discount: 10, room: 'room1'});
    const booking4 = new Booking({name: 'name4', email: 'mail@mail.com', checkin: '2024-05-07', checkout: '2024-06-07', discount: 10, room: 'room1'});
    const booking5 = new Booking({name: 'name1', email: 'mail@mail.com', checkin: '2024-04-30', checkout: '2024-05-06', discount: 10, room: 'room1'});

    room.setBookings(booking, booking2, booking3, booking4, booking5);
    
    expect(room.isOccupied('2024-04-30')).toBeTruthy();
  });

  test('room is occupied, first and last booking before checkout', () => {

    const room = new Room({name: 'room1', price: 200, discount: 25});

    const booking = new Booking({name: 'name1', email: 'mail@mail.com', checkin: '2024-05-01', checkout: '2024-05-06', discount: 10, room: 'room1'});    
    const booking2 = new Booking({name: 'name2', email: 'mail@mail.com', checkin: '2024-03-04', checkout: '2024-03-10', discount: 10, room: 'room1'});
    const booking3 = new Booking({name: 'name3', email: 'mail@mail.com', checkin: '2024-03-10', checkout: '2024-03-11', discount: 10, room: 'room1'});
    const booking4 = new Booking({name: 'name4', email: 'mail@mail.com', checkin: '2024-05-07', checkout: '2024-06-07', discount: 10, room: 'room1'});
    const booking5 = new Booking({name: 'name1', email: 'mail@mail.com', checkin: '2024-04-30', checkout: '2024-05-06', discount: 10, room: 'room1'});

    room.setBookings(booking, booking2, booking3, booking4, booking5);
    
    expect(room.isOccupied('2024-05-05')).toBeTruthy();
  });

  test('room is occupied, middle booking first day', () => {

    const room = new Room({name: 'room1', price: 200, discount: 25});

    const booking = new Booking({name: 'name1', email: 'mail@mail.com', checkin: '2024-05-01', checkout: '2024-05-06', discount: 10, room: 'room1'});    
    const booking2 = new Booking({name: 'name2', email: 'mail@mail.com', checkin: '2024-03-04', checkout: '2024-03-10', discount: 10, room: 'room1'});
    const booking3 = new Booking({name: 'name3', email: 'mail@mail.com', checkin: '2024-03-10', checkout: '2024-03-11', discount: 10, room: 'room1'});
    const booking4 = new Booking({name: 'name4', email: 'mail@mail.com', checkin: '2024-05-07', checkout: '2024-06-07', discount: 10, room: 'room1'});
    const booking5 = new Booking({name: 'name1', email: 'mail@mail.com', checkin: '2024-04-30', checkout: '2024-05-06', discount: 10, room: 'room1'});

    room.setBookings(booking, booking2, booking3, booking4, booking5);
    
    expect(room.isOccupied('2024-03-10')).toBeTruthy();
  });
    
  test('room is occupied, middle booking middle day', () => {

    const room = new Room({name: 'room1', price: 200, discount: 25});

    const booking = new Booking({name: 'name1', email: 'mail@mail.com', checkin: '2024-05-01', checkout: '2024-05-06', discount: 10, room: 'room1'});    
    const booking2 = new Booking({name: 'name2', email: 'mail@mail.com', checkin: '2024-03-04', checkout: '2024-03-10', discount: 10, room: 'room1'});
    const booking3 = new Booking({name: 'name3', email: 'mail@mail.com', checkin: '2024-03-10', checkout: '2024-03-11', discount: 10, room: 'room1'});
    const booking4 = new Booking({name: 'name4', email: 'mail@mail.com', checkin: '2024-05-07', checkout: '2024-06-07', discount: 10, room: 'room1'});
    const booking5 = new Booking({name: 'name1', email: 'mail@mail.com', checkin: '2024-04-30', checkout: '2024-05-06', discount: 10, room: 'room1'});

    room.setBookings(booking, booking2, booking3, booking4, booking5);
    
    expect(room.isOccupied('2024-05-23')).toBeTruthy();
  });

  test('room is not occupied, first booking checkout day', () => {

    const room = new Room({name: 'room1', price: 200, discount: 25});

    const booking = new Booking({name: 'name1', email: 'mail@mail.com', checkin: '2024-05-01', checkout: '2024-05-06', discount: 10, room: 'room1'});    
    const booking2 = new Booking({name: 'name2', email: 'mail@mail.com', checkin: '2024-03-04', checkout: '2024-03-10', discount: 10, room: 'room1'});
    const booking3 = new Booking({name: 'name3', email: 'mail@mail.com', checkin: '2024-03-10', checkout: '2024-03-11', discount: 10, room: 'room1'});
    const booking4 = new Booking({name: 'name4', email: 'mail@mail.com', checkin: '2024-05-07', checkout: '2024-06-07', discount: 10, room: 'room1'});
    const booking5 = new Booking({name: 'name1', email: 'mail@mail.com', checkin: '2024-06-08', checkout: '2024-06-15', discount: 10, room: 'room1'});

    room.setBookings(booking, booking2, booking3, booking4, booking5);
    
    expect(room.isOccupied('2024-05-06')).toBeFalsy();
  });

  test('room is not occupied, last booking checkout day', () => {

    const room = new Room({name: 'room1', price: 200, discount: 25});

    const booking = new Booking({name: 'name1', email: 'mail@mail.com', checkin: '2024-05-01', checkout: '2024-05-06', discount: 10, room: 'room1'});    
    const booking2 = new Booking({name: 'name2', email: 'mail@mail.com', checkin: '2024-03-04', checkout: '2024-03-10', discount: 10, room: 'room1'});
    const booking3 = new Booking({name: 'name3', email: 'mail@mail.com', checkin: '2024-03-10', checkout: '2024-03-11', discount: 10, room: 'room1'});
    const booking4 = new Booking({name: 'name4', email: 'mail@mail.com', checkin: '2024-05-07', checkout: '2024-06-07', discount: 10, room: 'room1'});
    const booking5 = new Booking({name: 'name1', email: 'mail@mail.com', checkin: '2024-06-08', checkout: '2024-06-15', discount: 10, room: 'room1'});

    room.setBookings(booking, booking2, booking3, booking4, booking5);
    
    expect(room.isOccupied('2024-06-15')).toBeFalsy();
  });

  test('room is not occupied, middle booking checkout day', () => {

    const room = new Room({name: 'room1', price: 200, discount: 25});

    const booking = new Booking({name: 'name1', email: 'mail@mail.com', checkin: '2024-05-01', checkout: '2024-05-06', discount: 10, room: 'room1'});    
    const booking2 = new Booking({name: 'name2', email: 'mail@mail.com', checkin: '2024-03-04', checkout: '2024-03-10', discount: 10, room: 'room1'});
    const booking3 = new Booking({name: 'name3', email: 'mail@mail.com', checkin: '2024-03-10', checkout: '2024-03-11', discount: 10, room: 'room1'});
    const booking4 = new Booking({name: 'name4', email: 'mail@mail.com', checkin: '2024-05-07', checkout: '2024-06-07', discount: 10, room: 'room1'});
    const booking5 = new Booking({name: 'name1', email: 'mail@mail.com', checkin: '2024-06-08', checkout: '2024-06-15', discount: 10, room: 'room1'});

    room.setBookings(booking, booking2, booking3, booking4, booking5);
    
    expect(room.isOccupied('2024-03-11')).toBeFalsy();
  });
});

describe('Room - Checking percentageOccupancy method', () => {

  test('Date parameter missing', () => {

    const room = new Room({name: 'room1', price: 200, discount: 25});

    const booking = new Booking({name: 'name1', email: 'mail@mail.com', checkin: '2024-05-01', checkout: '2024-05-06', discount: 10, room: 'room1'});    
    const booking2 = new Booking({name: 'name2', email: 'mail@mail.com', checkin: '2024-03-04', checkout: '2024-03-10', discount: 10, room: 'room1'});
    const booking3 = new Booking({name: 'name3', email: 'mail@mail.com', checkin: '2024-03-10', checkout: '2024-03-11', discount: 10, room: 'room1'});
    const booking4 = new Booking({name: 'name4', email: 'mail@mail.com', checkin: '2024-05-07', checkout: '2024-06-07', discount: 10, room: 'room1'});
    const booking5 = new Booking({name: 'name1', email: 'mail@mail.com', checkin: '2024-04-30', checkout: '2024-05-06', discount: 10, room: 'room1'});

    room.setBookings(booking, booking2, booking3, booking4, booking5);
    
    expect(() => {room.percentageOccupancy()}).toThrow(new Error('Error!! Missing Date!!'));
  });

  test('Wrong date format startDate', () => {

    const room = new Room({name: 'room1', price: 200, discount: 25});

    const booking = new Booking({name: 'name1', email: 'mail@mail.com', checkin: '2024-05-01', checkout: '2024-05-06', discount: 10, room: 'room1'});    
    const booking2 = new Booking({name: 'name2', email: 'mail@mail.com', checkin: '2024-03-04', checkout: '2024-03-10', discount: 10, room: 'room1'});
    const booking3 = new Booking({name: 'name3', email: 'mail@mail.com', checkin: '2024-03-10', checkout: '2024-03-11', discount: 10, room: 'room1'});
    const booking4 = new Booking({name: 'name4', email: 'mail@mail.com', checkin: '2024-05-07', checkout: '2024-06-07', discount: 10, room: 'room1'});
    const booking5 = new Booking({name: 'name1', email: 'mail@mail.com', checkin: '2024-04-30', checkout: '2024-05-06', discount: 10, room: 'room1'});

    room.setBookings(booking, booking2, booking3, booking4, booking5);
    
    expect(() => {room.percentageOccupancy(20240501, '2024-05-30')}).toThrow(new Error('Error!! Wrong date format!!'));
  });

  test('Wrong date format endDate', () => {

    const room = new Room({name: 'room1', price: 200, discount: 25});

    const booking = new Booking({name: 'name1', email: 'mail@mail.com', checkin: '2024-05-01', checkout: '2024-05-06', discount: 10, room: 'room1'});    
    const booking2 = new Booking({name: 'name2', email: 'mail@mail.com', checkin: '2024-03-04', checkout: '2024-03-10', discount: 10, room: 'room1'});
    const booking3 = new Booking({name: 'name3', email: 'mail@mail.com', checkin: '2024-03-10', checkout: '2024-03-11', discount: 10, room: 'room1'});
    const booking4 = new Booking({name: 'name4', email: 'mail@mail.com', checkin: '2024-05-07', checkout: '2024-06-07', discount: 10, room: 'room1'});
    const booking5 = new Booking({name: 'name1', email: 'mail@mail.com', checkin: '2024-04-30', checkout: '2024-05-06', discount: 10, room: 'room1'});

    room.setBookings(booking, booking2, booking3, booking4, booking5);
    
    expect(() => {room.percentageOccupancy('2024-03-30', 20240501)}).toThrow(new Error('Error!! Wrong date format!!'));
  });

  test('Wrong date format startDate and endDate', () => {

    const room = new Room({name: 'room1', price: 200, discount: 25});

    const booking = new Booking({name: 'name1', email: 'mail@mail.com', checkin: '2024-05-01', checkout: '2024-05-06', discount: 10, room: 'room1'});    
    const booking2 = new Booking({name: 'name2', email: 'mail@mail.com', checkin: '2024-03-04', checkout: '2024-03-10', discount: 10, room: 'room1'});
    const booking3 = new Booking({name: 'name3', email: 'mail@mail.com', checkin: '2024-03-10', checkout: '2024-03-11', discount: 10, room: 'room1'});
    const booking4 = new Booking({name: 'name4', email: 'mail@mail.com', checkin: '2024-05-07', checkout: '2024-06-07', discount: 10, room: 'room1'});
    const booking5 = new Booking({name: 'name1', email: 'mail@mail.com', checkin: '2024-04-30', checkout: '2024-05-06', discount: 10, room: 'room1'});

    room.setBookings(booking, booking2, booking3, booking4, booking5);
    
    expect(() => {room.percentageOccupancy(20240330, 20240501)}).toThrow(new Error('Error!! Wrong date format!!'));
  });

  test('100% full occupancy', () => {
    const room = new Room({name: 'room1', price: 200, discount: 25});

    const booking = new Booking({name: 'name1', email: 'mail@mail.com', checkin: '2024-05-01', checkout: '2024-05-06', discount: 10, room: 'room1'});    
    const booking2 = new Booking({name: 'name2', email: 'mail@mail.com', checkin: '2024-05-06', checkout: '2024-05-10', discount: 10, room: 'room1'});
    const booking3 = new Booking({name: 'name3', email: 'mail@mail.com', checkin: '2024-05-10', checkout: '2024-05-11', discount: 10, room: 'room1'});
    const booking4 = new Booking({name: 'name4', email: 'mail@mail.com', checkin: '2024-05-11', checkout: '2024-06-07', discount: 10, room: 'room1'});

    room.setBookings(booking, booking2, booking3, booking4);
    
    expect(room.percentageOccupancy('2024-05-11', '2024-06-06')).toBe(100);
  });

  test('50% occupancy', () => {
    const room = new Room({name: 'room1', price: 200, discount: 25});

    const booking = new Booking({name: 'name1', email: 'mail@mail.com', checkin: '2024-05-01', checkout: '2024-05-06', discount: 10, room: 'room1'});    
    const booking2 = new Booking({name: 'name2', email: 'mail@mail.com', checkin: '2024-05-06', checkout: '2024-05-10', discount: 10, room: 'room1'});
    const booking3 = new Booking({name: 'name3', email: 'mail@mail.com', checkin: '2024-05-10', checkout: '2024-05-11', discount: 10, room: 'room1'});
    const booking4 = new Booking({name: 'name4', email: 'mail@mail.com', checkin: '2024-05-11', checkout: '2024-06-07', discount: 10, room: 'room1'});

    room.setBookings(booking, booking2, booking3, booking4);
    
    expect(room.percentageOccupancy('2024-04-29', '2024-05-02')).toBe(50);
  });

  test('0% occupancy', () => {
    const room = new Room({name: 'room1', price: 200, discount: 25});

    const booking = new Booking({name: 'name1', email: 'mail@mail.com', checkin: '2024-05-01', checkout: '2024-05-06', discount: 10, room: 'room1'});    
    const booking2 = new Booking({name: 'name2', email: 'mail@mail.com', checkin: '2024-05-06', checkout: '2024-05-10', discount: 10, room: 'room1'});
    const booking3 = new Booking({name: 'name3', email: 'mail@mail.com', checkin: '2024-05-10', checkout: '2024-05-11', discount: 10, room: 'room1'});
    const booking4 = new Booking({name: 'name4', email: 'mail@mail.com', checkin: '2024-05-11', checkout: '2024-06-07', discount: 10, room: 'room1'});

    room.setBookings(booking, booking2, booking3, booking4);
    
    expect(room.percentageOccupancy('2023-05-11', '2023-06-06')).toBe(0);
  });
});

describe('Room - Checking totalOccupancyPercentage static method', () => {

  test('passing empty rooms array', () => {

    const rooms = [];
    expect(() => {Room.totalOccupancyPercentage(rooms, '2024-04-30', '2024-05-10')}).toThrow(new Error('ERROR!! NO hay habitaciones registradas!!'));
  });

  test('missing date parameter', () => {

    const room = new Room({name: 'una room', price: 200, discount: 25});
    const booking = new Booking({name: 'unName', email: 'unmail@mail.com', checkin: '2024-05-01', checkout: '2024-05-06', discount: 10, room: room})
    const booking2 = new Booking({name: 'otroName', email: 'otromail@mail.com', checkin: '2024-04-15', checkout: '2024-05-01', discount: 10, room: room})
    room.setBookings(booking, booking2);
    const room2 = new Room({name: 'una room', price: 200, discount: 25});
    const booking3 = new Booking({name: 'unName', email: 'unmail@mail.com', checkin: '2023-05-01', checkout: '2023-05-06', discount: 10, room: room2})
    const booking4 = new Booking({name: 'otroName', email: 'otromail@mail.com', checkin: '2023-04-15', checkout: '2023-05-01', discount: 10, room: room2})
    room2.setBookings(booking3, booking4);

    const rooms = [room, room2];
    expect(() => {Room.totalOccupancyPercentage(rooms, '', '2024-05-10')}).toThrow(new Error('Error!! Missing Date!!'));
  });

  test('wrong date format', () => {

    const room = new Room({name: 'una room', price: 200, discount: 25});
    const booking = new Booking({name: 'unName', email: 'unmail@mail.com', checkin: '2024-05-01', checkout: '2024-05-06', discount: 10, room: room})
    const booking2 = new Booking({name: 'otroName', email: 'otromail@mail.com', checkin: '2024-04-15', checkout: '2024-05-01', discount: 10, room: room})
    room.setBookings(booking, booking2);
    const room2 = new Room({name: 'una room', price: 200, discount: 25});
    const booking3 = new Booking({name: 'unName', email: 'unmail@mail.com', checkin: '2023-05-01', checkout: '2023-05-06', discount: 10, room: room2})
    const booking4 = new Booking({name: 'otroName', email: 'otromail@mail.com', checkin: '2023-04-15', checkout: '2023-05-01', discount: 10, room: room2})
    room2.setBookings(booking3, booking4);

    const rooms = [room, room2];
    expect(() => {Room.totalOccupancyPercentage(rooms, 20240430, '2024-05-10')}).toThrow(new Error('Error!! Wrong date format!!'));
  });

  test('100% full total occupancy', () => {

    const room = new Room({name: 'una room', price: 200, discount: 25});
    const booking = new Booking({name: 'unName', email: 'unmail@mail.com', checkin: '2023-04-15', checkout: '2023-05-01', discount: 10, room: room})
    const booking2 = new Booking({name: 'otroName', email: 'otromail@mail.com', checkin: '2023-04-01', checkout: '2023-04-06', discount: 10, room: room})
    room.setBookings(booking, booking2);
    const room2 = new Room({name: 'una room', price: 200, discount: 25});
    const booking3 = new Booking({name: 'unName', email: 'unmail@mail.com', checkin: '2023-04-01', checkout: '2023-04-06', discount: 10, room: room2})
    const booking4 = new Booking({name: 'otroName', email: 'otromail@mail.com', checkin: '2023-04-15', checkout: '2023-05-01', discount: 10, room: room2})
    room2.setBookings(booking3, booking4);

    const rooms = [room, room2];
    expect(Room.totalOccupancyPercentage(rooms, '2023-04-15', '2023-04-30')).toBe(100);
  });

  test('50% total occupancy', () => {

    const room = new Room({name: 'una room', price: 200, discount: 25});
    const booking = new Booking({name: 'unName', email: 'unmail@mail.com', checkin: '2024-05-01', checkout: '2024-05-06', discount: 10, room: room})
    const booking2 = new Booking({name: 'otroName', email: 'otromail@mail.com', checkin: '2024-04-15', checkout: '2024-05-01', discount: 10, room: room})
    room.setBookings(booking, booking2);
    const room2 = new Room({name: 'una room', price: 200, discount: 25});
    const booking3 = new Booking({name: 'unName', email: 'unmail@mail.com', checkin: '2023-05-01', checkout: '2023-05-06', discount: 10, room: room2})
    const booking4 = new Booking({name: 'otroName', email: 'otromail@mail.com', checkin: '2023-04-15', checkout: '2023-05-01', discount: 10, room: room2})
    room2.setBookings(booking3, booking4);

    const rooms = [room, room2];
    expect(Room.totalOccupancyPercentage(rooms, '2024-04-15', '2024-04-30')).toBe(50);
  });

  test('0% total occupancy', () => {

    const room = new Room({name: 'una room', price: 200, discount: 25});
    const booking = new Booking({name: 'unName', email: 'unmail@mail.com', checkin: '2024-05-01', checkout: '2024-05-06', discount: 10, room: room})
    const booking2 = new Booking({name: 'otroName', email: 'otromail@mail.com', checkin: '2024-04-15', checkout: '2024-05-01', discount: 10, room: room})
    room.setBookings(booking, booking2);
    const room2 = new Room({name: 'una room', price: 200, discount: 25});
    const booking3 = new Booking({name: 'unName', email: 'unmail@mail.com', checkin: '2023-05-01', checkout: '2023-05-06', discount: 10, room: room2})
    const booking4 = new Booking({name: 'otroName', email: 'otromail@mail.com', checkin: '2023-04-15', checkout: '2023-05-01', discount: 10, room: room2})
    room2.setBookings(booking3, booking4);

    const rooms = [room, room2];
    expect(Room.totalOccupancyPercentage(rooms, '2022-04-30', '2022-05-10')).toBe(0);
  });

});

describe('Room - Checking availableRooms static method', () => {

  test('passing empty rooms array', () => {

    const rooms = [];
    expect(() => {Room.availableRooms(rooms, '2024-04-30', '2024-05-10')}).toThrow(new Error('ERROR!! NO hay habitaciones registradas!!'));
  });

  test('missing date parameter', () => {

    const room = new Room({name: 'una room', price: 200, discount: 25});
    const booking = new Booking({name: 'unName', email: 'unmail@mail.com', checkin: '2024-05-01', checkout: '2024-05-06', discount: 10, room: room})
    const booking2 = new Booking({name: 'otroName', email: 'otromail@mail.com', checkin: '2024-04-15', checkout: '2024-05-01', discount: 10, room: room})
    room.setBookings(booking, booking2);
    const room2 = new Room({name: 'una room', price: 200, discount: 25});
    const booking3 = new Booking({name: 'unName', email: 'unmail@mail.com', checkin: '2023-05-01', checkout: '2023-05-06', discount: 10, room: room2})
    const booking4 = new Booking({name: 'otroName', email: 'otromail@mail.com', checkin: '2023-04-15', checkout: '2023-05-01', discount: 10, room: room2})
    room2.setBookings(booking3, booking4);

    const rooms = [room, room2];
    expect(() => {Room.availableRooms(rooms, '', '2024-05-10')}).toThrow(new Error('Error!! Missing Date!!'));
  });

  test('wrong date format', () => {

    const room = new Room({name: 'una room', price: 200, discount: 25});
    const booking = new Booking({name: 'unName', email: 'unmail@mail.com', checkin: '2024-05-01', checkout: '2024-05-06', discount: 10, room: room})
    const booking2 = new Booking({name: 'otroName', email: 'otromail@mail.com', checkin: '2024-04-15', checkout: '2024-05-01', discount: 10, room: room})
    room.setBookings(booking, booking2);
    const room2 = new Room({name: 'una room', price: 200, discount: 25});
    const booking3 = new Booking({name: 'unName', email: 'unmail@mail.com', checkin: '2023-05-01', checkout: '2023-05-06', discount: 10, room: room2})
    const booking4 = new Booking({name: 'otroName', email: 'otromail@mail.com', checkin: '2023-04-15', checkout: '2023-05-01', discount: 10, room: room2})
    room2.setBookings(booking3, booking4);

    const rooms = [room, room2];
    expect(() => {Room.availableRooms(rooms, 20240430, '2024-05-10')}).toThrow(new Error('Error!! Wrong date format!!'));
  });

  test('no room available', () => {

    const room = new Room({name: 'una room', price: 200, discount: 25});
    const booking = new Booking({name: 'unName', email: 'unmail@mail.com', checkin: '2024-05-01', checkout: '2024-05-06', discount: 10, room: room})
    const booking2 = new Booking({name: 'otroName', email: 'otromail@mail.com', checkin: '2024-04-15', checkout: '2024-05-01', discount: 10, room: room})
    room.setBookings(booking, booking2);
    const room2 = new Room({name: 'una room', price: 200, discount: 25});
    const booking3 = new Booking({name: 'unName', email: 'unmail@mail.com', checkin: '2024-05-01', checkout: '2024-05-06', discount: 10, room: room2})
    const booking4 = new Booking({name: 'otroName', email: 'otromail@mail.com', checkin: '2024-04-15', checkout: '2024-05-01', discount: 10, room: room2})
    room2.setBookings(booking3, booking4);

    const rooms = [room, room2];
    const expected = [];
    expect(Room.availableRooms(rooms, '2024-05-01', '2024-05-06')).toEqual(expect.arrayContaining(expected));
  });

  test('all rooms available', () => {

    const room = new Room({name: 'una room', price: 200, discount: 25});
    const booking = new Booking({name: 'unName', email: 'unmail@mail.com', checkin: '2024-05-01', checkout: '2024-05-06', discount: 10, room: room})
    const booking2 = new Booking({name: 'otroName', email: 'otromail@mail.com', checkin: '2024-04-15', checkout: '2024-05-01', discount: 10, room: room})
    room.setBookings(booking, booking2);
    const room2 = new Room({name: 'una room', price: 200, discount: 25});
    const booking3 = new Booking({name: 'unName', email: 'unmail@mail.com', checkin: '2024-05-01', checkout: '2024-05-06', discount: 10, room: room2})
    const booking4 = new Booking({name: 'otroName', email: 'otromail@mail.com', checkin: '2024-04-15', checkout: '2024-05-01', discount: 10, room: room2})
    room2.setBookings(booking3, booking4);

    const rooms = [room, room2];
    const expected = rooms;
    expect(Room.availableRooms(rooms, '2025-05-01', '2025-05-06')).toEqual(expect.arrayContaining(expected));
  });

  test('some rooms available', () => {

    const room = new Room({name: 'una room', price: 200, discount: 25});
    const booking = new Booking({name: 'unName', email: 'unmail@mail.com', checkin: '2023-05-01', checkout: '2023-05-06', discount: 10, room: room})
    const booking2 = new Booking({name: 'otroName', email: 'otromail@mail.com', checkin: '2024-04-15', checkout: '2024-05-01', discount: 10, room: room})
    room.setBookings(booking, booking2);
    const room2 = new Room({name: 'una room', price: 200, discount: 25});
    const booking3 = new Booking({name: 'unName', email: 'unmail@mail.com', checkin: '2024-05-01', checkout: '2024-05-06', discount: 10, room: room2})
    const booking4 = new Booking({name: 'otroName', email: 'otromail@mail.com', checkin: '2024-04-15', checkout: '2024-05-01', discount: 10, room: room2})
    room2.setBookings(booking3, booking4);

    const rooms = [room, room2];
    const expected = rooms;
    expect(Room.availableRooms(rooms, '2023-05-01', '2023-05-06')).not.toEqual(expect.arrayContaining(expected));
    /* expect(Room.availableRooms(rooms, '2023-05-01', '2023-05-06')).toHaveLength(1); */
  });
})