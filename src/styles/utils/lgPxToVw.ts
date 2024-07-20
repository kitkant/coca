import computeSizes from "./computeSizes";

export default function lgPxToVw(input: any) {
  return `${input / 13.66}vw`;
}

export function lgPxTo5kPx(value: number) {
  return `${computeSizes(value)["5k"]}px`;
}

export function lgPxTo2kPx(value: number) {
  return `${computeSizes(value)["2k"]}px`;
}
