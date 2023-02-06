/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 562:
/***/ (() => {

const allCols = document.querySelectorAll(".col");
const allTasks = document.querySelectorAll(".task");
const todo = document.getElementById("todo");
const progress = document.getElementById("progress");
const done = document.getElementById("done");
const toggleDisplay = function (b) {
  const parentCol = b.closest(".col");
  parentCol.querySelector(".textarea-block").classList.toggle("hidden");
  parentCol.querySelector(".col-addbtn").classList.toggle("hidden");
};
const createRemoveTask = function (task) {
  const removeTask = document.createElement("div");
  removeTask.classList.add("remove-task");
  task.appendChild(removeTask);
};
const removeTask = function (btn) {
  const parentCol = btn.closest(".col");
  btn.closest(".task").remove();
  setLocalStorage(parentCol);
};
const createTask = function (task) {
  if (task) {
    const taskBlock = document.createElement("div");
    taskBlock.classList.add("task");
    taskBlock.textContent = task;
    createRemoveTask(taskBlock);
    return taskBlock;
  }
};
const addTask = function (btn) {
  const parentCol = btn.closest(".col");
  const textArea = parentCol.querySelector("textarea");
  const text = textArea.value;
  if (text) {
    parentCol.querySelector(".tasks-body").appendChild(createTask(text));
    textArea.value = "";
    setLocalStorage(parentCol);
  }
};
const setLocalStorage = function (col) {
  const tasks = col.querySelectorAll(".task");
  const taskText = [];
  tasks.forEach(task => taskText.push(task.textContent));
  localStorage.setItem(col.id, JSON.stringify(taskText));
};
const renderTask = function (col) {
  const data = localStorage.getItem(col.id);
  if (data) {
    const tasks = JSON.parse(data);
    tasks.forEach(task => col.querySelector(".tasks-body").appendChild(createTask(task)));
  }
};
allTasks.forEach(task => createRemoveTask(task));
allCols.forEach(col => {
  renderTask(col);
  col.addEventListener("click", e => {
    if (e.target.classList.contains("col-addbtn") || e.target.classList.contains("close-add-card")) {
      toggleDisplay(col);
    } else if (e.target.classList.contains("add-card")) {
      addTask(e.target);
    } else if (e.target.classList.contains("remove-task")) {
      removeTask(e.target);
    }
  });
  const tasks = col.querySelector(".tasks-body");
  let actualEl;
  const onMouseOver = e => {
    actualEl.style.top = e.clientY + "px";
    actualEl.style.left = e.clientX + "px";
  };
  const onMouseUp = e => {
    const mouseUpTask = e.target;
    const currentParentTasksBody = mouseUpTask.closest(".tasks-body") ? mouseUpTask.closest(".tasks-body") : tasks;
    actualEl.classList.remove("dragged");
    actualEl.style = "";
    console.log(mouseUpTask, currentParentTasksBody);
    if (mouseUpTask.classList.contains("task")) {
      currentParentTasksBody.insertBefore(actualEl, mouseUpTask);
    } else {
      currentParentTasksBody.appendChild(actualEl);
    }
    actualEl = undefined;
    setLocalStorage(col);
    setLocalStorage(currentParentTasksBody.closest(".col"));
    document.documentElement.removeEventListener("mouseup", onMouseUp);
    document.documentElement.removeEventListener("mouseover", onMouseOver);
  };
  tasks.addEventListener("mousedown", e => {
    e.preventDefault();
    if (e.target.classList.contains("task")) {
      actualEl = e.target;
      actualEl.classList.add("dragged");
    }
    document.documentElement.addEventListener("mouseup", onMouseUp);
    document.documentElement.addEventListener("mouseover", onMouseOver);
  });
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(562);
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_app__WEBPACK_IMPORTED_MODULE_0__);



// TODO: write your code in app.js
})();

/******/ })()
;