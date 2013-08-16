jQuery.fn.appendAt = function (index, content, replace) {
    this.each(function (i, item) {
        var $content = $(item).children().eq(index);
        if (index === 0) {
            $(item).prepend($(content));
        } else {
            $(content).insertAfter($(item).children().eq(index - 1));
        }
        
        if(replace && !!$content) {
            $content.remove();
        }
    });
    return this;
};

jQuery.fn.appendAtRandom = function (content) {
    this.each(function (i, item) {
        var max = $(item).children().length,
            pos = Math.floor(Math.random() * (max + 1));
        $(item).appendAt(pos, content);
    });
    return this;
};