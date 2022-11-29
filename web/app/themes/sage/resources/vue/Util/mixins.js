export default {
    methods: {
        objIsEmpty(obj) {
            return Object.keys(obj).length === 0;
        },
        objHasKey(obj, key) {
            return obj.hasOwnProperty(key);
        },
    }
}
