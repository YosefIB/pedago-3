export function renderLessons(): string {
  try {
    return `
        <div class='lessons'>
        <div class="container line">
        <button type="button" class="btn btn-primary">Primary</button>
            <h1>Lessons</h1>
            <h3>Last lessons:</h3>
            <ul>
                <li><a href="#lesson5">Lesson 5</a></li>
                <li><a href="#lesson4">Lesson 4</a></li>
                <li><a href="#lesson3">Lesson 3</a></li>
                <li><a href="#lesson2">Lesson 2</a></li>
                <li><a href="#lesson1">Lesson 1</a></li>
                <input type="text" class="form-control" placeholder="Search">
            </ul>
        <div class="container">
          <div class="row">  
            <div class="col">
              Column
            </div>
            <div class="col">
              Column
            </div>
          </div>
          <div class="row">
            <div class="col red">
              Column
            </div>
            <div class="col">
              Column
            </div>
            <div class="col">
              Column
            </div>
          </div>
        </div>
        </div>
        </div>
        `;
  } catch (error) {
    console.error(error);
    return "";
  }
}
