import { Component, Vue } from "vue-property-decorator";

@Component({
  props: {
    tip: {
      type: String,
      default: "空空如也..."
    }
  }
})
export default class Empty extends Vue {}
