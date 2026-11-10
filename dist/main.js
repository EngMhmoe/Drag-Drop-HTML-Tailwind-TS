"use strict";
const newItemIdeaInput = document.querySelector("#newItemIdeaInput");
const addNewItemButton = document.querySelector("#addNewItemButton");
const FirstBoxItemContainer = document.querySelector("#FirstBoxItemContainer");
const boxes = document.querySelectorAll(".box");
const emptyStates = document.querySelectorAll(".emptyState");
const items = document.querySelectorAll(".items");
const boxNames = ["firstBox", "secondBox", "thirdBox", "fourthBox"];
const itemColorClassesByBox = {
    firstBox: "border-blue-400/15 hover:border-blue-400/50 hover:bg-blue-500/10",
    secondBox: "border-teal-400/15 hover:border-teal-400/50 hover:bg-teal-500/10",
    thirdBox: "border-amber-400/15 hover:border-amber-400/50 hover:bg-amber-500/10",
    fourthBox: "border-fuchsia-400/15 hover:border-fuchsia-400/50 hover:bg-fuchsia-500/10"
};
const savedTickets = localStorage.getItem("myIdeas");
const tickets = savedTickets ? JSON.parse(savedTickets) : [];
function createTicket(ticket) {
    const newItem = document.createElement("p");
    const sharedItemClasses = "item cursor-grab wrap-anywhere rounded-xl border px-4 py-3.5 text-sm font-medium text-slate-200 shadow-lg transition duration-1000 active:cursor-grabbing sm:text-base";
    newItem.className = `${sharedItemClasses} ${itemColorClassesByBox.firstBox}`;
    newItem.draggable = true;
    enableItemDragging(newItem);
    newItem.textContent = ticket;
    if (FirstBoxItemContainer === null)
        return;
    FirstBoxItemContainer.appendChild(newItem);
}
addNewItemButton === null || addNewItemButton === void 0 ? void 0 : addNewItemButton.addEventListener("click", () => {
    var _a;
    const newIdea = (_a = newItemIdeaInput === null || newItemIdeaInput === void 0 ? void 0 : newItemIdeaInput.value.trim()) !== null && _a !== void 0 ? _a : "";
    if (newIdea === "")
        return;
    tickets.push(newIdea);
    localStorage.setItem("myIdeas", JSON.stringify(tickets));
    createTicket(newIdea);
    if (newItemIdeaInput)
        newItemIdeaInput.value = "";
    updateEmptyStates();
});
function updateEmptyStates() {
    boxes.forEach((box, index) => {
        const boxItems = box.querySelectorAll(".item");
        if (emptyStates[index]) {
            emptyStates[index].style.display = boxItems.length === 0 ? "flex" : "none";
        }
    });
}
let draggedItem = null;
function enableItemDragging(item) {
    item.addEventListener("dragstart", () => {
        draggedItem = item;
        item.style.opacity = "0.5";
    });
    item.addEventListener("dragend", () => {
        draggedItem = null;
        item.style.opacity = "1";
    });
}
boxes.forEach((box) => {
    box.addEventListener("dragover", (event) => {
        event.preventDefault();
    });
    box.addEventListener("drop", (event) => {
        event.preventDefault();
        if (draggedItem === null)
            return;
        const currentDraggedItem = draggedItem;
        const targetItems = box.querySelector(".items");
        if (targetItems === null)
            return;
        targetItems.appendChild(currentDraggedItem);
        const boxIndex = Array.from(boxes).indexOf(box);
        const boxName = boxNames[boxIndex];
        const colorClasses = itemColorClassesByBox[boxName];
        for (const boxName of boxNames) {
            const classes = itemColorClassesByBox[boxName];
            currentDraggedItem.classList.remove(...classes.split(" "));
        }
        currentDraggedItem.classList.add(...colorClasses.split(" "));
        updateEmptyStates();
    });
});
tickets.forEach((ticket) => {
    createTicket(ticket);
});
updateEmptyStates();
//# sourceMappingURL=main.js.map