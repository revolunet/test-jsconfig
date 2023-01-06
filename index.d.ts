declare namespace SampleTypes {
  type HelloParams = { name: string };
  type HelloResponse = {
    message: string;
  };
  type HelloFunction = (param1: HelloParams) => HelloResponse;
}

declare const pouet: string;

type Kikoo2 = {
  name: "xxx";
};
