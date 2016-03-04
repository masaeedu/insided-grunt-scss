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

// function to create tag and add data into ta
function createTagAddItem(tag, item) {
  var ele = document.createElement(tag);
  ele.innerHTML = item;
  return ele;
}


// add span to dropdown list
function addSpan(txt, elem) {
  $(txt).prependTo(elem);
}

// create inner dropdown menu
function createDropdownLi(liText) {
  var li = $('<li/>');
  var liLink = $('<a/>')
      .attr('id', 'menu--'+liText)
      .text(liText);
  liLink.appendTo(li);
  return li;
}

// create dropdown ul
function addDropDown(el) {

  var div = $('<div/>')
      .addClass('dropdown', 'gradient-gray-bg');
  var span = $('<span>Choose:</span>');
  var list = $('<ul/>')
      .addClass('dropdown__menu');
  //var testLi = $('<li><a href="#">before</a></li>');
  var testLi = createDropdownLi('before');

  testLi.appendTo(list);
  list.appendTo(div);
  span.appendTo(div);

  div.appendTo(el);
  //console.log(el);
}

// function to decide which 
// dropdown to create
function whichDropdown() {
  
}




// function to change span text when dropdown
// li is clicked
// $(".select-row-wrap").on ('click', 'li', function(e) {
//   e.preventDefault();
//   var li = $(this);
//   var row = $(e.delegateTarget);
//   var span = row.find('span');
//   var liText = li.text();

//   span.text(liText);

//   console.log(row.html());
//   console.log(li);
//   addDropDown(row);

  //console.log($(this).attr('id')); // jQuery's .attr() method, same but more verbose
  //console.log($(this).html()); // gets innerHTML of clicked li
  //console.log($(parentSpan).text()); // gets text contents of clicked li
  //console.log(parentSpan.text(selectText)); // get span text from parent
  //addSpan(parentSpan.text(), this);
// });

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
  var dd = new DropDown($('.advanced-search__select-row'));
});

function DropDown(el) {
  this.dd = el;
  this.initEvents();
  this.liClick();
}
DropDown.prototype = {
  initEvents : function() {
    var obj = this;

    obj.dd.on('click', '.dropdown', function(event){
      $(this).toggleClass('active');
      event.stopPropagation();
    }); 
  },
  liClick: function() {
    // function to change span text when dropdown
    // li is clicked
    var obj = this;

    obj.dd.on ('click', 'li', function(e) {
      e.preventDefault();
      var li = $(this);
      var div = li.parents(':eq(1)');
      var row = li.parents(':eq(3)').find('.select-row-wrap');
      var span = div.find('span');
      var liText = li.text();
      var linkId = li.find('a').attr('id');

      span.text(liText);

      console.log(linkId);
      addDropDown(row);
    });
  },
  // addDropDown: function() {
  //   var obj = this;

  //   var div = $('<div class="dropdown gradient-gray-bg"></div>');
  //   var span = $('<span>Choose:</span>');
  //   var list = $('<ul class="dropdown__menu"></ul>');
  //   var testLi = $('<li><a href="#">before</a></li>');

  //   testLi.appendTo(list);
  //   list.appendTo(div);
  //   span.appendTo(div);

  //   div.appendTo(obj.dd.parent());
  //   console.log(obj.dd.parent());
  // }
};


