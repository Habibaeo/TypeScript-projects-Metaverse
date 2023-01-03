#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const duration = () => {
  return new Promise((res) => {
    setTimeout(res, 1000);
  });
};
async function welcome() {
  let welcomeNote = chalkAnimation.rainbow(
    `Command Line TODO App using Node.js, TypeScript, and Inquirer`
  );
  await duration();
  welcomeNote.stop();
  console.log(`
        ${chalk.rgb(454, 87, 654)("HOW TO USE")}
        A smart todo app on your computer.
        Select the option from ${chalk.cyanBright("List")}
        `);
}

let task: string[] = [];
let taskDescription: (string | number)[] = [];
let sr_no = 0;
let completedTask: string[] = [];

async function todo() {
  let selectAction = await inquirer.prompt([
    {
      type: "list",
      name: "List",
      message: chalk.rgb(568, 87, 534)("Select option from the list provided"),
      choices: [
        "1) Add Task",
        "2) Provide Tasks list",
        "3) Mark Done",
        "4) show completed tasks list",
        "5) Delete the task",
      ],
    },
  ]);
  if (selectAction.List == "1) Add Task" ) {
    let addTask = await inquirer.prompt([
      {
        type: "string",
        name: "addtask",
        message: "Name the task : ",
      },
      {
        type: "input",
        name: "taskDetails",
        message: "Describe your task : ",
      },
    ]);
    task.push(addTask.addtask);

    taskDescription.push(addTask.taskDetails);

    // console.log(task);

    // console.log(taskDescription);
    console.log(` Todo task added in the list successfully.`);
  } else if (selectAction.List == "2) Provide Tasks list") {
    if (task.length !== 0){
      sr_no = 0;
      for (let i = 0; i < task.length; i++) {
        console.log(`${++sr_no}: ${task[i]} `);
      }

    }else {
      console.log(` Tasks list is empty`);
      
    }
   
  } else if (selectAction.List == "3) Mark Done") {
    let markDone = await inquirer.prompt([
      {
        type: "list",
        name: "markdone",
        message: "Mark the task as completed",
        choices: task
      },
    ]);
      if (task.length !== 0) {
      let cut = task.splice(task.indexOf(markDone.markdone), 1).toString();

      completedTask.push(cut);

      console.log(`  Task ${cut} Marked as done and moved to completed tasks list.`)
    } else {
      console.log(`  No task is present to be marked as done`);
    }
  } else if (selectAction.List == "4) show completed tasks list") {
    if (completedTask.length !== 0) {
      sr_no = 0;
      completedTask.forEach((e) => console.log(`${++sr_no}: ${e}`));
    } else {
      console.log("  No task is marked as completed yet");
    }
  } else if (selectAction.List == "5) Delete the task") {

    let deletetask = await inquirer.prompt([
      {
        type: "list",
        name: "delete",
        message: "Do you want to delete the task permanentaly",
        choices: completedTask,
      }
    ]);
    if(completedTask.length !== 0) {
        completedTask.splice(completedTask.indexOf(deletetask.delete), 1);
        
    } else {
        console.log(` No task is available to be deleted`);
    }
  }
}

async function repeat() {
  do {
    await todo();
    var ask = await inquirer.prompt([
      {
        type: "confirm",
        name: "doagain",
        message: chalk.yellow("To perform another task press Y/N"),
      },
    ]);
  } while (ask.doagain);
}
await welcome();
repeat();
