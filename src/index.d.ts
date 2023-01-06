declare namespace SampleTypes {
  interface HelloParams {
    name: string;
  }
  interface HelloResponse {
    message: string;
  }
  type HelloFunction = (param1: HelloParams) => HelloResponse;
}

declare const pouet: 42;
declare function func2(): () => 42;
