import React from 'react'

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
export default function Home() {
  return (
    <div>
        <div className="container">
            <h1 className="display-1">Notes</h1>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="card-link">Delete</a>
                    <a href="#" class="card-link">Archive</a>
                    <a href="#" class="card-link">Edit</a>
                </div>
                </div>
        </div>
    </div>
  )
}
