
export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Login / Signup</h1>
      <input placeholder="Email" className="mb-4 p-2 rounded bg-gray-800 w-64" />
      <input placeholder="Password" type="password" className="mb-4 p-2 rounded bg-gray-800 w-64" />
      <button className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-700">Continue</button>
    </div>
  );
}
