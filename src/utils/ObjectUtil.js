export function isEmpty(obj) {
    // null and undefined are "empty"
    if (obj == null) return true;
    if (obj === undefined) return true;

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if (obj.length > 0) return false;
    if (obj.length === 0) return true;

    // If it isn't an object at this point
    // it is empty, but it can't be anything *but* empty
    // Is it empty?  Depends on your application.
    if (typeof obj !== 'object') return true;

    let hasPropertyEmpty = false;
    Object.values(obj).forEach((el) => {
        // for (const el in Object.values(obj)) {
        if (el === undefined || el === null || el === '' || el.length === 0) {
            hasPropertyEmpty = true;
        }
    });
    return hasPropertyEmpty;
}

export function isEmptyWithIgnore(obj, ...ignores) {
    // null and undefined are "empty"
    if (obj == null) return true;
    if (obj === undefined) return true;

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if (obj.length > 0) return false;
    if (obj.length === 0) return true;

    // If it isn't an object at this point
    // it is empty, but it can't be anything *but* empty
    // Is it empty?  Depends on your application.
    if (typeof obj !== 'object') return true;

    // for (const key of Object.keys(obj)) {
    //     const val = obj[key];
    //     console.log(val);
    //     // use val
    // }
    // const vals = Object.keys(obj).map((key) => {
    //     console.log(ignores);
    //     console.log(key);
    //     return obj[key];
    // });
    // console.log(vals);

    let hasPropertyEmpty = false;    
    Object.keys(obj).forEach((el) => {        
        if (ignores.indexOf(el) < 0) {
            const val = obj[el];            
            if (val === undefined || val === null || val === '' || val.length === 0) {
                hasPropertyEmpty = true;
            }
        }
    });
    return hasPropertyEmpty;
}

export function isEmptyProperty(property) {
    if (property == null) return true;
    if (property === undefined) return true;
    if (property === '') return true;
    return false;
}
