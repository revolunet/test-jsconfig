/** @type {SampleTypes.HelloFunction} */
const hello = ({ name }) => {
  return {
    message: `Hello ${name}`,
  };
};

module.exports = function getMyName() {
  return "pouet";
};
