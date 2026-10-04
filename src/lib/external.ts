/** Open off-site links in a new tab; leave anchors and local files alone. */
export function externalProps(href: string) {
  return /^https?:\/\//.test(href)
    ? ({ target: "_blank", rel: "noopener noreferrer" } as const)
    : {};
}
