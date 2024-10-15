export function renderRegister(): string {
    try {
        return `
        <div class="container">
               <img class="back-image" src="./src/images/back-image.png" alt="back image">
            <h1>Register</h1>
            <form id="registerForm">
                <label for="fullName"></label>
                <input type="text" id="fullName" name="fullName" required placeholder="Full Name:">
                
                <label for="email"></label>
                <input type="email"  id="email" name="email" required placeholder="Email:">
                
                <label for="phone"></label>
                <input type="text" id="phone" name="phone" required placeholder="Phone:">
                
                <label for="password"></label>
                <input type="password"  id="password" name="password" required placeholder="Password:">
                
                <label for="repeatPassword"></label>
                <input type="password id="repeatPassword" name="repeatPassword" required placeholder="Repeat Password:">
                 <div class="terms">
            <input type="checkbox" id="agreeTerms" name="agreeTerms" required>
            <label for="agreeTerms">I agree to the  <a href="#">Terms and Conditions</a></label>
        </div>
                <button class="btn" type="submit">Register</button>
                <button class="btn" type="submit">Back to login</button>

            </form>
        </div>
    `;
    } catch (error) {
        console.error(error);
        return "";
    }
}
