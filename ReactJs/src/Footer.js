import React from 'react';

function Footer() {
  return (
    <footer className="bg-info py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; 2023 This is my first ReactJS Activity</p>
          </div>
          <div className="col-md-6">
            <ul className="list-inline text-md-end">
              <li className="list-inline-item"><a href="#">Home</a></li>
              <li className="list-inline-item"><a href="#">About</a></li>
              <li className="list-inline-item"><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
