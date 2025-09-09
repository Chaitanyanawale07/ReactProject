import React from "react";
import CounterNew from "./Stateful_Component/CounterNew";
import Counter from "./Stateful_Component/Counter";
import Counter_class from "./hooks/Counter_class";
import Counter_arrow from "./hooks/Counter_arrow";




function App() {
  return (
    <div style={{ backgroundColor:"yellow"}}>
        < CounterNew />
        < Counter />
        < CounterNew />
        <Counter_class />
        <Counter_arrow />
      
      
      
    </div>
    
  );
}

export default App;
