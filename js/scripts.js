// TODOS: 
//  function to disable, enable drop 
//  downs based based on selection
//  
//  function to add rows to advanced search
//  
//  function to make red close button work
//  
//  function to create button tags
//  based on previous selections
//  in advanced search
//  
//  function to remove button tags
//  if clicked on
//  
//  function to remove all tags
//  

// add span to dropdown list
function addSpan(txt, elem) {
  $(txt).prependTo(elem);
}


// function to change span text when dropdown
// li is clicked
$(".dropdown").on ('click', 'li', function(e) {
  e.preventDefault();
  var parentSpan = $(e.delegateTarget).find('span');
  var selectText = $(this).text();

  parentSpan.text(selectText);

  //console.log($(this).attr('id')); // jQuery's .attr() method, same but more verbose
  //console.log($(this).html()); // gets innerHTML of clicked li
  //console.log($(parentSpan).text()); // gets text contents of clicked li
  //console.log(parentSpan.text(selectText)); // get span text from parent
  //addSpan(parentSpan.text(), this);
});

//$(this).addClass('active').siblings().removeClass('active');



// function to add/remove class 
// on grandparent element if 
// checkbox is checked
function ifChecked(el, rowClass, highlight) {
  var $check = $(el),
        $div = $check.closest(rowClass);

  if ($check.prop('checked')) {
    $div.addClass(highlight);
  } else {
    $div.removeClass(highlight);
  }
}

// function to show/hide results footer
// if at least one checkbox is checked
function unlessNoneChecked(ele, removeEl) {
  var $checkedCount = $(ele),
      $div = $(removeEl);

  if ($checkedCount.length === 0) {
    $div.hide();   
  } else {
    $div.show();
  }
}

$('a#dd-check-all').on('click', function(e) {
  e.preventDefault();
  $(".dd-checkboxes__group input:checkbox").prop('checked', $(this).prop("checked"));
});


// checkmark all user results
$("#search-results__checkbox-all").on('change',function () {
  $(".search-results-td input:checkbox").prop('checked', $(this).prop("checked"));
  unlessNoneChecked('.search-results-td input:checkbox:checked', '.search-results__footer');
  ifChecked('.search-results-td input:checkbox', '.search-results__row', 'checked-row');
});

// check for checkbox changes
$(".search-results-td input:checkbox").on('change',function () {
  ifChecked(this, '.search-results__row', 'checked-row');
  unlessNoneChecked('.search-results-td input:checkbox:checked', '.search-results__footer');
});

// inspired from
// http://tympanus.net/Tutorials/CustomDropDownListStyling/index3.html
// function for using ul as dropdowns
$(function() {
  var dd = new DropDown($('.dropdown'));
});

function DropDown(el) {
  this.dd = el;
  this.initEvents();
}
DropDown.prototype = {
  initEvents : function() {
    var obj = this;

    obj.dd.on('click', function(event){
      $(this).toggleClass('active');
      event.stopPropagation();
    }); 
  }
};
