export const AD_CLIENT = "ca-pub-6711834888023238";

export type AdKind = "display" | "inArticle" | "multiplex";

/*
  Manual ad unit IDs from AdSense > Ads > By ad unit.
  - display:   "Display ads", responsive
  - inArticle: "In-article ads"
  - multiplex: "Multiplex ads"
  A slot with no ID renders nothing, and a slot Google leaves unfilled
  collapses, so the page never shows an empty box. Auto ads keep running
  alongside these on every blog page.
*/
export const AD_SLOTS: Record<AdKind, string> = {
  display: "9083171062", // Blog - Display (responsive)
  inArticle: "1204681049", // Blog - In-article
  multiplex: "3064557628", // Blog - Multiplex (related)
};
