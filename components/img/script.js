import { Component, Vue } from "vue-property-decorator";

@Component({
  props: {
    src: String
  }
})
export default class CImage extends Vue {}
