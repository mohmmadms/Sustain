export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      <div className="text-center bg-black">
      <h1 className="text-4xl text-white font-bold mb-10 mt-10">Coming Soon!</h1>
      </div>
      <div className="text-center p-6 flex-grow flex items-center justify-center">
        <img
          src="ss.jpg"
          alt="Profile Picture"
          width="500"
          height="600"

        />
      </div>

      {/* Footer Section */}
      <footer className="bg-black text-white py-20">
        <div className="text-center">
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-10 h-10"
              >
                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.4.5.6.2 1 .5 1.5 1 .5.5.8.9 1 1.5.2.5.4 1.2.5 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.4-.2.6-.5 1-1 1.5-.5.5-.9.8-1.5 1-.5.2-1.2.4-2.4.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.4-.5-.6-.2-1-.5-1.5-1-.5-.5-.8-.9-1-1.5-.2-.5-.4-1.2-.5-2.4-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.4.2-.6.5-1 1-1.5.5-.5.9-.8 1.5-1 .5-.2 1.2-.4 2.4-.5 1.3-.1 1.7-.1 4.9-.1zm0-2.2C8.7 0 8.2 0 7 0 5.8 0 5.1.1 4.5.3c-.7.2-1.3.5-1.9 1-.6.6-1 .1-1.2 1.6C1.1 4.6 1 5.3 1 7.5c0 2.2 0 2.7.1 4.9s.1 2.7.2 4.9c.1 1.2.3 1.9.5 2.4.2.6.5 1 1 1.5.5.5.9.8 1.5 1 .5.2 1.2.4 2.4.5 1.3.1 1.7.1 4.9.1s3.6 0 4.9-.1c1.2-.1 1.9-.3 2.4-.5.6-.2 1-.5 1.5-1 .5-.5.8-.9 1-1.5.2-.5.4-1.2.5-2.4.1-1.3.1-1.7.1-4.9s0-3.6-.1-4.9c-.1-1.2-.3-1.9-.5-2.4-.2-.6-.5-1-1-1.5-.5-.5-.9-.8-1.5-1-.5-.2-1.2-.4-2.4-.5C15.6.1 15.2 0 12 0zm0 5.7a6.3 6.3 0 100 12.6 6.3 6.3 0 000-12.6zm0 10.4a4.1 4.1 0 110-8.3 4.1 4.1 0 010 8.3zm6.5-10.4a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
            </a>
            {/* Add more social links if needed */}
          </div>
        </div>
      </footer>
    </div>
  );
}
