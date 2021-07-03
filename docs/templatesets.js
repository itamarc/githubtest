// repository_languages
// [{"color":"#b07219","size":21140,"name":"Java"},
// {"color":"#427819","size":145,"name":"Makefile"},
// {"color":"#e34c26","size":2333,"name":"HTML"}]
// repository_languages_totalSize=23618
function languagesDiv(languages, langTotalSize) {
    if (languages.length != 0) {
        let langDiv = ""
        if (languages.length > 1) {
            langDiv += "This repository have code written in these languages:<br><ul>\n"
        } else {
            langDiv += "This repository have code written in:<br><ul>\n"
        }
        for (const lang in languages) {
            langDiv += "<li>" + lang.name
            if (languages.length > 1) {
                langDiv += " (" + Math.round(lang.size/langTotalSize*1000)/10 + "%)"
            }
        }
        langDiv += "\n</ul>"
        document.getElementById("languages").innerHTML = langDiv
    }
}

// repository_repositoryTopics
// [{"name":"java","url":"https://github.com/topics/java"},
// {"name":"library","url":"https://github.com/topics/library"},
// {"name":"templates","url":"https://github.com/topics/templates"},
// {"name":"text","url":"https://github.com/topics/text"}]
function topicsDiv(topics) {
    if (topics.length != 0) {
        let topicsDiv = ""
        if (topics.length > 1) {
            topicsDiv += "Topics:<br><ul>\n"
        } else {
            topicsDiv += "Topic:<br><ul>\n"
        }
        for (const topic in topics) {
            topicsDiv += '<li><a href="' + topic.url + '">' + topic.name + '</a>'
        }
        topicsDiv += "\n</ul>"
        document.getElementById("topics").innerHTML = topicsDiv
    }
}
