import { RiMailLine, RiGithubFill } from "react-icons/ri";

function About() {
  return (
    <section className="bg-lightstone">
      <div className="mx-auto max-w-6xl px-2.5 py-5 sm:px-5">
        <h2 className="font-bold text-2xl text-center mb-6">About</h2>
        <div>
          <h3 className="font-medium text-2xl mb-2.5">Firstname Lastname</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            finibus bibendum ligula eget aliquam. Sed posuere faucibus nulla.
            Proin viverra.
          </p>
        </div>
        <div className="mt-6">
          <h3 className="font-medium text-xl mb-2.5">Skills</h3>
          <ul className="flex flex-wrap -mb-1">
            <li className="mr-7 mb-1 before:content-['\2022'] before:text-sky-400 before:mr-2">
              HTML
            </li>
            <li className="mr-7 mb-1 before:content-['\2022'] before:text-sky-400 before:mr-2">
              CSS
            </li>
            <li className="mr-7 mb-1 before:content-['\2022'] before:text-sky-400 before:mr-2">
              JavaScript
            </li>
            <li className="mr-7 mb-1 before:content-['\2022'] before:text-sky-400 before:mr-2">
              ReactJS
            </li>
            <li className="mr-7 mb-1 before:content-['\2022'] before:text-sky-400 before:mr-2">
              NextJS
            </li>
          </ul>
        </div>
        <div className="mt-6">
          <h3 className="font-medium text-xl mb-3">Contacts</h3>
          <div className="flex space-x-5">
            <a
              className="flex items-center justify-center h-11 rounded-xl bg-blue-600 hover:bg-blue-500 transition px-5"
              href="mailto:email@mail"
            >
              <RiMailLine className="text-2xl mr-2" />
              Email
            </a>
            <a
              className="flex items-center justify-center h-11 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition px-5"
              href="https://github.com"
            >
              <RiGithubFill className="text-[1.625rem] mr-2" />
              Github
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
