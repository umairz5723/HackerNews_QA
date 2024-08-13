// We'll use this to create objects of Articles as we process each post in processNewPosts.js
    // articles are guarenteed a title, but some/all may have either "minutes ago" or "hours ago"
export class Article{
    title: string;
    minutes?: number;
    hours?: number;

    constructor(title: string, minutes?: number, hours?: number) 
    {
        this.title = title;
        this.minutes = minutes;
        this.hours = hours;
    }

}