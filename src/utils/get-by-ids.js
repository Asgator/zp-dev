export default (state = {}, ids) => {
    return ids.map(id => state[id]);
};
