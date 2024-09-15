export const getLocalStorageItem = (key, isParseRequired = false) => {
  const data = window?.localStorage?.getItem(key) || null;
  if (isParseRequired) {
    return JSON.parse(data) || null;
  } else {
    return data || null;
  }
};

export const setLocalStorageItem = (key, data, isStringifyRequired = false) => {
  if (isStringifyRequired) {
    const stringifyData = JSON.stringify(data);
    window?.localStorage?.setItem(key, stringifyData);
  } else {
    window?.localStorage?.setItem(key, data);
  }
};
