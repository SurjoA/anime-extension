export default {
  async test() {
    try {
      const res = await fetch("https://nekobt.to/api/v1/search?query=test");
      const text = await res.text();
      return !text.startsWith("<");
    } catch {
      return false;
    }
  },

  async single(query) {
    // your code here
  },

  async batch() {
    return [];
  },

  async movie() {
    return [];
  },

  async query() {
    return undefined;
  }
};
