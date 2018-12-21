<script>
import DataProvider from '@/mixins/DataProvider';

export default {
  mixins: [DataProvider],
  mounted() {
    this.getData('post', 124562);
  },
  name: 'about',
  render() {
    const post = this.posts[124562];

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
