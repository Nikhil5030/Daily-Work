$(() => {
    $('<a href="#top">back to top</a>') .insertAfter('div.chapter p');
     $('<a id="top"></a>') .prependTo('body');
     
    });

    $(() => {
         $('span.footnote').insertBefore('#footer'); });

       

             $(() => {
                  const $notes = $('<ol id="notes"></ol>') .insertBefore('#footer'); $('span.footnote') .each((i, span) => { $(span) .appendTo($notes) .wrap('<li></li>');
                });
             });


             $(() => { $('span.footnote').insertBefore('#footer'); });


             $(() => { const $notes = $('<ol id="notes"></ol>') .insertBefore('#footer'); $('span.footnote') .each((i, span) => { $(span) .appendTo($notes) .wrap('<li></li>'); }); });

             $(() => { const $notes = $('<ol id="notes"></ol>') .insertBefore('#footer');
             $('span.footnote') .each((i, span) => { $(`<sup>${i + 1}</sup>`) .insertBefore(span); $(span) .appendTo($notes) .wrap('<li></li>'); }); });
             $(() => { const $notes = $('<ol id="notes"></ol>') .insertBefore('#footer'); $('span.footnote') .each((i, span) => { $(span) .before(`<sup>${i + 1}</sup>`) .appendTo($notes) .wrap('<li></li>'); }); })
             $(() => { const $notes = $('<ol id="notes"></ol>') .insertBefore('#footer'); $('span.footnote') .each((i, span) => { $(span) .before([ '<sup>', i + 1, '</sup>' ].join('')) .appendTo($notes) .wrap('<li></li>'); }); });
             $(() => { const $notes = $('<ol id="notes"></ol>') .insertBefore('#footer'); $('span.footnote') .each((i, span) => { $(span) .before([ '<a href="#footnote-', i + 1, '" id="context-', i + 1, '" class="context">', '<sup>', i + 1, '</sup></a>' ].join('')) .appendTo($notes) .wrap('<li></li>'); }); });
             $(() => { const $notes = $('<ol id="notes"></ol>') .insertBefore('#footer'); $('span.footnote') .each((i, span) => { $(span) .before([ '<a href="#footnote-', i + 1, '" id="context-', i + 1, '" class="context">', '<sup>', i + 1, '</sup></a>' ].join('')) .appendTo($notes) .append([ '&nbsp;(<a href="#context-', i + 1, '">context</a>)' ].join('')) .wrap('<li></li>'); }); });
           
             $(() => { $('span.pull-quote') .each((i, span) => { $(span)
                .parent() .css('position', 'relative');
             });
            });
            $(() => {
                $('span.pull-quote') .each((i, span) => { $(span) .clone() .addClass('pulled') .prependTo( $(span) .parent() .css('position', 'relative') );
             });
             });
           
            $(() => {
                 $('span.pull-quote') .each((i, span) => { $(span) .clone() .addClass('pulled') .find('span.drop') .html('&hellip;') .end() .prependTo( $(span) .parent() .css('position', 'relative') );
                 });
                 });