import {Store} from "./main";
import { watch, ref, reactive } from 'vue';

interface Click {
    count: number
}

class ClickStore extends Store<Click> {
    protected data(): Click {
        return {
            count: 0
        };
    }

    incrementCount() {
        this.state.count++;
    }
}

export const clickStore: ClickStore = new ClickStore()