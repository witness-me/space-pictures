export default {
  data() {
    return {};
  },
  computed: {
    today() {
      let date = new Date();
      return date.toISOString();
    },

    get1MonthAgo() {
      let date = new Date();
      date.setMonth(date.getMonth() - 1);
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    },
  },
};
