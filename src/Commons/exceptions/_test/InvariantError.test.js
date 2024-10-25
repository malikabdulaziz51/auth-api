const InvariantError = require('../InvariantError');

describe('InvariantError', () => {
    it('should create an error correctly', () => {      
        const invariantError = new InvariantError('an error occurs');

        expect(invariantError.statusCode).toBe(400);
        expect(invariantError.message).toBe('an error occurs');
        expect(invariantError.name).toBe('InvariantError');
    });
})