import { Vue, Component } from "vue-property-decorator";

@Component({
  props: {
    visible: {
      type: Boolean,
      default: true
    }
  }
})
export default class Popup extends Vue {}
