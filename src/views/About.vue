<script>
import DataProvider from '@/mixins/DataProvider';

export default {
  mixins: [DataProvider],
  mounted() {
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
