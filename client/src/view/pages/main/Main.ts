export function renderMyAccount(): string {
  try {
    return `
        <div class="card-container">
          <div class="card">
            <div class="card-header">
              <div class="logo">Logo</div>
            </div>
            <div class="card-body d-flex">
              <div class="user-image">
                <img src="" alt="user image" />
              </div>
              <div class="user-info">
                <p>Yonatan Silam</p>
                <p>Int </p>
                <p>ID number</p>
              </div>
          </div>
        </div>

    `;
  } catch (error) {
    console.error(error);
    return "";
  }
}
