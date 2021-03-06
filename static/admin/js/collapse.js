/*global gettext*/
;(function ($) {
  'use strict'
  $(document).ready(function () {
    $('fieldset.collapse').each(function (i, elem) {
      if ($(elem).find('div.errors').length === 0) {
        $(elem)
          .addClass('collapsed')
          .find('h2')
          .first()
          .append(
            ' (<a id="fieldsetcollapser' +
              i +
              '" class="collapse-toggle" href="#">' +
              gettext('Show') +
              '</a>)'
          )
      }
    })
    $('fieldset.collapse a.collapse-toggle').click(function (ev) {
      if ($(this).closest('fieldset').hasClass('collapsed')) {
        $(this)
          .text(gettext('Hide'))
          .closest('fieldset')
          .removeClass('collapsed')
          .trigger('show.fieldset', [$(this).attr('id')])
      } else {
        $(this)
          .text(gettext('Show'))
          .closest('fieldset')
          .addClass('collapsed')
          .trigger('hide.fieldset', [$(this).attr('id')])
      }
      return false
    })
  })
})(django.jQuery)
