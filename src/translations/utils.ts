export type TLanguage = "pl_PL" | "en_US";

export const LANGUAGES = Object.freeze([ "pl_PL", "en_US" ]) as readonly TLanguage[];
export const LANGUAGES_MAP: { [key in TLanguage]: string } = 
                Object.freeze({
                    pl_PL: "Polski",
                    en_US: "English"
                });