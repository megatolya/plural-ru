declare module 'plural-ru' {
  type ThreeForms = [string, string, string];
  type TwoForms = [string, string];

  const noun: (num: number, ...forms: TwoForms | ThreeForms) => string;
  const verb: (num: number, ...forms: ThreeForms) => string;

  export {
    noun,
    verb,
  };

  export default noun;
}
