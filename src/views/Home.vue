<script>
import DataProvider from '@/mixins/DataProvider';

export default {
  data() {
    return {
      first: 2,
    };
  },
  mixins: [DataProvider],
  mounted() {
    this.first = this.getRandomInt(10);
    this.getData('posts');
  },
  name: 'home',
  render() {
    return (
      <div>
        <h1>Home</h1>
      </div>
    );
  },
};
</script>
