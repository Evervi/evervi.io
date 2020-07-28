import { STACK_ICONS } from "./utils";
import { useLittera } from 'react-littera';
import translations from '../translations/pages';
import { useMemo } from "react";

export interface IProject {
    readonly type: "front-end" | "back-end" | "woocommerce"; // Typ projektu, używaj mądrze.
    readonly short: string; // Unikatowy skrót projektu. np. this_is_my_page

    readonly title: string;
    readonly description: string;
    readonly url: string; // Url do podglądu live projektu. Może powinien być opcjonalny?

    readonly media: TMedia[]; // Lista linków do zdjęć.
    
    readonly keywords: string[]; // Lista słów klucz do wyszukiwarki.
    readonly stack: STACK_ICONS[]; // Lista technologii użytych w tworzeniu projektu.

    readonly demo_url: string; // Odnośnik do demo projektu
}

// [ "link", "link" ] => [ { url : "https://source.unsplash.com/random/500x600", orientation: "vertical" }, { url: "https://source.unsplash.com/random/600x500", orientation: "horizontal" } ]
type TMedia = {
   url: string;
   orientation: "vertical" | "horizontal";
}

export const useProjectsList = () => {
   const translated = useLittera(translations);
   return useMemo(() => 
    [
   
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
              "abc",
           ]
            demo: "https://www.google.com/"
        }, */
        {
         title: `${translated.jmtShopTitle}`,
         type:"woocommerce",
         // description:"Shop for JMT Company",
         description:  `${translated.jmtShopDescription}`,
         url:"https://i.imgur.com/JxxhWsX.png",
         demo_url: "https://google.com",
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
          title:`${translated.OmsTitle}`,
          type:"woocommerce",
          description:`${translated.OmsDescription}`,
          url:"https://i.imgur.com/JxxhWsX.png",
          demo_url: "https://google.com",
          media:[ { url : "https://i.imgur.com/SwVaXRb.png", orientation: "horizontal" }, { url: "https://source.unsplash.com/random/600x500", orientation: "horizontal" } ],
          short:"online-money-site",
          keywords:[
             "moonshine",
             "shop",
             "woocommerce"
          ],
          stack:[
             "wordpress",
          ]
       },
       {
           "title":`${translated.PSTitle}`,
           "type":"woocommerce",
           "description":`${translated.PSDescription}`,
           "url":"https://moonshine.shop/",
           demo_url: "https://google.com",
           "media": [ { url: "https://i.imgur.com/Qj0ofyQ.png", orientation: "horizontal" }, { url : "https://source.unsplash.com/random/500x600", orientation: "vertical" }, ],
           "short":"peggystore",
           "keywords":[
              "moonshine",
              "shop",
              "woocommerce"
           ],
           "stack":[
              "wordpress",
              "woocommerce"
           ]
        },

        {
         "title":`${translated.KreotekaTitle}`,
         "type":"woocommerce",
         "description":`${translated.KreotekaDescription}`,
         "url":"https://moonshine.shop/",
         demo_url: "https://google.com",
         "media": [ { url: "https://i.imgur.com/LUKsWqb.png", orientation: "horizontal" }, { url : "https://source.unsplash.com/random/500x600", orientation: "vertical" }, ],
         "short":"kreoteka",
         "keywords":[
            "moonshine",
            "shop",
            "woocommerce"
         ],
         "stack":[
            "",
         ]
      },
   
        {
           "title":`${translated.JOTMGtitle}`,
           "type":"shop2",
           "description":`${translated.JOTMGdescription}`,
           "url":"https://moonshine.shop/",
           demo_url: "https://google.com",
           "media":[ { url : "https://i.imgur.com/ETHJ2dz.png", orientation: "horizontal" }, { url: "https://source.unsplash.com/random/600x500", orientation: "horizontal" } ],
           "short":"jotmg",
           "keywords":[
              "moonshine",
              "shop",
              "woocommerce"
           ],
           "stack":[
              "",
           ]
        },
   

    ] as IProject[],[translated])

}