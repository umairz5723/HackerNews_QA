"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Article = void 0;
// We'll use this to create objects of Articles as we process each post in processNewPosts.js
// articles are guarenteed a title, but some/all may have either "minutes ago" or "hours ago"
var Article = /** @class */ (function () {
    function Article(title, minutes, hours) {
        this.title = title;
        this.minutes = minutes;
        this.hours = hours;
    }
    return Article;
}());
exports.Article = Article;
