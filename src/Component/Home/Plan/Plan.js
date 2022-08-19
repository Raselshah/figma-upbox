import React from "react";

const Plan = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-12 mt-12">
      <h2 className="text-center text-4xl mb-12">Pick your plan</h2>
      <div className="grid grid-clos-1 md:grid-cols-2 gap-x-72 gap-y-6">
        <div class="card h-72 bg-base-100 shadow-xl border-2 border-gray-300">
          <div class="card-body items-center text-center">
            <h2 class="card-title text-4xl">Monthly</h2>
            <p className="text-3xl">$18/mo</p>
            <div class="card-actions">
              <button class="btn btn-primary  text-white rounded-full">
                FIND YOUR BOX
              </button>
            </div>
          </div>
        </div>

        <div class="card  h-72  bg-base-100 shadow-xl  border-2 border-gray-300">
          <div class="card-body items-center text-center">
            <h2 class="card-title text-4xl">Yearly</h2>
            <p className="text-3xl">$15/mo</p>
            <div class="card-actions">
              <button class="btn btn-primary text-white rounded-full">
                FIND YOUR BOX
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center mt-12">
        Your plan auto-renews at the end of 30 days from the 1st day you
        signed-up.
      </p>
    </div>
  );
};

export default Plan;
