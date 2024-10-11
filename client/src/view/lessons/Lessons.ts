export function renderLessons(): string {
  try {
    return `
        <div class='lessons'>
            <h1>Lessons</h1>
            <h3>Last lessons:</h3>
            <ul>
                <li><a href="#lesson5">Lesson 5</a></li>
                <li><a href="#lesson4">Lesson 4</a></li>
                <li><a href="#lesson3">Lesson 3</a></li>
                <li><a href="#lesson2">Lesson 2</a></li>
                <li><a href="#lesson1">Lesson 1</a></li>
            </ul>
        </div>
        `;
  } catch (error) {
    console.error(error);
    return "";
  }
}
