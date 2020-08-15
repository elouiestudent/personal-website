export default function toLinkIcon (icon) {
    switch (icon) {
        case "github":
            return "lni lni-github";
        case "video":
            return "lni lni-youtube"; 
        case "presentation": 
            return "lni lni-display";
        case "link":
            return "lni lni-link"
    }
}