import { client } from "./client";

export async function getNavigationWithCategories() {
  try {
    const categories = await client.fetch(`
      *[_type == "category"] {
        _id,
        title,
        "slug": title
      }
    `);

    const baseNav = [
      {
        title: "Početna",
        link: "/",
      },
      {
        title: "O nama",
        link: "/o-nama",
        dropdown: [
          {
            title: "Reč osnivača",
            link: "/o-nama/rec-osnivaca",
          },
          {
            title: "Misija",
            link: "/o-nama/misija",
          },
          {
            title: "Drugi o nama",
            link: "/o-nama/drugi-o-nama",
          },
          {
            title: "Franšiza",
            link: "/o-nama/fransiza",
          },
          {
            title: "Prvih 10 godina",
            link: "/o-nama/prvih-10-godina",
          },
        ],
      },
      {
        title: "Osnovni program",
        link: "/program",
        dropdown: [
          {
            title: "Mudre sove",
            link: "/program/mudre-sove",
          },
          {
            title: "Moj dan",
            link: "/program/moj-dana",
          },
          {
            title: "Budi važan - spremi maturu",
            link: "/program/budi-vazan-spremi-maturu",
          },
          {
            title: "Roditelj u trendu",
            link: "/program/roditelj-u-trendu",
          },
        ],
      },
      {
        title: "Dopunski program",
        link: "/program",
        dropdown: [
          {
            title: "Škola matematike",
            link: "/program/dodatni-program/skola-matematike",
          },
          {
            title: "Škola slikanja",
            link: "/program/dodatni-program/skola-slikanja",
          },
          {
            title: "Škola stranih jezika",
            link: "/program/dodatni-program/skola-stranih-jezika",
          },
          {
            title: "Srpski jezik za strance",
            link: "/program/dodatni-program/srpski-jezik-za-strance",
          },
          {
            title: "Čuvanje dece",
            link: "/program/dodatni-program/cuvanje-dece",
          },
          {
            title: "Škola skijanja",
            link: "/program/dodatni-program/skola-skijanja",
          },
          {
            title: "Jezički kamp",
            link: "/program/dodatni-program/jezicki-kamp",
          },
          {
            title: "Montesori program",
            link: "/program/dodatni-program/montesori-program",
          },
        ],
      },
      {
        title: "Blog",
        link: "/blog",
        dropdown: [
          ...categories.map((cat: any) => ({
            title: cat.title,
            link: `/blog/kategorija/${cat.slug.toLowerCase().replace(/\s+/g, "-")}`,
          })),
        ],
      },
      {
        title: "Kontakt",
        link: "/kontakt",
      },
    ];

    return baseNav;
  } catch (error) {
    console.error("Error fetching navigation with categories:", error);

    // Fallback navigation bez kategorija
    return [
      {
        title: "Početna",
        link: "/",
      },
      {
        title: "O nama",
        link: "/o-nama",
        dropdown: [
          {
            title: "Reč osnivača",
            link: "/o-nama/rec-osnivaca",
          },
          {
            title: "Misija",
            link: "/o-nama/misija",
          },
          {
            title: "Drugi o nama",
            link: "/o-nama/drugi-o-nama",
          },
          {
            title: "Franšiza",
            link: "/o-nama/fransiza",
          },
          {
            title: "Prvih 10 godina",
            link: "/o-nama/prvih-10-godina",
          },
        ],
      },
      {
        title: "Osnovni program",
        link: "/program",
        dropdown: [
          {
            title: "Mudre sove",
            link: "/program/mudre-sove",
          },
          {
            title: "Moj dan",
            link: "/program/moj-dana",
          },
          {
            title: "Budi važan - spremi maturu",
            link: "/program/budi-vazan-spremi-maturu",
          },
          {
            title: "Roditelj u trendu",
            link: "/program/roditelj-u-trendu",
          },
        ],
      },
      {
        title: "Dopunski program",
        link: "/program",
        dropdown: [
          {
            title: "Škola matematikeeee",
            link: "/program/dodatni-program/skola-matematike",
          },
          {
            title: "Škola slikanja",
            link: "/program/dodatni-program/skola-slikanja",
          },
          {
            title: "Škola stranih jezika",
            link: "/program/dodatni-program/skola-stranih-jezika",
          },
          {
            title: "Srpski jezik za strance",
            link: "/program/dodatni-program/srpski-jezik-za-strance",
          },
          {
            title: "Čuvanje dece",
            link: "/program/dodatni-program/cuvanje-dece",
          },
          {
            title: "Škola skijanja",
            link: "/program/dodatni-program/skola-skijanja",
          },
          {
            title: "Jezički kamp",
            link: "/program/dodatni-program/jezicki-kamp",
          },
          {
            title: "Montesori program",
            link: "/program/dodatni-program/montesori-program",
          },
        ],
      },
      {
        title: "Blog",
        link: "/blog",
      },
      {
        title: "Kontakt",
        link: "/kontakt",
      },
    ];
  }
}
