export default {

    data() {
        return {
            timeout: "",
        }
    },

    methods: {
        // eslint-disable-next-line no-unused-vars
        debounce(func, wait = 1000) {
            clearTimeout(this.timeout);
            this.timeout = setTimeout(func, 500);
          },
    },
    
}