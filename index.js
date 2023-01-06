import getMyName from "./lib";

// typechecks OK
getMyName({ name: 42 });
getMyName("toto");
getMyName({ name: "juju" });
getMyName(42);

/** @type {SampleTypes.HelloFunction} */
// typechecks OK
const func = () => {};

// NOT type-checked
const pouet = 42;
