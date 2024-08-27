# ilw-section-nav

Links: **[ilw-section-nav in Builder](https://builder3.toolkit.illinois.edu/component/ilw-section-nav/index.html)** | 
[Illinois Web Theme](https://webtheme.illinois.edu/) | 
[Toolkit Development](https://github.com/web-illinois/toolkit-management)

## Overview

The section navigation component provides extended navigation links for a section of a website, 
organized in a tree-like stucture. Compared to the main navigation, it provides more levels of 
navigation and more items at a glance, making it easier to browse the contents of a section of 
a website.

The section navigation is meant to be placed in a sidebar next to the main page content. On 
smaller screens, it collapsed to an expanding widget labeled "In This Section".

The following attributes can be used:

- `collapse` - make the menu always collapse regardless of viewport size.
- `open="true"` and `open="false"` are bound to the open/collapsed state of the menu. 
- `label` - the text shown when the menu is collapsed. The default value is
  "Pages In This Section". This is also used as the accessible label of the navigation.
- `no-root` - prevent the first link from being emphasized as the root of the navigation.

### Current page

To denote which link is for the current page, use `aria-current="page"` in the `a` tag, as shown in the
code example below. Appropriate styling will be applied to that link.

### Navigation levels

Each link in the hierarchy can have child links, which are displayed below the parent with
a slight indentation. Avoid using links more than 3 levels deep, as that can make it hard
for the user to distinguish between the different levels.

Child links are added by including a nested `ilw-section-nav` tag with its own list of links, as
shown in the example below.

### Breakpoint for collapsed view

By default, the navigation collapses to a "mobile" view when the width of the viewport is 
less than or equal to `700px`.

CSS does not allow controlling breakpoints with variables. If you need to adjust the size,
you can either use the `collapse` attribute to force it, or copy the `@media (max-width: 700px)`
rule from [`ilw-section-nav.css`](./src/ilw-section-nav.css) to your CSS and adjust it.

### Section Name Link

Typically, the first link in the section navigation is the root page of the section, and by default
it will be styled to indicate that.

## Code Examples

```html
<ilw-section-nav>
    <a href="#">Programs of Study</a>
    <a href="#">Undergraduate Degrees</a>
    <ilw-section-nav>
        <a href="#">Animal Sciences Major</a>
        <ilw-section-nav>
            <a href="#" aria-current="page">Companion Animal Equine Science</a>
            <a href="#">Food Animal Production and Management</a>
            <a href="#">Science, Pre-Veterinary, and Medical</a>
        </ilw-section-nav>
        <a href="#">Computer Science & Animal Science</a>
        <a href="#">Some Third Thing</a>
    </ilw-section-nav>
</ilw-section-nav>
```

## Accessibility Notes

- The `label` attribute is used as the `aria-label` value for the navigation element. It should be
  descriptive of the type of navigation contained. Note that it's optional, the default
  value is "Pages In This Section".
- If the links are based on very long page titles, consider using shortened versions in
  the navigation. Several line breaks in one link can be confusing.
- Try and balance the length and depth of the navigation. A long list of links all on
  the same level is hard to scan, but navigation deeper than 3 levels is also hard to
  use.

## Upgrade Process

When upgrading from the v2 toolkit component, the following changes are needed:

- Rename all `il-section-nav` to `ilw-section-nav`.
- Remove heading tags (`h2`, `h3`, etc.). The first link will be emphasized as the root of
  the navigation.
- Remove the top-level `ul` or `ol` tag that's directly under `ilw-section-nav`.
- Replace all other `ul` or `ol` tags with `ilw-section-nav`.
- Remove all `li` tags.

## External References

- https://www.w3.org/WAI/tutorials/menus/structure/
- https://designsystem.digital.gov/components/side-navigation/
- https://www.nngroup.com/articles/vertical-nav/
- https://www.w3.org/WAI/tutorials/page-structure/labels/
