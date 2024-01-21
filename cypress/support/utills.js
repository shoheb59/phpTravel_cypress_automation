export class DataGenerator {
    
        generateRandomString()
        {
            return Math.random().toString(36).substring(2);
        }

        generateRandomTwoDigitPhoneNumber() {
            return Math.floor(Math.random() * 90 + 10).toString();
          }
    
    
}