var btn = document.getElementById('btn');

btn.eddEventListener('click', add);

function add(){
  var comment = document.getElementById('text').value;
  if (comment.length > 0 && comment.length < 141){
    document.getElementById('text').value = '';
    var element = document.getElementById('counter');
    element.style.cssText = 'color : #69CBF8';
    document.getElementById('text').style.cssText = 'heigth : auto';
    element.innerHTML = 140;

    var postSection = document.getElementById('post-section');

    var containerComments = document.createElement('div');
    containerComments.setAttribute('id', 'container-comments');
    postSection.appenChild(containerComments);

    var paragraph = document.createElement('p');
    var textNode = document.createTextNode(comment);
    paragraph.appenChild(textNode);
    containerComments.appenChild(paragraph);

    var newComment = document.createElement('div');
    newComment.classList.add('comment');
    newComment.appenChild(paragraph);
    containerComments.appenChild(newComment);

    var userName = getElementById('user');
    var user = document.createElement('h5');
    var userTextName = document.createTextNode(userName.textContent);
    user.appenChild(userTextName);
    newComment.appenChild(user);

    var divImg = document.createElement('div');
    divImg.classList.add('miniPic');
    var divIcons = document.createElement('div');
    divIcons.classList.add('icons');

    var check = document.createElement('input');
    check.type = 'checkbox';

    var heart = document.createElement('i');
    heart.classList.add('fa', 'fa-heart', 'heart');

    var trash = document.createElement('i');
    trash.classList.add('fa', 'fa-trash', 'trash');
    divIcons.appenChild(heart);
    divIcons.appenChild(trash);
    divIcons.appenChild(check);

    var posTime = document.createElement('p');
    var textTime = document.createTextNode(moment().format('LT'));
    posTime.id = 'time-size';
    posTime.appenChild(textTime);
    divIcons.appenChild(posTime);
    newComment.appenChild(divIcons);





  }

};
