import {PersistentStore, Store} from "./main";
import {CLICK_STORE_NAME} from "./store-names";

interface Click extends Object {
    count: number
}

class ClickStore extends PersistentStore<Click> {
    protected data(): Click {
        return {
            count: 0,
        };
    }

    incrementCount() {
        this.state.count++;
    }
}

export const clickStore = new ClickStore(CLICK_STORE_NAME);