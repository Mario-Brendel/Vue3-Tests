import {reactive, readonly} from 'vue';


export abstract class Store<T extends Object> {
    protected state: T;

    constructor() {
        let data = this.data();
        this.setup(data);
        this.state = reactive(data) as T;
    }

    protected abstract data(): T

    protected setup(data: T): void {}

    public getState() {
    // TODO the readonly state should only be used in dev environment... otherwise just return the state
    return readonly(this.state)
    }
}