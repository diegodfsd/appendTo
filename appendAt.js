;(function ($)
{
  "use strict";

  $.fn.appendAt = function (index, content, replace) {

    this.each(function (i, item) {
      var $content = $(item).children().eq(index),
          $previous = $(item).children().eq(index - 1);

      if (index === 0) {
        $(item).prepend($(content));
      }
      else if ($previous[0]) {
        $(content).insertAfter($previous);
      }
      else {
        $(content).insertAfter($(item).children().last());
      }

      if(replace && !!$content) {
        $content.remove();
      }
    });
    
    return this;
  };

  $.fn.appendAtRandom = function (content) {
    this.each(function (i, item) {
      var max = $(item).children().length,
          pos = Math.floor(Math.random() * (max + 1));

      $(item).appendAt(pos, content);

    });

    return this;
  };
  
}) (jQuery);