// ==================================================
// 1. DOM Elements
// ==================================================
const newItemIdeaInput: (HTMLInputElement | null) = document.querySelector<HTMLInputElement>("#newItemIdeaInput");
const addNewItemButton: (HTMLButtonElement | null) = document.querySelector<HTMLButtonElement>("#addNewItemButton");
const FirstBoxItemContainer: (HTMLDivElement | null) = document.querySelector<HTMLDivElement>("#FirstBoxItemContainer");
const boxes: NodeListOf<HTMLDivElement> = document.querySelectorAll<HTMLDivElement>(".box");
const emptyStates: NodeListOf<HTMLDivElement> = document.querySelectorAll<HTMLDivElement>(".emptyState");
const items: NodeListOf<HTMLDivElement> = document.querySelectorAll<HTMLDivElement>(".items");










// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////










// ==================================================
// 2. Configuration & Data
// ==================================================

// Define Box Names In Their HTML Order
const boxNames: string[] = [ "firstBox", "secondBox", "thirdBox", "fourthBox"];


// Define Item Color Classes For Each Box
const itemColorClassesByBox: { [boxName: string]: string } = {
    // First Box Item Classes
    firstBox: "border-blue-400/15 hover:border-blue-400/50 hover:bg-blue-500/10",

    // Second Box Item Classes
    secondBox: "border-teal-400/15 hover:border-teal-400/50 hover:bg-teal-500/10",

    // Third Box Item Classes
    thirdBox: "border-amber-400/15 hover:border-amber-400/50 hover:bg-amber-500/10",

    // Fourth Box Item Classes
    fourthBox: "border-fuchsia-400/15 hover:border-fuchsia-400/50 hover:bg-fuchsia-500/10"
};



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// Get Saved Tickets From Local Storage
const savedTickets: string | null = localStorage.getItem("myIdeas");


// Convert Saved Tickets To An Array
const tickets: string[] = savedTickets ? JSON.parse(savedTickets) as string[] : [];










// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////










// ==================================================
// 3. Create & Display Items
// ==================================================

// Create A New Ticket And Display It In The First Box
function createTicket(ticket: string): void {

    // Create A New Ticket Element
    const newItem: HTMLParagraphElement = document.createElement("p");


    // Define Shared Styling Classes
    const sharedItemClasses: string = "item cursor-grab wrap-anywhere rounded-xl border px-4 py-3.5 text-sm font-medium text-slate-200 shadow-lg transition duration-1000 active:cursor-grabbing sm:text-base";


    // Apply Shared Classes And First Box Item Colors
    newItem.className = `${sharedItemClasses} ${itemColorClassesByBox.firstBox}`;


    // Enable Dragging For The Ticket
    newItem.draggable = true;



    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


    // Enable Dragging For The New Ticket
    enableItemDragging(newItem);


    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



    // Set The Ticket Text Content
    newItem.textContent = ticket;


    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



    // Stop If The First Box Container Does Not Exist
    if (FirstBoxItemContainer === null) return;


    // Append The New Ticket To The Ideas Container
    FirstBoxItemContainer.appendChild(newItem);

}










// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////










// ==================================================
// 4. Add New Item
// ==================================================

// Handle Adding A New Ticket
addNewItemButton?.addEventListener("click", (): void => {

    // Get The Input Value And Remove Extra Spaces
    const newIdea: string = newItemIdeaInput?.value.trim() ?? "";


    // Check If The New Idea Is Empty
    if (newIdea === "") return;



    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



    // Add The New Idea To The Tickets Array
    tickets.push(newIdea);


    // Save The Updated Tickets Array To Local Storage
    localStorage.setItem("myIdeas", JSON.stringify(tickets));


    // Create And Display The New Idea
    createTicket(newIdea);


    // Clear The Input Field
    if (newItemIdeaInput) newItemIdeaInput.value = "";


    // Update The Empty State Of Each Box
    updateEmptyStates();

});










// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////










// ==================================================
// 5. Empty State Management
// ==================================================

