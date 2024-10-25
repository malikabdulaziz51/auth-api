const RegisterUser = require("../RegisterUser");

describe("a RegisterUer entities", () => {
  it("shoulld throw error when payload did not contain needed property", () => {
    // Arrange
    const payload = {
      username: "dicoding",
      password: "password",
    };

    // Action and Assert
    expect(() => new RegisterUser(payload)).toThrowError(
      "REGISTER_USER.NOT_CONTAIN_NEEDED_PROPERTY"
    );
  });

  it("should throw error when payload did not meet data type specification", () => {
    // Arrange
    const payload = {
      username: 123,
      fullname: true,
      password: "password",
    };

    // Action and Assert
    expect(() => new RegisterUser(payload)).toThrowError(
      "REGISTER_USER.NOT_MEET_DATA_TYPE_SPECIFICATION"
    );
  });

  it('should throw error when username contains more than 50 characters', () => {
    // Arrange
    const payload = {
      username: 'dicodingindonesiadicodingindonesiadicodingindonesia',
      password: 'password',
      fullname: 'Dicoding Indonesia'
    };

    // Action and Assert
    expect(() => new RegisterUser(payload)).toThrowError('REGISTER_USER.USERNAME_LIMIT_CHAR');
  });

  it('should throw error when username contains restricted character', () => {
    // Arrange
    const payload = {
      username: 'dico ding',
      password: 'password',
      fullname: 'Dicoding Indonesia'
    };

    // Action and Assert
    expect(() => new RegisterUser(payload)).toThrowError('REGISTER_USER.USERNAME_CONTAIN_RESTRICTED_CHARACTER');
  })

  it('should create registerUser object correctly', () => {
    //Arrange
    const payload = {
      username: 'dicoding',
      password: 'password',
      fullname: 'Dicoding Indonesia'
    };

    //Action
    const { username, password, fullname } = new RegisterUser(payload);

    //Assert
    expect(username).toEqual(payload.username);
    expect(password).toEqual(payload.password);
    expect(fullname).toEqual(payload.fullname);
  })
});
