import sqMobile from "../images/project/sQ_mobile.png";
import studentQ from "../images/project/studentQ.png";
import phpTodoLaptop from "../images/project/php_todo_lap.png";
import DjangoTodoLaptop from "../images/project/todo_laptop.png";
import gameMobile from "../images/project/gameMobile.png";
import game from "../images/project/game.png";
import "../data/skillData";

const data = [
  {
    name: "StudentQ",
    description:"This is our final year project in graduation. We have four people in a group and we create this project together. This is an full stack website. This main pourpose of this project is to help students 🎓 to get Notice, importent informetions, Study materials of the institutions where they studied. And it also helps Students to find Mess and Teachers easily and they can contact with them for consult.",   
    image:studentQ,
    technology: ["Html", "scss", "JS", "Django","SQLite"],
    option: [
      { name: "source code", link: "https://github.com/Sombhu2022/StudentQ" },
    ],
  },
  {
    name: "Data collector",
    description:"This is my first todo application on django . I create this project using HTML , CSS , BOOTSTRAP , DJANGO & SQlite . this is the simple todo list . we can store veriouse data using this application ... ",
    image:DjangoTodoLaptop,
    technology: ["Html", "Css", "Bootstrap", "Django"],
    option: [
      {
        name: "source code",
        link: "https://github.com/Sombhu2022/Data-collector/tree/main",
      },
    ],
  },
  {
    name: "Tic Tac Toe",
    description:"This is my first webpage , basicaly i create this game for fun . this is a simple Tic Tac Teo game .   ",
    image:game,
    technology: ["Html", "css", "JS"],
    option: [
      { name: "source code", link: "https://github.com/Sombhu2022/StudentQ" },
      
      { name: "Play Game", link: "https://tic-tac-toe-sombhu2022.vercel.app/" },
    ],
  },
];

export default data;