// Update The Empty State Of Each Box
function updateEmptyStates(): void {

    boxes.forEach((box: HTMLDivElement, index: number): void => {

        // Get All Tickets Inside The Current Box
        const boxItems: NodeListOf<HTMLParagraphElement> = box.querySelectorAll<HTMLParagraphElement>(".item");


        // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


        // Show Or Hide The Empty State
        if (emptyStates[index]) 
        {
            emptyStates[index].style.display = boxItems.length === 0 ? "flex" : "none";
        }
    });

}










// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////










// ==================================================
// 6. Drag & Drop Management
// ==================================================

// Store The Currently Dragged Item
let draggedItem: HTMLParagraphElement | null = null;


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Enable Dragging For A Ticket
function enableItemDragging(item: HTMLParagraphElement): void {

    item.addEventListener("dragstart", (): void => {
        draggedItem = item;
        item.style.opacity = "0.5";
    });


    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++


    item.addEventListener("dragend", (): void => {
        draggedItem = null;
        item.style.opacity = "1";
    });

}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Enable Drop For All Boxes
boxes.forEach((box: HTMLDivElement): void => {

    // Allow Tickets To Be Dropped Into The Box
    box.addEventListener("dragover", (event: DragEvent): void => {
        event.preventDefault();
    });


    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++


    // Handle Dropping A Ticket Into The Box
    box.addEventListener("drop", (event: DragEvent): void => {
        event.preventDefault();

        // ++++++++++++++++++++++++++++++++++++++
        // ++++++++++++++++++++++++++++++++++++++

        // Stop If No Ticket Is Being Dragged
        if (draggedItem === null) return;

        // ++++++++++++++++++++++++++++++++++++++
        // ++++++++++++++++++++++++++++++++++++++

        const currentDraggedItem: HTMLParagraphElement = draggedItem;

        // ++++++++++++++++++++++++++++++++++++++
        // ++++++++++++++++++++++++++++++++++++++

        // Get The Target Box Items Container
        const targetItems: HTMLDivElement | null = box.querySelector<HTMLDivElement>(".items");

        // ++++++++++++++++++++++++++++++++++++++
        // ++++++++++++++++++++++++++++++++++++++

        // Stop If The Target Container Does Not Exist
        if (targetItems === null) return;

        // ++++++++++++++++++++++++++++++++++++++
        // ++++++++++++++++++++++++++++++++++++++

        // Move The Ticket Into The Target Box
        targetItems.appendChild(currentDraggedItem);

        // ++++++++++++++++++++++++++++++++++++++
        // ++++++++++++++++++++++++++++++++++++++

        // Get The Target Box Name
        const boxIndex: number = Array.from(boxes).indexOf(box);
        const boxName: string = boxNames[boxIndex];

        // ++++++++++++++++++++++++++++++++++++++
        // ++++++++++++++++++++++++++++++++++++++

        // Get The Target Box Color Classes
        const colorClasses: string = itemColorClassesByBox[boxName];

        // ++++++++++++++++++++++++++++++++++++++
        // ++++++++++++++++++++++++++++++++++++++

        // Remove The Previous Box Color Classes
        for (const boxName of boxNames) {
            const classes: string = itemColorClassesByBox[boxName];

            currentDraggedItem.classList.remove(...classes.split(" "));
        }

        // ++++++++++++++++++++++++++++++++++++++
        // ++++++++++++++++++++++++++++++++++++++

        // Apply The Target Box Color Classes
        currentDraggedItem.classList.add(...colorClasses.split(" "));

        // ++++++++++++++++++++++++++++++++++++++
        // ++++++++++++++++++++++++++++++++++++++

        // Update The Empty States
        updateEmptyStates();
    });

});










// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////










// ==================================================
// 7. Initial Application Setup
// ==================================================

// Display All Saved Tickets
tickets.forEach((ticket: string): void => {
    createTicket(ticket);
});


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Update The Empty States On Initial Load
updateEmptyStates();