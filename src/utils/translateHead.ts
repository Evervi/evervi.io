export const translateHead = (language: "en_US" | "pl_PL", page: "home" | "portfolio" |"contact" = "home") => {
    document.title = `Evervi.io - ${pageTrans[page][language]}`
    switch (language) {
      case "en_US":
        //document.title = "Evervi.io - Homepage";
        setMetaTag("description", "This is my description.");
        break;
      case "pl_PL":
        //document.title = "Evervi.io - Strona główna";
        setMetaTag("description", "To jest mój opis. Lepszy niż twój.");
        break;
    }
  };
  
  const setMetaTag = (selector_name: string, value: string) => {
    document
      ?.querySelector(`meta[name="${selector_name}"]`)
      ?.setAttribute("content", value);
  }

  
  const pageTrans = {
    home: {
        pl_PL: "Strona główna",
        en_US: "Homepage"
    },
    contact: {
        pl_PL: "Kontakt",
        en_US: "Contact",
    },
    portfolio: {
        pl_PL: "Portfolio",
        en_US: "Portfolio"
    }




  }

