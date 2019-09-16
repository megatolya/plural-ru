declare module 'plural-ru' {
  import { StyleProp, ViewStyle } from 'react-native';

  type ThreeForms = [string, string, string];
  type TwoForms = [string, string];
  type Forms = TwoForms | ThreeForms;

  type GetPlural = (num: numbers, ...forms: Forms) => string;

  const noun: GetPlural;
  const verb: GetPlural;

  export {
    noun,
    verb,
  };

  export default noun;
}
