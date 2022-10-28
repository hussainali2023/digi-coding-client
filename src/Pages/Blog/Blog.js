import React from "react";

const Blog = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-2xl font-semibold sm:text-4xl mb-4">
            Interview Questions
          </h2>
          <div className="space-y-4">
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                1. what is cors?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                CORS stands for Cross-Origin Resource Sharing. It allows us to
                relax the security applied to an API. This is done by bypassing
                the Access-Control-Allow-Origin headers, which specify which
                origins can access the API. In other words, CORS is a browser
                security feature that restricts cross-origin HTTP requests with
                other servers and specifies which domains access your resources.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                2. Why are you using firebase? What other options do you have to
                implement authentication?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                Firebase Authentication provides backend services, easy-to-use
                SDKs, and ready-made UI libraries to authenticate users to your
                app. It supports authentication using passwords, phone numbers,
                popular federated identity providers like Google, Facebook and
                Twitter, and more. Firebase Authentication integrates tightly
                with other Firebase services, and it leverages industry
                standards like OAuth 2.0 and OpenID Connect, so it can be easily
                integrated with your custom backend.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                3. How does the private route work?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                The react private route component renders child components
                (children) if the user is logged in. If not logged in the user
                is redirected to the /login page with the return url passed in
                the location state property. The current logged in user
                (authUser) is retrieved from Redux state with a call to the
                useSelector() hook. Redux is used in this example however it is
                not required to implement a Private Route component in React
                Router 6. You could use a different state management library or
                any approach you prefer to get the logged in status of the user.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                4. What is Node? How does Node work?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                Node.js is an open-source backend javascript runtime
                environment. It is a used as backend service where javascript
                works on the server-side of the application. This way javascript
                is used on both frontend and backend. Node.js runs on chrome v8
                engine which converts javascript code into machine code, it is
                highly scalable, lightweight, fast, and data-intensive. Working
                of Node.js: Node.js accepts the request from the clients and
                sends the response, while working with the request node.js
                handles them with a single thread. To operate I/O operations or
                requests node.js use the concept of threads. Thread is a
                sequence of instructions that the server needs to perform. It
                runs parallel on the server to provide the information to
                multiple clients. Node.js is an event loop single-threaded
                language. It can handle concurrent requests with a single thread
                without blocking it for one request.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
