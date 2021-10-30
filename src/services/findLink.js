export default function findLink(template) {
    const link = template.match(/http:\/\/[^\s\Z]+/i);
    if (link) {
        const newStr = template.replace(/http:\/\/[^\s\Z]+/i, `<a href="${link}">Link</a>`);
        return newStr;
    } else {
        return false;
    }
    
}