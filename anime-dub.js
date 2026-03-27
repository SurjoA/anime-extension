// @grant fetch
export default {
  id: "anime-dub-multi",
  name: "Anime Dub Multi Source",

  async search(query, options) {
    const results = [];

    try {
      const url =
        "https://nyaa.si/?f=0&c=1_2&s=seeders&o=desc&q=" +
        encodeURIComponent(query + " dub");

      const res = await fetch(url);
      const text = await res.text();

      const doc = new DOMParser().parseFromString(text, "text/html");
      const rows = doc.querySelectorAll("table tbody tr");

      rows.forEach((row, index) => {
        if (index >= 30) return;

        const titleEl = row.querySelector("td:nth-child(2) a:last-child");
        const magnetEl = row.querySelector("a[href^='magnet:']");
        const sizeEl = row.querySelector("td:nth-child(4)");
        const seedersEl = row.querySelector("td:nth-child(6)");

        if (!titleEl || !magnetEl) return;

        const title = titleEl.textContent;
        const lower = title.toLowerCase();

        if (
          !lower.includes("dub") &&
          !lower.includes("dual audio") &&
          !lower.includes("english")
        ) return;

        results.push({
          title,
          magnet: magnetEl.href,
          size: sizeEl?.textContent || "Unknown",
          seeders: parseInt(seedersEl?.textContent || "0"),
        });
      });
    } catch (e) {}

    return results;
  }
};
