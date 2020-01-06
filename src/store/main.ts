import {reactive, readonly, watch, ref, Ref} from 'vue';
import {set, get} from 'idb-keyval'


export abstract class Store<T extends Object> {
    protected state: T;


    constructor(readonly storeName: string) {
        let data = this.data();
        this.state = reactive(data) as T;
    }

    protected abstract data(): T

    public getState(): T {
        return readonly(this.state) as T
    }
}

export abstract class PersistentStore<T extends Object> extends Store<T> {

    private isInitialized = ref(false);

    constructor(readonly storeName: string) {
        super(storeName);
    }

    async init() {
        if(this.isInitialized) {
            let stateFromIndexedDB: string = await get(this.storeName);
            if(stateFromIndexedDB) {
                Object.assign(this.state, JSON.parse(stateFromIndexedDB))
            }
            watch(() => this.state, (val) => set(this.storeName, JSON.stringify(val)), {deep: true})

            this.isInitialized.value = true;
        }
    }

    getIsInitialized(): Ref<boolean> {
        return this.isInitialized
    }
}