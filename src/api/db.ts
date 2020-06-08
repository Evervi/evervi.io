import { STACK_ICONS } from "./utils";

export interface IProject {
    readonly type: "front-end" | "back-end" | "woocommerce"; // Typ projektu, używaj mądrze.
    readonly short: string; // Unikatowy skrót projektu. np. this_is_my_page

    readonly title: string;
    readonly description: string;
    readonly url: string; // Url do podglądu live projektu. Może powinien być opcjonalny?

    readonly media: TMedia[]; // Lista linków do zdjęć.
    
    readonly keywords: string[]; // Lista słów klucz do wyszukiwarki.
    readonly stack: STACK_ICONS[]; // Lista technologii użytych w tworzeniu projektu.
}

// [ "link", "link" ] => [ { url : "https://source.unsplash.com/random/500x600", orientation: "vertical" }, { url: "https://source.unsplash.com/random/600x500", orientation: "horizontal" } ]

type TMedia = {
   url: string;
   orientation: "vertical" | "horizontal";
}

export const PROJECTS = Object.freeze([
   /* {
        title:"abc",
        type:"abc",
        description:"abc",
        url:"abc",
        media:[ { url : "https://source.unsplash.com/random/500x600", orientation: "vertical" }, { url: "https://source.unsplash.com/random/600x500", orientation: "horizontal" } ],
        short:"abc",
        keywords:[
           "abc",
           "abc",
           "abc"
        ],
        stack:[
           "abc",
           "abc"
        ]
     }, */
     {
      title:"JMT Shop",
      type:"woocommerce",
      description:"Shop for JMT Company",
      url:"https://i.imgur.com/JxxhWsX.png",
      media:[ { url : "https://i.imgur.com/JxxhWsX.png", orientation: "horizontal" }, { url: "https://source.unsplash.com/random/600x500", orientation: "horizontal" } ],
      short:"jmt-shop",
      keywords:[
         "wordpress",
         "woocommerce",
         "shop"
      ],
      stack:[
         "wordpress",
         "woocommerce"
      ]
   },

    {
       title:"Moonshine Shop",
       type:"woocommerce",
       description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec augue eget neque tincidunt ornare. Nullam porttitor odio et quam pulvinar, ac volutpat ipsum scelerisque. Aenean ac porttitor mauris. Duis quis erat non nulla gravida consectetur eu ut felis. Proin laoreet, sapien sit amet accumsan laoreet, metus metus faucibus ligula, quis scelerisque lectus libero ut odio. Etiam fringilla ante ut libero dictum, et placerat ipsum lobortis. Vestibulum tincidunt consectetur eros at egestas. Etiam et sollicitudin tellus. Nunc imperdiet interdum leo, a volutpat nulla pharetra dapibus. Nullam consectetur turpis vitae enim finibus egestas. Maecenas sit amet elit vitae lectus viverra placerat. Pellentesque consectetur est non risus efficitur volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla sagittis dui in dui facilisis, non lobortis libero tristique. Nullam ac pretium est, et hendrerit sapien.",
       url:"https://i.imgur.com/JxxhWsX.png",
       media:[ { url : "https://source.unsplash.com/random/400x500", orientation: "horizontal" }, { url: "https://source.unsplash.com/random/600x500", orientation: "horizontal" } ],
       short:"moonshine_shop",
       keywords:[
          "moonshine",
          "shop",
          "woocommerce"
       ],
       stack:[
          "wordpress",
          "react"
       ]
    },
    {
        "title":"CoolShop",
        "type":"woocommerce",
        "description":"That's an online store that I made for CoolCompany",
        "url":"https://moonshine.shop/",
        "media": [ { url: "https://i.imgur.com/JxxhWsX.png", orientation: "horizontal" }, { url : "https://source.unsplash.com/random/500x600", orientation: "vertical" }, ],
        "short":"moonshine-shop",
        "keywords":[
           "moonshine",
           "shop",
           "woocommerce"
        ],
        "stack":[
           "wordpress",
           "react"
        ]
     },

     {
        "title":"Moonshine Shop 2",
        "type":"shop2",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit..222.....",
        "url":"https://moonshine.shop/",
        "media":[ { url : "https://i.imgur.com/JxxhWsX.png", orientation: "horizontal" }, { url: "https://source.unsplash.com/random/600x500", orientation: "horizontal" } ],
        "short":"moonshine-shop",
        "keywords":[
           "moonshine",
           "shop",
           "woocommerce"
        ],
        "stack":[
           "wordpress",
           "react"
        ]
     },

     {
      "title":"Moonshine Shop 2",
      "type":"shop2",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit..222.....",
      "url":"https://moonshine.shop/",
      "media":[ { url : "https://source.unsplash.com/pGvuCWRhZkA/500x1000", orientation: "vertical" }, { url: "https://source.unsplash.com/random/600x500", orientation: "horizontal" } ],
      "short":"moonshine-shop",
      "keywords":[
         "moonshine",
         "shop",
         "woocommerce"
      ],
      "stack":[
         "wordpress",
         "react"
      ]
   },

   {
      "title":"Moonshine Shop 2",
      "type":"shop2",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit..222.....",
      "url":"https://moonshine.shop/",
      "media":[ { url : "https://source.unsplash.com/random/500x600", orientation: "vertical" }, { url: "https://source.unsplash.com/random/600x500", orientation: "horizontal" } ],
      "short":"moonshine-shop",
      "keywords":[
         "moonshine",
         "shop",
         "woocommerce"
      ],
      "stack":[
         "wordpress",
         "react"
      ]
   },

   {
      "title":"Moonshine Shop 2",
      "type":"shop2",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit..222.....",
      "url":"https://moonshine.shop/",
      "media":[ { url : "https://source.unsplash.com/random/500x600", orientation: "vertical" }, { url: "https://source.unsplash.com/random/600x500", orientation: "horizontal" } ],
      "short":"moonshine-shop",
      "keywords":[
         "dupa"
      ],
      "stack":[
         "wordpress",
         "react"
      ]
   }
 ]) as IProject[];