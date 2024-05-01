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