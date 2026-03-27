export default {
  async test() {
    try {
      const res = await fetch("https://nekobt.to/api/v1/search?query=naruto");
      return res.ok;
    } catch {
      return false;
    }
  },

  async single(query) {
    const url = `https://nekobt.to/api/v1/search?query=${encodeURIComponent(query.title + " dub")}`;
    const res = await fetch(url);
    const data = await res.json();

    return data.results.slice(0, 20).map(item => ({
      title: item.name,
      magnet: item.magnet,
      size: item.size,
      seeders: item.seeders
    }));
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
