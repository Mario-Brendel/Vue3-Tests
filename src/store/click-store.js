import { Store } from "./main";
class ClickStore extends Store {
    data() {
        return {
            count: 0,
        };
    }
    incrementCount() {
        this.state.count++;
    }
}
export const clickStore = new ClickStore();
//# sourceMappingURL=click-store.js.map