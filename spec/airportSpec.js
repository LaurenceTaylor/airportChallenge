describe("Airport", function() {
    describe("When weather is not stormy", function() {
      beforeEach(function() {
          airport = new Airport();
          plane = jasmine.createSpy('plane');
          spyOn(airport, 'isStormy').and.returnValue(false);
      });

      it ("has an empty 'planes' array when created", function() {
          expect(airport.planes).toEqual([]);
      });

      it ("adds a plane to its array with 'land' method", function() {
          airport.land(plane);
          expect(airport.planes).toEqual([plane]);
      });

      it ("deletes a plane from its array with 'takeOff' method", function() {
          airport.land(plane);
          airport.takeOff(plane);
          expect(airport.planes).toEqual([]);
      });

      it ("throws an error when trying to land at an at-capacity airport", function() {
        while (airport.planes.length < airport.capacity) {
          airport.land(jasmine.createSpy('plane'));
        }
        expect(function() { airport.land(plane);}).toThrow('Airport is full');
      });
    });

    describe("When weather is stormy", function() {
        beforeEach(function() {
            airport = new Airport();
            plane = jasmine.createSpy('plane');
            spyOn(airport, 'isStormy').and.returnValue(true);
        });

        it ("planes can't take off", function() {
            airport.planes.push(plane);
            expect(function() { airport.takeOff(plane);}).toThrow('Too stormy to take off');
        });

        it ("planes can't land", function() {
            expect(function() { airport.land(plane);}).toThrow('Too stormy to land');
        });
    });
});
