import { GetCategories, GetPosts } from '@/graphql/Queries';

export default {
  apollo: {
    GetCategories: {
      error(err) {
        console.log(err);
      },
      query: GetCategories,
      result(data) {
        console.log(`Got ${data.data.categories.edges.length} categories(s)`);
        console.log('Got results, setting skipCategoriesQuery to %c%s', 'color: red; font-weight: bold', 'true');
        this.skipCategoriesQuery = true;
      },
      skip() {
        return this.skipCategoriesQuery;
      },
      update: data => data.getCategories,
      variables() {
        return {
          first: this.first,
        };
      },
      watchLoading(isLoading) {
        if (isLoading) {
          console.log('Loading %c%s', 'color: #fff; background: #222', 'categories');
        }
      },
    },
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
      skipCategoriesQuery: true,
      skipPostsQuery: true,
    };
  },
  methods: {
    getData(type) {
      let css = '';
      console.log('\n');
      switch (type) {
        case 'categories':
          css = (this.skipCategoriesQuery) ? 'color: red; font-weight: bold' : 'color: green; font-weight: bold';
          console.log('skipCategoriesQuery is %c%s', css, this.skipCategoriesQuery);
          console.log('Setting skipCategoriesQuery to %c%s', 'color: green; font-weight: bold', 'false');
          this.skipCategoriesQuery = false;
          this.$apollo.queries.GetCategories.refetch({
            first: this.getRandomInt(10),
          });
          break;
        case 'posts':
          css = (this.skipPostsQuery) ? 'color: red; font-weight: bold' : 'color: green; font-weight: bold';
          console.log('skipPostsQuery is %c%s', css, this.skipPostsQuery);
          console.log('Setting skipPostsQuery to %c%s', 'color: green; font-weight: bold', 'false');
          this.skipPostsQuery = false;
          this.$apollo.queries.GetPosts.refetch({
            first: this.getRandomInt(10),
          });
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
