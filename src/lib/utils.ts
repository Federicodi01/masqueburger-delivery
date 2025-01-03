import {type ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export async function sleep(ms: number): Promise<void> {
  return new Promise((res) => {
    setTimeout(res, ms);
  });
}

export function categoryToPlural(name: string) {
  const lower = name.toLowerCase();

  if (lower === "medallon") {
    return capitalize("medallones");
  }

  if (lower === "topping") {
    return capitalize("toppings");
  }

  if (lower === "aderezo") {
    return capitalize("aderezos");
  }

  if (lower === "pan") {
    return capitalize("panes");
  }
}
