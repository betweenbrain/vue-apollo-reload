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
        console.log(`Categories loading ${isLoading}`);
      },
    },
    GetPosts: {
      error(err) {
        console.log(err);
      },
      query: GetPosts,
      result(data) {
        console.log(`Got ${data.data.posts.edges.length} post(s)`);
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
        console.log(`Posts loading ${isLoading}`);
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
          this.skipCategoriesQuery = false;
          break;
        case 'posts':
          this.skipPostsQuery = false;
          break;
        default:
          break;
      }
    },
  },
};
