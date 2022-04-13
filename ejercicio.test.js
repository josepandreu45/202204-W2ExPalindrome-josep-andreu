const isPalindrome = (text) => {
  let alternativeText = text;
  if (typeof text !== String) {
    throw "Text not provided";
  } else if (text === "") {
    throw "Text not provided";
  } else {
    alternativeText = text;
    alternativeText.toLowerCase();
    alternativeText.replace("/[.,:;()_?¿!¡-s]/g");
    alternativeText.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    alternativeText.split("").join("").reverse();
  }

  if (text === alternativeText) {
    return true;
  } else {
    return false;
  }
};

describe("given the isPalindrome function", () => {
  describe("when it recieves 'Alí tomó tila'", () => {
    test("then should return true", () => {
      const text = "Alí tomó tila";
      const expectedResult = true;

      const result = isPalindrome(text);

      expect(result).tobe(expectedResult);
    });
  });
});
