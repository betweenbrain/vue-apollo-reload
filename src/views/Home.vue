<script>
import { GetPosts } from '@/graphql/Queries';

export default {
  apollo: {
    getPosts: {
      error(err) {
        console.log(err);
      },
      query: GetPosts,
      result(data) {
        console.log(data);
      },
      skip() {
        return this.skipQuery;
      },
      update: data => data.getPosts,
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
  name: "home",
  render() {
    return (
      <div>
        <h1>Home</h1>
        <button onClick={(e) => (this.skipQuery = false)}>
          Run Query
        </button>
      </div>
    );
  }
};
</script>
