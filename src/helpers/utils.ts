
export function swapValuesGeneric(
  value1: string,
  value2: string
): [string, string] {
  return [value2, value1];
}

export function isValidEmail(mail: string) {
  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(mail);
}

export function isNullOrEmpty(str: string | null | undefined): boolean {
  return !str || str === '';
}

export function isNullOrWhiteSpace(str: string | null | undefined): boolean {
  return !str || str.trim() === '';
}
