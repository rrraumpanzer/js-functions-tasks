import _ from 'lodash';

// BEGIN
const average = (...args) => {
    if (args.length === 0) {
        return null;
    }
    else if ((args.length === 1) && (args[0]===0)) {
        return 0;
    }
    else {
    const sum = _.sum(args);
    return sum / args.length;
    }
}
export default average;
// END