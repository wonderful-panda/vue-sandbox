import Vue, { VNode } from "vue";

const NgComponent = Vue.extend({
    name: "NgComponent",
    props: {
        foo: { type: String },
        bar: {}    // any types are accepted
    },
    render(h): VNode {
        return h("div", this.foo);
    }
});
