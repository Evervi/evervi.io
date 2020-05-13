export interface IProject {
    readonly type: "front-end" | "back-end" | "woocommerce"; // Typ projektu, używaj mądrze.
    readonly short: string; // Unikatowy skrót projektu. np. this_is_my_page

    readonly title: string;
    readonly description: string;
    readonly url: string; // Url do podglądu live projektu. Może powinien być opcjonalny?

    readonly media: string[]; // Lista linków do zdjęć.
    readonly front_url: string; // Główne zdjęcie prezentujące projekt. Może nie będzie potrzebne jeśli pierwszy element media będzie używany?
    
    readonly keywords: string[]; // Lista słów klucz do wyszukiwarki.
    readonly stack: string[]; // Lista technologii użytych w tworzeniu projektu.
}

export const PROJECTS = Object.freeze([
   /* {
        title:"abc",
        type:"abc",
        description:"abc",
        url:"abc",
        media:[
           "abc",
           "abc"
        ],
        front_url:"abc",
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
       title:"Moonshine Shop",
       type:"woocommerce",
       description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec augue eget neque tincidunt ornare. Nullam porttitor odio et quam pulvinar, ac volutpat ipsum scelerisque. Aenean ac porttitor mauris. Duis quis erat non nulla gravida consectetur eu ut felis. Proin laoreet, sapien sit amet accumsan laoreet, metus metus faucibus ligula, quis scelerisque lectus libero ut odio. Etiam fringilla ante ut libero dictum, et placerat ipsum lobortis. Vestibulum tincidunt consectetur eros at egestas. Etiam et sollicitudin tellus. Nunc imperdiet interdum leo, a volutpat nulla pharetra dapibus. Nullam consectetur turpis vitae enim finibus egestas. Maecenas sit amet elit vitae lectus viverra placerat. Pellentesque consectetur est non risus efficitur volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla sagittis dui in dui facilisis, non lobortis libero tristique. Nullam ac pretium est, et hendrerit sapien.",
       url:"https://moonshine.shop/",
       media:[
          "https://source.unsplash.com/random/",
          "https://source.unsplash.com/random/"
       ],
       front_url:"https://source.unsplash.com/random/",
       short:"moonshine_shop",
       keywords:[
          "moonshine",
          "shop",
          "woocommerce"
       ],
       stack:[
          "Wordpress",
          "Frontity"
       ]
    },
    {
        "title":"Moonshine Shop 2",
        "type":"woocommerce",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit..222.....",
        "url":"https://moonshine.shop/",
        "media":[
           "https://source.unsplash.com/random/",
           "https://source.unsplash.com/random/"
        ],
        "front_url":"https://source.unsplash.com/random/",
        "short":"moonshine-shop",
        "keywords":[
           "moonshine",
           "shop",
           "woocommerce"
        ],
        "stack":[
           "Wordpress",
           "Frontity"
        ]
     },

     {
        "title":"Moonshine Shop 2",
        "type":"shop2",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit..222.....",
        "url":"https://moonshine.shop/",
        "media":[
           "https://source.unsplash.com/random/",
           "https://source.unsplash.com/random/"
        ],
        "front_url":"https://source.unsplash.com/random/",
        "short":"moonshine-shop",
        "keywords":[
           "moonshine",
           "shop",
           "woocommerce"
        ],
        "stack":[
           "Wordpress",
           "Frontity"
        ]
     }
 ]) as IProject[];