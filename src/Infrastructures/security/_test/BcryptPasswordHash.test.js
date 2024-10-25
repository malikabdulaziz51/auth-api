const bcrypt = require("bcrypt");
const BcryptPasswordHash = require("../BcryptPasswordHash");

describe("BcryptPasswordHash", () => {
  describe("hash function", () => {
    it("should encrypt password correctly", async () => {
      //Arrange
      const spyHash = jest.spyOn(bcrypt, "hash");
      const bcryptPasswordHash = new BcryptPasswordHash(bcrypt);

      //Action
      const encryptedPassword = await bcryptPasswordHash.hash("plain_text");

      //Assert
      expect(typeof encryptedPassword).toEqual("string");
      expect(encryptedPassword).not.toEqual("plain_text");
      expect(spyHash).toHaveBeenCalledWith("plain_text", 10);
    });
  });
});
