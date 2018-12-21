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
        console.log('Got results, setting skipCategoriesQuery to true');
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
          console.log('Loading categories');
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
        console.log('Got results, setting skipPostsQuery to true');
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
          console.log('Loading posts');
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
      switch (type) {
        case 'categories':
          console.log('skipCategoriesQuery is ', this.skipCategoriesQuery);
          console.log('Setting skipCategoriesQuery to false in getData()');
          this.skipCategoriesQuery = false;
          // this.$apollo.queries.GetCategories.refetch();
          break;
        case 'posts':
          console.log('skipPostsQuery is ', this.skipPostsQuery);
          console.log('Setting skipPostsQuery to false in getData()');
          this.skipPostsQuery = false;
          // this.$apollo.queries.GetPosts.refetch();
          break;
        default:
          break;
      }
    },
  },
};
