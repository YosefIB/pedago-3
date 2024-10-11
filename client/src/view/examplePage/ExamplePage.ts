export function renderExamplePage(): string {
    try {
        return `
        <div>
        <h1>Example Page</h1>
        <p>This is an example page.</p>
        <button type="button" class="btn btn-success">Success</button>
        </div>
    `;
    } catch (error) {
        console.error(error);
        return "";
        
    }
   
}