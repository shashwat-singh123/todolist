export class Init {
  load() {
    if (
      localStorage.getItem("todos") === null ||
      localStorage.getItem("todos") == undefined
    ) {
      console.log("No Todos Found....Creating...");
      var todos = [
        {
          text: "pickup kids at school"
        },
        {
          text: "meeting with boss"
        },
        {
          text: "dinner with wife"
        }
      ];

      localStorage.setItem("todos", JSON.stringify(todos));
    } else {
      console.log("Found todos.....");
    }
  }
}
