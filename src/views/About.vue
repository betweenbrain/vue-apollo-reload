<script>
import DataProvider from '@/mixins/DataProvider';

export default {
  data() {
    return {
      first: 1,
    };
  },
  mixins: [DataProvider],
  mounted() {
    this.first = this.getRandomInt(10);
    this.getData('posts');
  },
  name: 'about',
  render() {
    return (
      <div>
        <h1>About</h1>
      </div>
    );
  },
};
</script>
