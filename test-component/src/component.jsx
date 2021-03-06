import Mixins from './mixins';

const moreProps = {
  moreFoo: String,
};
const deepProps = {
  moreDeepProps: {
    eventMoreDeepProps: {
      superDeepFoo: String,
    },
  }
}

export default {
  name: 'my-phenome-component',
  props: {
    foo: String,
    bar: Number,
    fooBar: [String, Number],
    one: {
      type: Array,
      default: [0, 1, 2],
      required: true,
    },
    two: window.FormData,
    date: Date,
    ...moreProps,
    ...deepProps.moreDeepProps.eventMoreDeepProps,
    ...Mixins.colorProps,
  },
  methods: {
    open(animate = true) {
      this.dispatchEvent('componentOpen', 'foo')
    },
    close(animate) {
      this.dispatchEvent('componentClose', 'bar')
    },
  },
  render() {
    return (
      <div className="test-component">
        {/* Hello */}
      </div>
    );
  },
}