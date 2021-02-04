import Switc from "./Switches/Switc";
import Ready from "./Switches/Ready";

import { useState } from "react";
const Section = () => {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <div className="section">
      <div className="switches">
        <Switc swtch={switch1} setState={setSwitch1} />
        <Switc swtch={switch2} setState={setSwitch2} />
        <Switc swtch={switch3} setState={setSwitch3} />
      </div>

      <Ready swtch1={switch1} swtch2={switch2} swtch3={switch3} />
    </div>
  );
};

export default Section;
