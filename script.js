function trackExercise() {
    var exercise = document.getElementById("exercise").value;
    var duration = document.getElementById("duration").value;
  
    if (exercise && duration) {
      var exerciseList = document.getElementById("exerciseList");
      var exerciseItem = document.createElement("div");
      exerciseItem.textContent = exercise + " - " + duration + " mins";
      exerciseList.appendChild(exerciseItem);
  
      document.getElementById("exercise").value = "";
      document.getElementById("duration").value = "";
    } else {
      alert("Please enter both exercise and duration.");
    }
  }
  