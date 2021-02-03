import Switch1 from "./Switches/Switch1";
import Switch2 from "./Switches/Switch2";
import Switch3 from "./Switches/Switch3";
import Ready from "./Switches/Ready";

import { useState } from "react";
const Section = () => {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <div className="section">
      <div className="switches">
        <Switch1 swtch={switch1} setState={setSwitch1} />
        <Switch2 swtch={switch2} setState={setSwitch2} />
        <Switch3 swtch={switch3} setState={setSwitch3} />
      </div>

      <Ready swtch1={switch1} swtch2={switch2} swtch3={switch3} />
    </div>
  );
};

export default Section;
