import { PersistentStore } from "./main";
import { CLICK_STORE_NAME } from "./store-names";
class ClickStore extends PersistentStore {
    data() {
        return {
            count: 0,
        };
    }
    incrementCount() {
        this.state.count++;
    }
}
export const clickStore = new ClickStore(CLICK_STORE_NAME);
//# sourceMappingURL=click-store.js.map