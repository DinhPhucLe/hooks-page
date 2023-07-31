**# useEffect #**



structure:      useEffect(<function>, <dependency>);
    // first arguement is **COMPULSORY**, second arguement is **OPTIONAL**
usage:      perform side effects of components (timers, fetching data, ...)



const [count, setCount] = useState(0);          //set "count" as a state variable to keep track of its value

useEffect(() => {         // useEffect allows component to perform setTimeout (timer effect)
  setTimeout(() => {
    setCount((count) => count + 1);
  }, 1000);
});

return <h1>I have rendered {count} times!</h1>;
    // "count" will keep increasing
    // useEffect will run on every renders (every time count++ -> new render -> useEffect runs)



//  use dependency value to stop infinite render

useEffect(() => {
  //Runs only on the first render
}, []);
    // dependency arguement only accepts array

useEffect(() => {
  //Runs only on the first render
}, [id1, id2])
    // any dependency value changes => useEffect runs
    //      (id1 or id2 changes => useEffect runs)