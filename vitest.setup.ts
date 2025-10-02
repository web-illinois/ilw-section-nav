if (typeof document !== "undefined") {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
        "https://dev.toolkit.illinois.edu/ilw-global/latest/ilw-global.css";
    document.head.appendChild(link);
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://cdn.toolkit.illinois.edu/ilw-icon/1.1.0/ilw-icon.js";
    document.head.appendChild(script);
    const linkIcon = document.createElement("link");
    linkIcon.rel = "stylesheet";
    linkIcon.href =
        "https://cdn.toolkit.illinois.edu/ilw-icon/1.1.0/ilw-icon.css";
    document.head.appendChild(linkIcon);
}
