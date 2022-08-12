import Fact from "./Fact";
import { facts } from "../data/facts";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
  //The maximum is exclusive and the minimum is inclusive
}

const FactSection = () => {
  const factsSetNumber = getRandomInt(0, facts.length);
  console.log("factsSetNumber", factsSetNumber);

  return (
    <div>
      <Fact
        orderImage={1}
        orderText={2}
        fact={facts[factsSetNumber].fact1}
        fadeDirection={"fade-right"}
      />
      <Fact
        orderImage={2}
        orderText={1}
        fact={facts[factsSetNumber].fact2}
        fadeDirection={"fade-left"}
      />
    </div>
  );
};

export default FactSection;
