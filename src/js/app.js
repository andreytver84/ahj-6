const allCols = document.querySelectorAll('.col');

const toggleDisplay = function(b) {
    const parentCol = b.closest('.col');
    parentCol.querySelector('.textarea-block').classList.toggle("hidden");
    parentCol.querySelector('.col-addbtn').classList.toggle("hidden");
}
const addTask = function(btn) {
    const textArea = btn.closest('.textarea-block').querySelector('textarea');
    const text = textArea.value;
    console.log(text);
}
allCols.forEach(item => item.addEventListener('click', (e) => {
    if (e.target.classList.contains('col-addbtn') || e.target.classList.contains('close-add-card')) {
        toggleDisplay(item);
    } else if (e.target.classList.contains('add-card')) {
        addTask(e.target);
    }
}));