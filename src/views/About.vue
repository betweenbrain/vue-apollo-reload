<script>
import { GetCategories } from "@/graphql/Queries";

export default {
  apollo: {
    GetCategories: {
      error(err) {
        console.log(err);
      },
      query: GetCategories,
      result(data) {
        console.log(data);
      },
      skip() {
        return this.skipQuery;
      },
      update: data => data.getCategories,
      variables() {
        return {
          first: this.first
        };
      }
    }
  },
  data() {
    return {
      first: 1,
      skipQuery: true
    };
  },
  name: "about",
  render() {
    return (
      <div>
        <h1>About</h1>
        <button onClick={(e) => (this.skipQuery = false)}>
          Run Query
        </button>
      </div>
    );
  }
};
</script>