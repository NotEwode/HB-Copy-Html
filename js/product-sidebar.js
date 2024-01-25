document.getElementById('degerlendir').addEventListener('click', function() {
  let commentSide = document.getElementById('comment-side');

  commentSide.style.display = 'flex';
});
document.querySelector('.comment-sidebar-close-button').addEventListener('click', function() {
  let commentSide = document.getElementById('comment-side');

  commentSide.style.display = 'none';
});