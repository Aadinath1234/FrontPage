import React from "react";

function Qna() {
  return (
    <div >
      <div className="p-20 max-sm:p-10 ">
        <p className="font-sans font-semibold text-3xl justify-center items-center max-sm:w-80 ">
          Got Questions ? We've
        </p>
        <p className="font-sans font-semibold text-3xl  justify-center items-center max-sm:px-1 px-20">Got Answers !</p>
      </div>

      <div className="justify-center   items-center max-sm:px-12 px-40">
        <div className="collapse collapse-arrow max-sm:w-80 bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title font-semibold">
            How do I create an account?
          </div>
          <div className="collapse-content text-sm">
            Click the "Sign Up" button in the top right corner and follow the
            registration process.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 max-sm:w-80 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            I forgot my password. What should I do?
          </div>
          <div className="collapse-content text-sm">
            Click on "Forgot Password" on the login page and follow the
            instructions sent to your email.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 max-sm:w-80 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            How do I update my profile information?
          </div>
          <div className="collapse-content text-sm">
            Go to "My Account" settings and select "Edit Profile" to make
            changes.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Qna;
