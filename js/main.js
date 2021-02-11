/* global data */
/* exported data */
var $photoUrl = document.querySelector('#photoUrl');
var $form = document.querySelector('form');
var $imgHolder = document.querySelector('.image');
var $entriesList = document.querySelector('.entries-list');
var $navEntries = document.querySelector('.nav-entries');
var $entryForm = document.querySelector('.entry-form');
var $entries = document.querySelector('.entries');
var $newEntryBtn = document.querySelector('.new-entry-btn');

$photoUrl.addEventListener('input', function (event) {
  $imgHolder.setAttribute('src', event.target.value);
});

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  var input = {
    image: event.target.photoUrl.value,
    title: event.target.title.value,
    notes: event.target.notes.value
  };
  input.entryId = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(input);
  $imgHolder.setAttribute('src', 'images/placeholder-image-square.jpg');
  $form.reset();
});

function createEntry(entry) {
  var $li = document.createElement('li');

  var $row = document.createElement('div');
  $row.setAttribute('class', 'row');
  $li.appendChild($row);

  var $columnHalfLeft = document.createElement('div');
  $columnHalfLeft.setAttribute('class', 'column-half');
  $row.append($columnHalfLeft);

  var $entryImage = document.createElement('img');
  $entryImage.setAttribute('src', entry.image);
  $columnHalfLeft.appendChild($entryImage);

  var $columnHalfRight = document.createElement('div');
  $columnHalfRight.setAttribute('class', 'column-half');
  $row.append($columnHalfRight);

  var $entryTitle = document.createElement('h2');
  $entryTitle.textContent = entry.title;
  var $entryNotes = document.createElement('p');
  $entryNotes.textContent = entry.notes;
  $columnHalfRight.appendChild($entryTitle);
  $columnHalfRight.appendChild($entryNotes);

  return $li;
}

window.addEventListener('DOMContentLoaded', function (event) {
  for (var i = 0; i < data.entries.length; i++) {
    var entry = createEntry(data.entries[i]);
    $entriesList.appendChild(entry);
  }
});

$navEntries.addEventListener('click', function (event) {
  $entryForm.className = 'entry-form hidden';
  $entries.className = 'entries display';
});

$newEntryBtn.addEventListener('click', function (event) {
  $entryForm.className = 'entry-form display';
  $entries.className = 'entries hidden';
});
