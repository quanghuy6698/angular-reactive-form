import { AbstractControl } from '@angular/forms';
import { IReactiveFormError } from 'src/app/shared/constants/reactive-form-error.model';

const pinCodePattern = /^([0-9]{2}){2,3}$/g;
const repeatingNumberPattern = /^(.)\1{3,}$/g;
/**
 * PIN code validator
 * PIN code valid is PIN code contains 4 or 6 numbers and not a weak PIN code like:
 * 1. Repeating numbers (for ex: 6666, 777777,..)
 * 2. Increasing numbers (for ex: 1234, 345678,..)
 * 3. Decreasing numbers (for ex: 4321, 876543,..)
 * @see isRepeatingNumbers
 * @see isIncreasingNumbers
 * @see isDecreasingNumbers
 *
 * @param pinCodeControl refer to abtract control of PIN code input field
 * @returns error if PIN code invalid or weak, else return null
 */
function pinCodeValidator(pinCodeControl: AbstractControl): IReactiveFormError | null {
  const pinCode = pinCodeControl.value;

  if (pinCodePattern.test(pinCode)) {
    if (isRepeatingNumbers(pinCode) || isIncreasingNumbers(pinCode) || isDecreasingNumbers(pinCode)) {
      return { weakPinCode: true };
    }
  } else {
    return { invalidPinCode: true };
  }
  return null;
}

/**
 * Is repeating numbers
 * Check if PIN code string is repeating numbers
 *
 * @param pinCode refer to PIN code tring
 * @returns true if PIN code is repeating numbers, else return null
 */
function isRepeatingNumbers(pinCode: string) {
  if (repeatingNumberPattern.test(pinCode)) {
    return true;
  }
  return false;
}

/**
 * Is increasing numbers
 * Check if PIN code string is increasing numbers
 *
 * @param pinCode refer to PIN code tring
 * @returns true if PIN code is increasing numbers, else return null
 */
function isIncreasingNumbers(pinCode: string) {
  const doPinCode = pinCodeToNumbers(pinCode);

  for (let i = 1; i < doPinCode.length; i++) {
    if (doPinCode[i] != doPinCode[i - 1] + 1) {
      return false;
    }
  }
  return true;
}

/**
 * Is decreasing numbers
 * Check if PIN code string is decreasing numbers
 *
 * @param pinCode refer to PIN code tring
 * @returns true if PIN code is decreasing numbers, else return null
 */
function isDecreasingNumbers(pinCode: string) {
  const doPinCode = pinCodeToNumbers(pinCode);

  for (let i = 1; i < doPinCode.length; i++) {
    if (doPinCode[i] + 1 != doPinCode[i - 1]) {
      return false;
    }
  }
  return true;
}

/**
 * PIN code to numbers
 * Convert PIN code string to array of numbers
 *
 * @param pinCode refer to PIN code tring
 * @returns numbers array of PIN code
 */
function pinCodeToNumbers(pinCode: string) {
  const pinCodeNumbers = [];
  for (let i = 0; i < pinCode.length; i++) {
    pinCodeNumbers.push(Number(pinCode.charAt(i)));
  }
  return pinCodeNumbers;
}

export { pinCodeValidator };
