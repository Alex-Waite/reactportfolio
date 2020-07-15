import React from "react"

function ContactForm () {
    return (       
        <div class="container contact-form">
            <div class="row">
                <div class="col-md-6 col-sm-12">
                    <h1>You can contact me here!</h1>
                    <h6>Adress: 2 Hughes Street, Unley, SA, 5061</h6>
                    <h6 class="smaller">Email: Alexanderconorwaite@gmail.com</h6>
                    <h6>Phone: 0408806318</h6>
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="text" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label>Message</label>
                        <textarea class="form-control" rows="5"></textarea>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary btn-block">Send</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ContactForm