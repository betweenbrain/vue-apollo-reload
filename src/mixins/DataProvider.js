import { GetPosts } from '@/graphql/Queries';

export default {
  apollo: {
    GetPosts: {
      error(err) {
        console.log(err);
      },
      query: GetPosts,
      result(data) {
        console.log(`Got ${data.data.posts.edges.length} post(s)`);
        console.log('Got results, setting skipPostsQuery to %c%s', 'color: red; font-weight: bold', 'true');
        this.skipPostsQuery = true;
      },
      skip() {
        return this.skipPostsQuery;
      },
      update: data => data.getPosts,
      variables() {
        return {
          first: this.first,
        };
      },
      watchLoading(isLoading) {
        if (isLoading) {
          console.log('Loading %c%s', 'color: #fff; background: #222', 'posts');
        }
      },
    },
  },
  data() {
    return {
      first: 1,
      skipPostsQuery: true,
    };
  },
  methods: {
    getData(type) {
      console.log('\n');
      switch (type) {
        case 'posts':
          const css = (this.skipPostsQuery) ? 'color: red; font-weight: bold' : 'color: green; font-weight: bold';
          console.log('skipPostsQuery is %c%s', css, this.skipPostsQuery);
          console.log('Setting skipPostsQuery to %c%s', 'color: green; font-weight: bold', 'false');

          this.skipPostsQuery = false;
          break;
        default:
          break;
      }
    },
    getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    },
  },
};
