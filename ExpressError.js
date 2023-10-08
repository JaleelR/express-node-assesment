class ExpressError extends Error {
    constructor(message, status) {
        //used to call the the parent class
        super();
        //this to be used in other instances
        this.message = message;
        this.status = status;
        //provides information to the console about what line the error was thrown 
        console.error(this.stack)
    }
}

module.exports = ExpressError;