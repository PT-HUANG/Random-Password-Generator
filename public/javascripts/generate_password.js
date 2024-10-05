function generatePassword (data) {
    //generate Array including specific characters
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseLetters = lowerCaseLetters.toUpperCase();
    const numbers = '1234567890';
    const symbols = "!;#$%&'()*+,-./:;<=>?@[]^_`{|}~";

    //create a collection to pickup characters
    let collection = [];

    if (data.lowercase === 'on') {
        collection = collection.concat(lowerCaseLetters.split(''));
    }

    if (data.uppercase === 'on') {
        collection = collection.concat(upperCaseLetters.split(''));
    }

    if (data.numbers === 'on') {
        collection = collection.concat(numbers.split(''));
    }

    if (data.symbols === 'on') {
        collection = collection.concat(symbols.split(''));
    }

    //Remove things user do not need
    if (data.excludeCharacters) {
        collection = collection.filter(
            character => !data.excludeCharacters.includes(character)
        );
    }

    //Randomly pickup characters from collection
    function generateRandomChar() {
        const index = Math.floor(Math.random() * collection.length);
        return collection[index];
    }

    //Return error
    if(collection.length === 0) {
        return '無法產生有效的密碼';
    }

    let password = ''
    for (let i=0; i<data.length; i++) {
        password += generateRandomChar();
    }
    
    return password;
}

export { generatePassword };