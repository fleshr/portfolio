import Image from "next/image";
import { RiLink, RiGithubFill } from "react-icons/ri";

function Work() {
  return (
    <article className="bg-lightstone rounded-2xl overflow-hidden">
      <div className="w-full aspect-video overflow-hidden relative">
        <Image
          className="w-full"
          src="/cuacane-dashboard-2-crop.png"
          alt="Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-5 pt-3.5">
        <h3 className="text-center font-semibold text-xl">Cuacane Weater</h3>
        <p className="text-center text-gray-300 text-base -mx-1 mt-2 mb-4 leading-tight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget
          neque at nisl sodales pharetra euismod quis nisi. Vestibulum ante.
        </p>
        <div className="grid grid-cols-2 gap-5">
          <a
            className="flex items-center justify-center h-11 rounded-xl bg-blue-600 hover:bg-blue-500 transition"
            href="https://github.com"
          >
            <RiLink className="text-2xl mr-2" />
            Preview
          </a>
          <a
            className="flex items-center justify-center h-11 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition"
            href="https://www.github.com"
          >
            <RiGithubFill className="text-[1.625rem] mr-2" />
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

export default Work;
