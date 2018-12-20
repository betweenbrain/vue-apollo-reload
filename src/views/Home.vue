<script>
import DataProvider from "@/mixins/DataProvider";

export default {
  mixins: [DataProvider],
  mounted() {
    this.getData("posts");
  },
  name: "home",
  render() {
    return (
      <div>
        <h1>Home</h1>
      </div>
    );
  }
};
</script>
