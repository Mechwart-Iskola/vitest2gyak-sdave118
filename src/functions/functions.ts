
// ellenőrzi, hogy két objektum tartalmazza-e ugyanazokat a kulcs-érték párokat.
export function compareObjects(obj1: Record<string, any>, obj2: Record<string, any>): boolean {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
  
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    return keys1.every((key) => obj2.hasOwnProperty(key) && obj1[key] === obj2[key]);
  }
  

//összehasonlítja két tömb minden objektumát, és visszaadja, hogy a két tömb azonos-e.
  export function compareObjectArrays(arr1: Record<string, any>[], arr2: Record<string, any>[]): boolean {
    if (arr1.length !== arr2.length) {
      return false;
    }
  
    return arr1.every((obj, index) => compareObjects(obj, arr2[index]));
  }
  

//visszaadja két objektum azon kulcsait, amelyek mindkettőben megtalálhatók.
  export function commonKeys(obj1: Record<string, any>, obj2: Record<string, any>): string[] {
    return Object.keys(obj1).filter((key) => obj2.hasOwnProperty(key));
  }
  

