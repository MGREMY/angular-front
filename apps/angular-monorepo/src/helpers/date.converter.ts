export function arrayKeysToDate<T>(obj: T[], ...keys: (keyof T)[]): T[] {
  return obj.map((item) => {
    const updatedItem = { ...item };

    keys.forEach((key) => {
      const value = updatedItem[key];

      if (typeof value === 'string') {
        updatedItem[key] = new Date(value) as T[keyof T];
      }
    });

    return updatedItem;
  });
}

export function keysToDate<T>(obj: T, ...keys: (keyof T)[]): T {
  keys.forEach((key) => {
    const value = obj[key];

    if (typeof value === 'string') {
      obj[key] = new Date(value) as T[keyof T];
    }
  });

  return obj;
}
