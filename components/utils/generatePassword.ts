type TGeneratePassword = {
  passwordLength: number;
  lowerCase: boolean;
  upperCase: boolean;
  numbers: boolean;
  symbols: boolean;
  setPassword: (value: React.SetStateAction<string>) => void;
  setIsPasswordGenerated: (value: React.SetStateAction<boolean>) => void;
};

type TCreatePassword = {
  characters: string;
  passwordLength: number;
};

const createPassword = ({characters, passwordLength}: TCreatePassword) => {
  return Array.from({length: passwordLength}, () =>
    characters.charAt(Math.floor(Math.random() * characters.length)),
  ).join('');
};

export const generatePassword = ({
  passwordLength,
  lowerCase,
  upperCase,
  numbers,
  symbols,
  setPassword,
  setIsPasswordGenerated,
}: TGeneratePassword) => {
  let characterList = '';
  const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const digitChars = '0123456789';
  const specialChars = '+-*./?_#@!%^&*()';

  if (lowerCase) characterList += lowerCaseChars;
  if (upperCase) characterList += upperCaseChars;
  if (numbers) characterList += digitChars;
  if (symbols) characterList += specialChars;

  if (characterList === '') {
    characterList = lowerCaseChars; // Fallback to lowercase by default
  }
  const generatedPassword = createPassword({
    characters: characterList,
    passwordLength,
  });

  if (generatedPassword) {
    setPassword(generatedPassword);
    setIsPasswordGenerated(true);
  }
};
