export function renderRegister(): string {
    try {
        return `
        <div class="container">
            <h1 class="display-4 text-center">Register</h1>
            <form id="registerForm" class="mb-3">
                <label for="fullName"></label>
                <input type="text" class="form-control" id="fullName" name="fullName" required placeholder="Full Name:">
                
                <label for="email"></label>
                <input type="email" class="form-control" id="email" name="email" required placeholder="Email:">
                
                <label for="phone"></label>
                <input type="text" class="form-control" id="phone" name="phone" required placeholder="Phone:">
                
                <label for="password"></label>
                <input type="password" class="form-control" id="password" name="password" required placeholder="Password:">
                
                <label for="repeatPassword"></label>
                <input type="password" class="form-control" id="repeatPassword" name="repeatPassword" required placeholder="Repeat Password:">
                
                <button class="btn btn-primary w-100 mt-3" type="submit">Register</button>
            </form>
        </div>
    `;
    } catch (error) {
        console.error(error);
        return "";
    }
}
