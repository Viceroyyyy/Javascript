const insert = document.querySelector("#insert");

document.addEventListener("keypress", (event) => {
    insert.innerHTML =`<div class ="color">
    <table>
    <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
    </tr>
    <tr>
    <th>${event.key}</th>
    <th>${event.keyCode}</th>
    <th>${event.code}</th>
    </tr>
    </table>
    </div>`
});