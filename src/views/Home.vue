<script>
import DataProvider from '@/mixins/DataProvider';

export default {
  mixins: [DataProvider],
  mounted() {
    this.getData('post', 126750);
  },
  name: 'home',
  render() {
    const post = this.posts[126750];

    return (
      post ? (
      <div>
        <section>
          <article>
            <h2>{post.title}</h2>
            <caption>By {post.author.name}</caption>
            <p domPropsInnerHTML={post.content} />
          </article>
        </section>
      </div>
      ) : null
    );
  },
};
</script>
