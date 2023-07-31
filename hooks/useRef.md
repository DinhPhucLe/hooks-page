**# useRef #**



const count = useRef(0);
    // initialize the value = 0
    // useRef stores 1 value: "count.current"

//  similar to:
//  const count = {current: 0}




const [inputValue, setInputValue] = useState("");
const count = useRef(0);

useEffect(() => {
    count.current = count.current + 1;
});

return (
    <>
        <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
        />
        <h1>Render Count: {count.current}</h1>
    </>
);
    // useRef does not cause re-render



//  use useRef to focus on InputField


function App() {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}


const inputElement = useRef();      // initialize inputElement

const focusInput = () => {
    inputElement.current.focus();       //use DOM to focus on inputField
};

return (
    <>
      <input type="text" ref={inputElement} />          //  use ref to access DOM
      <button onClick={focusInput}>Focus Input</button>
    </>
);



// useRef can also keep track of previous value