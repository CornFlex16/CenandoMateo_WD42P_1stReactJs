import './Content.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

function Content() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2>My First React JS Activity</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt malesuada enim vel blandit. Maecenas tincidunt sollicitudin mi, ac mattis lorem ultricies et. Suspendisse auctor fringilla odio vitae faucibus. Nam malesuada ipsum et elit tincidunt laoreet. Nullam eu semper mauris. Fusce elementum, nisl sed porttitor ultrices, lectus dolor hendrerit erat, ac congue sapien massa vel lacus. Proin hendrerit est vitae turpis porttitor, a lacinia ex gravida. Nam euismod, nisl at euismod finibus, urna sapien gravida sem, vitae congue massa purus id justo. Integer eget odio non ipsum tincidunt pellentesque id sed elit. Curabitur imperdiet dolor augue, eu facilisis sapien laoreet vel. Aliquam eget interdum eros. Curabitur aliquet lobortis nulla, vitae dictum felis blandit eu.</p>
          <button className="btn btn-primary">Read More</button>
        </div>
        <div className="col-md-6">
        <img src="https://images.pexels.com/photos/6195084/pexels-photo-6195084.jpeg" alt="Paris" width="600" height="300"/> 
        </div>
      </div>
    </div>
  );
}

export default Content;
