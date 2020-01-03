import { reactive, readonly } from 'vue';
export class Store {
    constructor() {
        let data = this.data();
        this.setup(data);
        this.state = reactive(data);
    }
    setup(data) { }
    getState() {
        let foo = readonly(this.state);
        return foo;
    }
}
//# sourceMappingURL=main.js.map