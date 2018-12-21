import { GetPostById } from '@/graphql/Queries';

export default {
  apollo: {
    GetPostById: {
      error(err) {
        console.log(err);
      },
      query: GetPostById,
      result(data) {
        console.log('Got post %c%s', 'font-style: italic', data.data.postBy.title);

        this.$set(this.posts, data.data.postBy.postId, data.data.postBy);

        console.log(
          'Got results, setting skipQuery to %c%s',
          'color: red; font-weight: bold',
          'true',
        );

        this.skipQuery = true;
      },
      skip() {
        return this.skipQuery;
      },
      update: data => data.getPosts,
      variables() {
        return {
          id: this.postId,
        };
      },
      watchLoading(isLoading) {
        if (isLoading) {
          console.log('Loading %c%s', 'color: #fff; background: #222', 'post');
        }
      },
    },
  },
  data() {
    return {
      postId: null,
      posts: {},
      skipQuery: true,
    };
  },
  methods: {
    getData(type, value) {
      console.log('\n');
      switch (type) {
        case 'post':
          const css = this.skipQuery
            ? 'color: red; font-weight: bold'
            : 'color: green; font-weight: bold';
          console.log('skipQuery is %c%s', css, this.skipQuery);
          console.log('Setting skipQuery to %c%s', 'color: green; font-weight: bold', 'false');

          this.postId = value;
          this.skipQuery = false;
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
