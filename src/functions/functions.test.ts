import { describe, it, expect } from "vitest";
import { commonKeys, compareObjectArrays, compareObjects } from "./functions";

describe("compareObjects",() =>{
    const key1 = {
        a:1, 
        b:2, 
        c:3
    }

    const key2 = {
        a:1,
        b:2,
        c:3
    }

    const key3 = {
        d:4, 
        e:5, 
        f:6
    }
    
     

    it("identical key value pairs", () => {
        expect(compareObjects(key1, key2)).toBe(true)
    })

    it("should return false for diff objects", () => {
        expect(compareObjects(key1, key3)).toBe(false)
    })

    it("testing with empty objects", () => {
        expect(compareObjects({},{})).toBe(true)
    })

})

describe("compareObjectsArray", () => {
    const key1 = {
        a:1, 
        b:2, 
        c:3
    }

    const key2 = {
        a:1,
        b:2,
        c:3
    }

    const key3 = {
        d:4, 
        e:5, 
        f:6
    }
    

    const array1 = [key1,key2]
    const array2 = [key1,key2]
    const array3 = [key3, key1]
    const array4 = [key1, {a:1, b:2}]
    const irl = [{id:1,name:"Alma", cica:true}, {id:2,name:"Brendon",cica:false}]

    it("identical array of objects", () => {
        expect(compareObjectArrays(array1, array2)). toBe(true)
    })
    it("different array of objects", () => {
        expect(compareObjectArrays(array1, array3)).toBe(false)
    })
    it("differemt lenght arrays", () => {
        expect(compareObjectArrays(array1,array4)).toBe(false)
    })
    it("real life data", () => {
        expect(compareObjectArrays(irl,irl)).toBe(true)
    })
})

describe("commonkeys", () => {
    const key1 = {
        a:1, 
        b:2, 
        c:3
    }

    const key2 = {
        a:1,
        b:2,
        c:3
    }
    const key3 = {
        d:4, 
        e:5, 
        f:6
    }
    
    it("returns every key name", () => {
        expect(commonKeys(key1, key2)).toEqual(["a","b","c"])
    })
    it("returns an empty when there is no key that matches", () => {
        expect(commonKeys(key1, key3)).toEqual([])
    })
    it("returns an empty object when there are two objects", () => {
        expect(commonKeys({},{})).toEqual([])
    })
})