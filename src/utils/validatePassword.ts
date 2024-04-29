import {
  ALPHABET_REGX,
  NUMBER_REGEX,
  SPECIALCHAR_REGEX
} from '../constants/regex'

export default function validatePassword(password: string) {
  if (password.length < 6 || password.length > 18) {
    return false
  }
  if (
    !SPECIALCHAR_REGEX.test(password) ||
    !NUMBER_REGEX.test(password) ||
    !ALPHABET_REGX.test(password)
  ) {
    return false
  }
  return true
}
