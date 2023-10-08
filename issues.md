# Broken App Issues
1. there was no app.use(express.json) being called used to retrieve the param to use req.body
2. the err in catch was not being called as an argument for catch. 
3. app.listen shold be a function if called, with a console.log to confirm server has been started
4. requirements was var, should be const to make sure you arent overwriting the imported library on accident
5. When you have an array of promises you resolve them by using promise.all()
6. there was no status code sent with the post. 
7. added custon error handiling so you can get more specific error handling 