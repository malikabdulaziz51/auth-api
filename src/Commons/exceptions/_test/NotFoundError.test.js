const NotFoundError = require('../NotFoundError');

describe('NotFoundError', () => {
    it('should create error correctly', () => {
        const notFoundError = new NotFoundError('not found');

        expect(notFoundError.statusCode).toBe(404);
        expect(notFoundError.message).toBe('not found');
        expect(notFoundError.name).toBe('NotFoundError');
    })
})