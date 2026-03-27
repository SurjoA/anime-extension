export default {
  id: "anime-dub-multi",
  name: "Anime Dub Multi Source",

  async search(query) {
    const url = `https://nyaa.si/?page=rss&q=${encodeURIComponent(query + " dub")}&c=1_2`;

    const res = await fetch(url);
    const text = await res.text();

    const parser = new DOMParser();
    const xml = parser.parseFromString(text, "text/xml");

    const items = xml.querySelectorAll("item");
    const results = [];

    items.forEach((item, i) => {
      if (i >= 20) return;

      const title = item.querySelector("title")?.textContent;
      const magnet = item.querySelector("link")?.textContent;

      results.push({
        title,
        magnet,
        size: "Unknown",
        seeders: 0
      });
    });

    return results;
  }
};        ) return;

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
