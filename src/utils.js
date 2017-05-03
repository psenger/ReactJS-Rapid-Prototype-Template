

/**
 * Recursively flatten the map, pulling the deepest child to the top of the array.
 * Router-Switch recognizes the order of the route path's with the intent of specificity.
 * Therefore the most specific paths need to be first. AND, children of menus should
 * be routes that look like proper REST paths... respecting the specificity.
 * I delete children because it is a reserved word in the props of Route
 */
export const flatViewMap = ( items ) => {
    let retList = [];
    let subList = [];
    if ( items && Array.isArray( items ) && items.length !== 0 ) {
        retList = items.map( (d) => {
            let dz = Object.assign({},d);
            if ( dz.children && Array.isArray( dz.children ) && dz.children.length !== 0 ) {
                dz.children.map( (c) => subList.push(c) );
            }
            delete dz.children;
            return dz;
        });
    }
    if ( subList.length !== 0 ) {
        return flatViewMap( subList ).concat( retList )
    }
    return retList;
};

/**
 * safeGet get a value out of an object with the key being a string of dot values.
 *
 * @param {*} obj - the object to get the value(s) out of.
 * @param {string} key - the dot noted path into the object ( note this will not work if the properties are 'aaa.bbb.fff' )
 * @param {*} [defaultVal] - the default value, if undefined.
 * @returns {*}
 */
export const safeGet = (obj, key, defaultVal) => {
    if ((obj === undefined) || (obj === null)) return defaultVal;
    if (typeof obj[key] !== 'undefined') return obj[key];
    return key.split('.').reduce(function (o, x) {
        return (typeof o === 'undefined' || o === null) ? ((typeof defaultVal !== 'undefined') ? defaultVal : o) : o[x];
    }, obj);
};

/**
 *
 * @param {object} obj - target object
 * @param {string} key = key
 * @param {object} value - the value to set.
 * @returns {*}
 */
export const safeSet = (obj, key, value) => {
    if (!obj || !key)
        return Object.assign({},obj); // bail out there is no object or no key.

    let properties = key.split(".") || [];

    let curObj = Object.assign({},obj);
    let ptr = curObj;

    const mapper = ( cv, ind, ar ) => {
        if ( !ptr[cv] ) {
            ptr[cv] = {};// initialize the object literal if there is no value in place.
        }
        if ( ar.length -1 === ind ) {
            ptr[cv] = value; // at the end.
        } else {
            ptr = ptr[cv]; // move the pointer down.
        }
    };
    properties.map( mapper );

    return curObj;
};

/**
 * left pad a number with zeros
 * @param number the base number
 * @param max max number of padding
 */
export const lpad = ( number, max ) => {
    return ( (Array(max).fill('0').join('')) + number).slice(-max);
};