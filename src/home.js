{/* 
<div id="main">
<p class="info">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor nunc eget fringilla ullamcorper. Sed consequat, arcu dapibus sagittis dignissim, lectus purus blandit mi, sed volutpat lorem nibh eget dui. Curabitur sed ultricies nunc, nec ullamcorper nunc. Nullam mattis nunc a pulvinar pharetra. Nam semper sem nisi, at feugiat nulla sollicitudin vel. Proin pharetra purus id lobortis suscipit. Etiam ut rhoncus erat. Quisque semper nisl sed consectetur lobortis.
  Aliquam molestie nunc risus, sagittis vulputate felis pulvinar nec. Maecenas blandit a sapien eget molestie. Curabitur tristique, odio sed interdum condimentum, mi nunc interdum mauris, sed posuere dui velit imperdiet diam. Sed massa libero, sodales id lacinia vel, posuere ut odio. Donec vulputate vehicula velit, quis tempor nisl gravida in. Nunc mattis, leo vitae fringilla aliquet, urna sapien posuere velit, vel imperdiet ante ligula vel nibh. Curabitur gravida vitae lectus a venenatis. Nullam condimentum varius urna, sit amet vulputate erat viverra et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus orci massa, eget sagittis elit sollicitudin sit amet. Morbi eleifend scelerisque nulla luctus blandit.
  Suspendisse vehicula posuere varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam mattis magna quis urna viverra vehicula. Sed suscipit sem orci, in vulputate sem hendrerit ut. Integer in tempus nisl. Nullam mattis lectus et massa luctus, in faucibus nibh sollicitudin. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin in tellus vitae diam faucibus dapibus. Nulla et nisi quis purus laoreet consectetur eget eleifend eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce maximus, sem vel posuere sagittis, metus leo iaculis diam, a molestie diam mi quis ex. Donec placerat vehicula arcu condimentum convallis. Praesent varius eget dolor ac vehicula. Morbi a leo purus.
</p>
</div>  */}


export default function makeBody(textArray) {
  body = document.createElement('div');
  body.setAttribute('id', 'main')

  textArray.forEach(element => {
    info = infoFactory(element);
    body.appendChild(info)  
  });

  return body
}

const infoFactory = (text) => {
  info = document.createElement('p');
  info.textContent = text;
  info.classList.add('info');
  return info;
}
