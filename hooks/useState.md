**# useState #**



const [var, setVar] = useState("");
    // var: current state        
    // setValue: function to set "var" value
    // useState(""): set initial "var" value

<div> My value: {var} </div>
    // rendering "var" value in component

<div> setVar("abc"); </div>
    //set new value to "var"
    // now {var} is "abc";


const [student, setStudent] = useState({
    name: "Mike",
    age: "18",
    school: "LHP"
});
    //create a state object;

<p> My name is {student.name} </p>
    //getting a value from a state object

setStudent(prev => {
    return {...prev, school: "Stanford"}
});
    //only change value of key "school"

setStudent({school: "Stanford"});
    //this would remove "name", "age"; the object now only contains "school" key

