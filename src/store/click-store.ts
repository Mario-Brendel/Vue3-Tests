import {Store} from "./main";

interface Click extends Object {
    count: number
}

class ClickStore extends Store<Click> {
    protected data(): Click {
        return {
            count: 0,
        };
    }

    incrementCount() {
        this.state.count++;
    }
}

export const clickStore: ClickStore = new ClickStore()