export default {
  id: "simple-dub",
  name: "Simple Anime Dub",

  async search(query) {
    return [
      {
        title: query + " (Demo Result)",
        magnet: "",
        size: "N/A",
        seeders: 0
      }
    ];
  }
};
