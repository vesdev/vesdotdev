import { marked } from "marked";
import markedBidi from "marked-bidi";

marked.use(markedBidi());

export interface Project {
    title: string;
    description?: string;
    url: string;
}

// 
export function projectGithub(
    title: string,
    path: string
): Project {

    let result: Project = { title, description: undefined, url: "https://github.com/" + path };
    let response = fetch("https://raw.githubusercontent.com/" + path + "/master/README.md").then((res) => {
        res.text().then((text) => {
            result.description = marked.parse(text,
                {
                    gfm: true,
                    breaks: true,
                });
        })
    });

    return result;
}