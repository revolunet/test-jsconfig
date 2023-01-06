import hello from "./lib";

// typechecks OK
hello({ name: 42 });
hello("toto");
hello({ name: "juju" });
hello(42);

/** @type {SampleTypes.HelloFunction} */
// typechecks OK
const func = () => {};

// NOT type-checked
const pouet = 99;
const func2 = () => {};
