"use client";
function page() {
  return (
    <main className="w-full bg-white flex justify-center items-center">
      <div
        className="radial-progress animate-spin bg-primary text-primary-content border-primary border-4"
        style={{ "--value": 70 }}
        role="progressbar"
      ></div>
    </main>
  );
}

export default page;
