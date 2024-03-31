"use strict";

const showButton = document.querySelector(".btn-show");
const addButton = document.querySelector(".btn-add");
const removeButton = document.querySelector(".btn-remove");
const averageButton = document.querySelector(".btn-average");

const studentGroup = {
  "Shcherbak Bohdan": 10,
  "Vertyj Olexander": 9.5,
};

showButton.addEventListener("click", showStudents);
addButton.addEventListener("click", addStudent);
removeButton.addEventListener("click", removeStudent);
averageButton.addEventListener("click", calculateAverage);

function showStudents() {
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "<h2>Student List</h2>";
  for (const name in studentGroup) {
    const average = studentGroup[name];
    outputDiv.innerHTML += `<p>${name}: ${average}</p>`;
  }
}
function addStudent() {
  const name = prompt("Enter student name (Last, First):");
  const average = parseFloat(prompt("Enter student average:"));

  if (!isNaN(average) && name) {
    studentGroup[name] = average;
    alert(`Student ${name} added successfully!`);
    showStudents();
  } else {
    alert("Invalid input. Please enter valid name and average.");
  }
}
function removeStudent() {
  const nameToRemove = prompt("Enter the name of the student to remove:");

  if (nameToRemove in studentGroup) {
    delete studentGroup[nameToRemove];
    alert(`Student ${nameToRemove} removed successfully!`);
    showStudents();
  } else {
    alert(`Student ${nameToRemove} not found.`);
  }
}
function calculateAverage() {
  const averages = Object.values(studentGroup);
  const totalAverage =
    averages.length > 0
      ? averages.reduce((a, b) => a + b) / averages.length
      : 0;
  alert(`Group average: ${totalAverage.toFixed(2)}`);
}
